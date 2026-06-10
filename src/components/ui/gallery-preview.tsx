import { Link } from 'react-router-dom';
import { Button } from './button';
import { OptimizedImage } from './optimized-image';

export const GalleryPreview = () => {
  const previewItems = [
    { src: '/lovable-uploads/922fb99c-5be6-40a5-92c6-79e56d2f406a.webp', label: 'Party' },
    { src: '/lovable-uploads/9cf9f6fb-e16d-46f9-b2d3-654b8c26e73e.webp', label: 'Ambience' },
    { src: '/lovable-uploads/5731ead5-b641-42d5-b802-0f7ce04739e5.webp', label: 'Cocktails' },
    { src: '/food/4.webp', label: 'Food' },
    { src: '/lovable-uploads/53404d9a-c127-4f4b-aa70-57548acb28ae.webp', label: 'Rooftop' },
    { src: '/lovable-uploads/719de173-88e6-4746-a136-0eb6ce9e87dc.webp', label: 'Live Music' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary mb-3">
            Gallery
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-base sm:text-lg">
            A curated mix of party nights, ambience, cocktails and food from our rooftop destinations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {previewItems.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl lg:rounded-2xl bg-card shadow-elegant transition-premium hover:shadow-luxury">
              <OptimizedImage
                src={item.src}
                alt={`Macaw by Stories ${item.label.toLowerCase()} ${idx + 1}`}
                wrapperClassName="aspect-[4/3] w-full"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={idx < 2}
              />
              {/* <div className="absolute left-3 top-3 z-10">
                <span className="bg-primary text-charcoal px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {item.label}
                </span>
              </div> */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link to="/gallery">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary bg-primary/10 hover:bg-primary hover:text-charcoal font-semibold px-8 py-4 rounded-xl transition-smooth"
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};


