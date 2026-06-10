import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Locations = lazy(() => import("./pages/Locations"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Packages = lazy(() => import("./pages/Packages"));
const ChennaiPackages = lazy(() => import("./pages/ChennaiPackages"));
const Media = lazy(() => import("./pages/Media"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-background">
    <div className="h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/chennai-packages" element={<ChennaiPackages />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/blog/:slug" element={<BlogDetail />} />
            <Route path="/blog" element={<Navigate to="/media" replace />} />
            <Route path="/events" element={<Navigate to="/packages" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
