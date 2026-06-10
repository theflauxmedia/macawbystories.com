import { useEffect } from 'react';
import {
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from './siteConfig';

const PAGE_JSON_LD_ID = 'page-structured-data';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageHeadProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  structuredData?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
  noIndex?: boolean;
}

function upsertMeta(
  selector: string,
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function setStructuredData(data: object | object[] | undefined) {
  const existing = document.getElementById(PAGE_JSON_LD_ID);
  if (existing) {
    existing.remove();
  }

  if (!data) return;

  const script = document.createElement('script');
  script.id = PAGE_JSON_LD_ID;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(
    Array.isArray(data) ? { '@context': 'https://schema.org', '@graph': data } : data,
  );
  document.head.appendChild(script);
}

export const PageHead = ({
  title,
  description,
  keywords,
  path = '/',
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  structuredData,
  breadcrumbs,
  noIndex = false,
}: PageHeadProps) => {
  const structuredDataKey = structuredData ? JSON.stringify(structuredData) : '';

  useEffect(() => {
    const canonical = canonicalUrl ?? absoluteUrl(path);
    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage);

    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);

    if (keywords) {
      upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    );

    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', resolvedOgImage);
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${SITE_NAME} — rooftop bar and fine dining`);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', resolvedOgImage);

    setStructuredData(structuredData);

    return () => {
      document.getElementById(PAGE_JSON_LD_ID)?.remove();
    };
  }, [
    title,
    description,
    keywords,
    path,
    canonicalUrl,
    ogImage,
    ogType,
    structuredDataKey,
    noIndex,
  ]);

  return null;
};
