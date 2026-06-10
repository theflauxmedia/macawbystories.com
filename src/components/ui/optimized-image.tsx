import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  priority?: boolean;
  wrapperClassName?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-muted/20', wrapperClassName)}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-500 ease-out',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
        {...props}
      />
    </div>
  );
};
