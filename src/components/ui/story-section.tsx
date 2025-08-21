import { useEffect, useRef } from 'react';

export const StorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.scroll-trigger');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="scroll-trigger opacity-0">
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                In the heart of bustling cities, where stories are born and memories are crafted, 
                <span className="text-primary font-semibold"> Macaw by Stories</span> emerges as 
                a beacon of tropical luxury and sophisticated dining.
              </p>
              
              <p>
                Inspired by the vibrant plumage of the majestic macaw and the lush mystique of 
                tropical rainforests, our rooftop sanctuary transports you to a world where 
                every meal is an adventure and every moment tells a story.
              </p>
              
              <p>
                From the panoramic views of Bangalore's skyline to the coastal breezes of Chennai, 
                we've created spaces that celebrate the art of fine dining, exceptional cocktails, 
                and the joy of bringing people together in extraordinary settings.
              </p>
              
              <div className="pt-6">
                <blockquote className="text-primary font-cinzel text-xl italic border-l-4 border-primary pl-6">
                  "Where vibrant stories unfold, and tropical luxury meets urban sophistication."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="scroll-trigger opacity-0 relative">
            <div className="bg-gradient-primary rounded-3xl p-8 shadow-luxury">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-cinzel">500+</div>
                  <div className="text-sm text-foreground">Stories Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-cinzel">2</div>
                  <div className="text-sm text-foreground">Iconic Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-cinzel">50+</div>
                  <div className="text-sm text-foreground">Signature Dishes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-cinzel">∞</div>
                  <div className="text-sm text-foreground">Memorable Moments</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="font-cinzel text-xl font-semibold text-primary mb-3">
                  Award-Winning Experience
                </h3>
                <p className="text-sm text-foreground">
                  Recognized for excellence in hospitality, culinary innovation, 
                  and creating extraordinary dining experiences across South India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};