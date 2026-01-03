import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const BLOGS = [
  {
    slug: '5-must-try-cocktails-at-macaw',
    title: '5 Must-Try Cocktails at Macaw',
    author: 'Mixologist Team',
    date: '2024-01-15',
    readTime: '5 min read',
    image: '/food/10.webp',
    excerpt: 'Discover our signature cocktails that perfectly capture the essence of tropical luxury and urban sophistication.',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-foreground leading-relaxed mb-6">
          Whether you're vibing under Chennai’s starry skyline or soaking up Bengaluru’s rooftop breeze, Macaw sets the scene for unforgettable nights—and the cocktails are at the heart of the experience. Crafted with precision, flair, and flavor, our signature drinks are more than beverages—they’re moments in a glass.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Here are five must-try cocktails that define the Macaw experience:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-2">1. Sunset Macaw</h2>
            <p className="text-sm text-muted-foreground mb-2">Mood: Tropical | Fruity | Instagram-worthy</p>
            <p className="text-foreground leading-relaxed">
              A vibrant burst of mango, passionfruit, and spiced rum topped with a splash of soda—this golden-orange beauty mirrors the perfect rooftop sunset. Garnished with a chili rim, it's got that sweet-heat balance that keeps the night interesting.
            </p>
            <p className="text-foreground leading-relaxed mt-2"><strong>Why You’ll Love It:</strong> Perfect for golden hour selfies and your first round of the evening.</p>
          </div>

          <div>
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-2">2. Feathered Mojito</h2>
            <p className="text-sm text-muted-foreground mb-2">Mood: Fresh | Uplifting | Crowd-favorite</p>
            <p className="text-foreground leading-relaxed">
              A twist on the Cuban classic—this minty refreshment combines white rum, lime, sugar, and soda with a hint of tropical pineapple. Served tall over crushed ice with feather-shaped mint garnish.
            </p>
            <p className="text-foreground leading-relaxed mt-2"><strong>Why You’ll Love It:</strong> It's your go-to “refresher” between bites, beats, or bold shots.</p>
          </div>

          <div>
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-2">3. Black Macaw</h2>
            <p className="text-sm text-muted-foreground mb-2">Mood: Bold | Dark | Instagrammable</p>
            <p className="text-foreground leading-relaxed">
              Infused with activated charcoal, this striking cocktail uses vodka, elderflower liqueur, lemon, and a touch of syrup. It’s moody, mysterious, and makes a dramatic entrance with its matte black finish.
            </p>
            <p className="text-foreground leading-relaxed mt-2"><strong>Why You’ll Love It:</strong> Visually striking and surprisingly smooth—perfect for a bold statement sip.</p>
          </div>

          <div>
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-2">4. Skyline Sour</h2>
            <p className="text-sm text-muted-foreground mb-2">Mood: Sophisticated | Smooth | Balanced</p>
            <p className="text-foreground leading-relaxed">
              Our take on a whiskey sour, featuring bourbon, fresh lemon juice, and a splash of apricot bitters, topped with a cloud of egg white foam. Finished with edible gold dust—because why not?
            </p>
            <p className="text-foreground leading-relaxed mt-2"><strong>Why You’ll Love It:</strong> A luxurious twist on a classic that captures rooftop elegance in every sip.</p>
          </div>

          <div>
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-2">5. Macaw Mule</h2>
            <p className="text-sm text-muted-foreground mb-2">Mood: Spicy | Zesty | Shareable</p>
            <p className="text-foreground leading-relaxed">
              This zippy blend of ginger beer, vodka, lime, and a hint of lemongrass is served in our signature copper mug. Light, sharp, and totally addictive—this one’s a hit whether you're sipping solo or passing it around.
            </p>
            <p className="text-foreground leading-relaxed mt-2"><strong>Why You’ll Love It:</strong> A rooftop classic with a twist—cool, spicy, and completely refreshing.</p>
          </div>
        </div>

        <div className="mt-10 p-4 rounded-lg border border-border bg-background/50">
          <p className="mb-3">🥂 <strong>Bonus Tip:</strong> Ask your bartender for the off-menu specials—our mixologists love a challenge and may surprise you with an experimental masterpiece.</p>
        </div>
      </div>
    )
  },
  {
    slug: 'behind-the-design-the-story-of-our-tropical-paradise',
    title: 'Behind the Design: The Story of Our Tropical Paradise',
    author: 'Design Team',
    date: '2024-01-12',
    readTime: '7 min read',
    image: '/lovable-uploads/6f51ee45-ebd9-4968-87bc-81a4529c0ac4.png',
    excerpt: 'Take a journey through the creative process behind our stunning rooftop designs that blend nature with luxury.',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-foreground leading-relaxed mb-6">
          When you step into Macaw, whether in Chennai or Bengaluru, you instantly feel it—the ambiance, the energy, the escape. But behind the cocktails and city lights lies a carefully curated design philosophy, one that transforms our rooftops into immersive, tropical sanctuaries.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          This is the story behind how Macaw became more than just a nightlife destination—it became a tropical experience.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌴 Rooted in Nature, Elevated by Design</h2>
        <p className="text-foreground leading-relaxed mb-4">
          From the very beginning, we envisioned Macaw as an urban escape—a space where the vibrancy of nature could live in harmony with the pulse of the city. Inspired by the colorful elegance of the macaw bird, we chose tropical design elements to echo its bold, free-spirited energy.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Every detail was chosen to reflect that ethos:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Lush greenery that wraps around corners and climbs across railings</li>
          <li>Natural wood finishes that warm the space without overpowering it</li>
          <li>Tropical color palettes—deep greens, sunset oranges, ocean blues—that transport you instantly</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-4 mb-8">
          The result? A space that feels alive, refreshing, and completely detached from the city below.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">✨ Luxury in the Details</h2>
        <p className="text-foreground leading-relaxed mb-4">
          While nature sets the tone, it’s luxury that sets Macaw apart. We layered in premium textures and refined finishes—from plush seating and custom lighting to polished metal accents and artisanal decor.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          Our lighting is ambient by design, glowing like twilight and letting the skyline take center stage. Every corner is Instagram-worthy but also intimate.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          It’s not just design—it’s storytelling. Each material and finish was chosen to make guests feel comfortable, confident, and indulgent.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🔊 Sonic Ambiance: Designed to Move You</h2>
        <p className="text-foreground leading-relaxed mb-4">
          A tropical paradise is not just about what you see—it's about what you hear. At Macaw, sound is a design layer. Our curated soundscapes—from slow grooves during sunset to high-energy beats as the night builds—are matched to the flow of the evening.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Sound design is engineered to wrap around you, not overpower you, making space for both conversation and celebration. Whether it’s the bass drop during Desi Night or the mellow vibe of Acoustic Sundays, every beat is part of the spatial experience.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🪴 Function Meets Flow</h2>
        <p className="text-foreground leading-relaxed mb-4">
          We’ve also paid close attention to the movement and flow of people through our space. From the positioning of the bar to the dance floor layout, every element is intentionally designed to support effortless transitions between lounging, dining, and dancing.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Our rooftop layouts were built for discovery—no two corners feel the same, and that’s the magic.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🏙️ Two Cities, One Escape</h2>
        <p className="text-foreground leading-relaxed mb-3">Despite being in two different cities, both Macaw rooftops maintain a consistent design language while celebrating their own character:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Macaw by Stories – Chennai leans into ocean breeze and openness, with a spacious layout perfect for groups and live events.</li>
          <li>Macaw – Bengaluru embraces intimacy with a boutique rooftop layout and sleek modern finishes.</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-4 mb-8">
          What unites them? The escape they offer—up, above, and beyond.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌟 Final Sip</h2>
        <p className="text-foreground leading-relaxed mb-4">
          At Macaw, design isn’t just a backdrop—it’s a core part of the story. It’s the reason our spaces feel effortlessly chic, wildly alive, and endlessly memorable.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          So next time you walk in, pause and take a look around. That palm leaf overhead? That golden light spilling onto your cocktail? They’re all part of the paradise we built for you.
        </p>
      </div>
    )
  },
  {
    slug: 'how-to-host-the-perfect-corporate-event-in-bangalore',
    title: 'How to Host the Perfect Corporate Event in Bangalore',
    author: 'Events Team',
    date: '2024-01-10',
    readTime: '6 min read',
    image: '/party/1.webp',
    excerpt: 'Planning a corporate event? Discover why Macaw Bangalore is the perfect venue for business celebrations.',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-foreground leading-relaxed mb-6">
          When it comes to corporate events, the right venue can make or break the experience. Whether you're celebrating a company milestone, launching a product, or simply bringing your team together for a well-deserved night out, Macaw Bangalore offers the perfect balance of sophistication, energy, and functionality.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Here’s how to host a memorable and seamless corporate event—Macaw style.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🏙️ 1. Choose a Rooftop Venue That Inspires</h2>
        <p className="text-foreground leading-relaxed mb-2">
          Your team deserves more than a boardroom. At Macaw Bengaluru, we trade conference walls for open skies and skyline views. Nestled in the heart of Bommanahalli, our rooftop offers a refreshing atmosphere where creativity and camaraderie flow freely.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Why it works:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Unique setting that breaks routine</li>
          <li>City views that impress clients and employees alike</li>
          <li>A space designed to relax and connect</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">🛋️ 2. Opt for Flexible, Elegant Layouts</h2>
        <p className="text-foreground leading-relaxed mb-3">
          From networking mixers to formal sit-down dinners, Macaw's modular floorplan can be tailored to your agenda. Whether you're hosting 30 VIP guests or a 200-person team party, we offer multiple seating formats, stage options, and zones for private experiences.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Available setups include:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Cocktail-style high tables</li>
          <li>Lounge seating clusters</li>
          <li>Formal banquet-style arrangements</li>
          <li>Stage and mic for speeches or entertainment</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">🍸 3. Elevate the Experience with Signature Cocktails</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Ditch the standard bar menu. Macaw’s mixologists bring creativity, flair, and flavor to every glass. Customize your own event cocktail, host a tasting session, or let guests choose from our best-sellers like the Sunset Macaw or Black Macaw.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Optional Add-ons:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Welcome drinks branded with your company logo</li>
          <li>Beverage packages and open-bar options</li>
          <li>Non-alcoholic mocktail bars</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">🍽️ 4. Curate a Menu That Works for Every Palate</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Our culinary team knows how to please a crowd—from premium finger foods to curated buffet spreads or à la carte menus. All dishes are designed to be flavorful, shareable, and elegant enough for a corporate setting.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Popular options:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Fusion bar bites & gourmet sliders</li>
          <li>Indian and Continental live counters</li>
          <li>Custom menus to meet dietary preferences</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">🎧 5. Set the Mood with Music & Entertainment</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Every event needs a vibe—and at Macaw, we’ve mastered it. From ambient background playlists to live DJ sets or acoustic performers, we’ll work with you to create the right sonic atmosphere that supports your brand tone.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Entertainment services available:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Live bands or DJs</li>
          <li>Projector screens for brand presentations</li>
          <li>Emcee hosting for team award nights</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">🎁 6. Leave a Lasting Impression</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Looking to go the extra mile? Macaw can help you craft customized details that make your event unforgettable:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Branded welcome boards or menus</li>
          <li>Custom lighting (your company colors!)</li>
          <li>Gift bags or takeaways placed on each table</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">📅 Ready to Host?</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Macaw by Stories – Bengaluru is more than just a venue—it’s a partner in making your event unforgettable. We offer:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Dedicated event planning support</li>
          <li>Custom packages for small teams to large enterprises</li>
          <li>Hassle-free coordination with vendors, DJs, decorators, and more</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">📍 Venue Details</h2>
        <p className="text-foreground leading-relaxed mb-1">Address: 2224–2225, AECS Layout, Hosur Main Road, Bommanahalli, Bengaluru</p>
        <p className="text-foreground leading-relaxed mb-1">Capacity: 50–250 pax</p>
        <p className="text-foreground leading-relaxed mb-1">Event Contact: +91‑8068507673 | events@macaw.in</p>
        <p className="text-foreground leading-relaxed mb-8">Instagram: @macawbystories</p>
      </div>
    )
  },
  {
    slug: 'weekend-vibes-best-times-to-visit-macaw-chennai',
    title: 'Weekend Vibes: Best Times to Visit Macaw Chennai',
    author: 'Macaw Team',
    date: '2024-01-05',
    readTime: '5 min read',
    image: '/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.png',
    excerpt: 'From sunset sessions to late-night DJ sets, discover the perfect time to experience our Chennai location.',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-foreground leading-relaxed mb-6">
          Weekends at Macaw Chennai are more than just nights out—they’re rituals of flavor, music, and rooftop magic. Whether you’re planning a romantic date, a reunion with friends, or just need to escape the ordinary, Macaw’s Sholinganallur rooftop delivers the perfect atmosphere, hour by hour.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          So… when’s the best time to visit? Here’s your insider guide to making the most of your weekend at Macaw Chennai.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌇 Golden Hour: 5:30 PM – 7:30 PM</h2>
        <p className="text-foreground leading-relaxed mb-2">
          This is when Macaw glows—literally. The sun dips over the OMR skyline, casting warm hues over our rooftop garden, cocktails catch the light just right, and conversations flow effortlessly.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Best for:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Sundowners & light bites</li>
          <li>Couple dates with a view</li>
          <li>Pre-party hangouts before it gets wild</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-2 mb-8">
          Try this: Order a Sunset Macaw cocktail to match the sky, paired with our signature hot wings.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🍽️ Dinner Hour: 8:00 PM – 10:00 PM</h2>
        <p className="text-foreground leading-relaxed mb-2">
          Looking for a full culinary experience? This is when our kitchen hits its stride and the mood transitions from laid-back to luxe. Soft ambient beats play in the background while guests settle in for shared platters, curated cocktails, and table-side service.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Best for:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Small celebrations</li>
          <li>Foodies looking to explore our menu</li>
          <li>Classy catch-ups over cocktails</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-2 mb-8">Pro Tip: Reserve a corner booth in advance—it fills up fast.</p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🎧 Peak Vibes: 10:00 PM – 12:30 AM</h2>
        <p className="text-foreground leading-relaxed mb-2">
          This is when Macaw transforms. The lights dim, the energy spikes, the DJ takes control—and the dance floor comes alive. Whether it’s Desi Night, EDM Thursdays, or our weekend resident DJ, the vibe is electric.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Best for:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Party squads & birthday crews</li>
          <li>Dancers, DJs, and night owls</li>
          <li>Last-call legends</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-2 mb-8">Don’t Miss: Our signature Black Macaw cocktail—it’s bold, edgy, and perfect for night mode.</p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌙 Late-Night Chill: 12:30 AM – Close</h2>
        <p className="text-foreground leading-relaxed mb-2">
          Need to wind down or reset between tracks? Our space is designed for both—turn up the volume or slide into a quiet corner. Late-night snacks and mellow mixes create a cozy, unhurried feel perfect for closing conversations or catching up with someone new.
        </p>
        <p className="text-foreground leading-relaxed mb-3">Best for:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Afterparties & late-night bites</li>
          <li>Intimate convos</li>
          <li>One last round before the city sleeps</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mt-8 mb-3">📸 Bonus: Best Photo Ops</h2>
        <p className="text-foreground leading-relaxed mb-3">Want to capture the weekend vibe? Try:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>The sunset corner by the planter wall</li>
          <li>The neon wing mural (IG must!)</li>
          <li>Your cocktail against the skyline backdrop</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-2 mb-8">Don’t forget to tag us at @macawchennai for a chance to be featured!</p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🎟️ Ready to Make Your Weekend Count?</h2>
        <p className="text-foreground leading-relaxed mb-2">
          Macaw by Stories – Chennai is where the city comes to unwind, recharge, and celebrate. Whether you're coming for dinner, dancing, or both—there’s always a perfect moment waiting for you.
        </p>
        <p className="text-foreground leading-relaxed">📍 Address: 132, Max Kailash Building, Sholinganallur, OMR, Chennai</p>
        <p className="text-foreground leading-relaxed">📅 Best days: Thursday to Sunday</p>
        <p className="text-foreground leading-relaxed mb-8">📞 Book now: +91‑8045883769</p>
      </div>
    )
  },
  {
    slug: 'spotlight-on-our-signature-sushi-platters',
    title: 'Spotlight on Our Signature Sushi Platters',
    author: 'Chef Team',
    date: '2024-01-08',
    readTime: '4 min read',
    image: '/food/1.webp',
    excerpt: 'Explore the artistry behind our Japanese-inspired cuisine that perfectly complements our tropical ambiance.',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-foreground leading-relaxed mb-6">
          At Macaw, our sushi is more than a plate—it’s a performance. Hand-crafted with precision by our culinary team, each roll balances freshness, texture, and flavor, designed to pair beautifully with our tropical cocktails and rooftop vibe.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Whether you’re a purist or a flavor explorer, our signature platters offer something unforgettable for every palate.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🍣 The Macaw Signature Platter</h2>
        <p className="text-foreground leading-relaxed mb-3">
          A curated selection of guest favorites—perfect for sharing. Expect a balanced mix of classics and house specials, presented with pickled ginger, wasabi, and chef’s seasonal garnishes.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground mb-8">
          <li><strong>California Roll:</strong> Crab, avocado, cucumber—clean, creamy, and timeless.</li>
          <li><strong>Spicy Tuna Roll:</strong> A gentle kick with silky tuna and chili mayo.</li>
          <li><strong>Veggie Crunch Roll:</strong> Tempura vegetables, avocado, and a sesame finish.</li>
          <li><strong>Chef’s Nigiri:</strong> Daily fish selection, torched or raw, brushed with tare.</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🔥 Torched Truffle Salmon Roll</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Crowd-pleaser alert. We layer salmon over a creamy roll, kiss it with a quick torch, then finish with truffle oil and chives. Rich, aromatic, and melt-in-the-mouth.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Pair it with: <em>Skyline Sour</em>—the citrus cuts through the richness beautifully.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌶️ Volcano Prawn Tempura Roll</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Crispy prawn tempura rolled with avocado and tobiko, topped with a warm, spicy mayo “volcano” glaze. Texture meets umami in every bite.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Pair it with: <em>Macaw Mule</em>—ginger spice complements the heat.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌿 Garden Dragon (Vegetarian)</h2>
        <p className="text-foreground leading-relaxed mb-3">
          A vibrant roll of cucumber, asparagus, and avocado topped with thin sheets of charred bell pepper and sesame. Light, clean, and addictive.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Pair it with: <em>Feathered Mojito</em>—mint and lime echo the freshness.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">✨ The Experience, The Ritual</h2>
        <p className="text-foreground leading-relaxed mb-3">
          We serve sushi the way it’s meant to be enjoyed—beautifully plated, thoughtfully paced, and always fresh. Our chefs source high-quality ingredients and finish each platter with microgreens, yuzu, or togarashi for that final flourish.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          Pro Tip: Ask for the <strong>Chef’s Seasonal Roll</strong>—a rotating creation inspired by peak produce and flavor trends.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">📸 Picture-Perfect Platters</h2>
        <p className="text-foreground leading-relaxed mb-8">
          Our presentation is designed for the camera and the table. Find your shot under warm ambient lighting or by the skyline backdrop—then tag us to get featured.
        </p>
      </div>
    )
  },
  {
    slug: 'the-art-of-rooftop-entertainment',
    title: 'The Art of Rooftop Entertainment',
    author: 'Entertainment Team',
    date: '2024-01-03',
    readTime: '6 min read',
    image: '/party/2.webp',
    excerpt: 'Learn about our approach to creating unforgettable entertainment experiences across both locations.',
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-foreground leading-relaxed mb-6">
          At Macaw, entertainment isn’t just part of the night—it is the night. Across our rooftops in Chennai and Bengaluru, we’ve curated a distinct rhythm that turns casual evenings into legendary memories. From live music to electrifying DJ sets, our entertainment strategy is all about vibe, energy, and experience.
        </p>
        <p className="text-foreground leading-relaxed mb-8">This is how we design the perfect night—on the roof, under the stars.</p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🎧 Curated Beats for Every Mood</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Music is the heartbeat of Macaw. Whether you’re sipping cocktails at sunset or turning up after dark, we make sure the soundtrack fits the moment.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
          <li><strong>Early Evenings:</strong> Expect chill lounge vibes, lo-fi beats, or acoustic sets to ease you into the evening. It’s about atmosphere—setting the tone, not stealing the show.</li>
          <li><strong>Peak Hours:</strong> This is where we turn it up. Live DJs drop commercial, desi, and deep house sets—crafted to get you on your feet and keep the energy flowing.</li>
          <li><strong>Special Nights:</strong> Watch out for theme nights like Desi Thursdays, Techno Fridays, or Sundowner Sessions, each curated with its own unique sound identity.</li>
        </ul>
        <p className="text-foreground leading-relaxed mb-8">Why it matters: Every rooftop has a view—but not every rooftop knows how to make it move.</p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🕺 Designed for Dance and Discovery</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Entertainment at Macaw isn’t just about what you hear—it’s also about how you move. Both locations are designed with flow in mind, blending dance zones with intimate lounges and bar-side action. This gives guests the freedom to vibe how they want.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
          <li><strong>Dance Floors:</strong> Strategically placed for maximum energy, yet never intrusive.</li>
          <li><strong>Live Acts:</strong> Occasionally, our rooftops host local artists, bands, and performers, transforming the space into a full-blown showcase.</li>
          <li><strong>Interactive Events:</strong> From open-mic nights to curated brand collabs, we keep it dynamic and fresh.</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🎨 Visual Atmosphere that Moves with You</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Our rooftop spaces aren’t static—they react with the night. Using dynamic lighting, visuals, and decor, we create immersive zones that evolve from mellow to electric as the night unfolds.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
          <li><strong>Lighting Design:</strong> Warm ambient tones early on, transitioning into rhythmic LED and club-style visuals later in the evening.</li>
          <li><strong>Photo Moments:</strong> Instagrammable spots (neon signs, art walls, skyline shots) are part of the experience.</li>
          <li><strong>Soundscapes:</strong> Our sound systems are calibrated to deliver immersive audio while keeping conversation-friendly corners.</li>
        </ul>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🎟️ Events You’ll Actually Want to Attend</h2>
        <p className="text-foreground leading-relaxed mb-3">
          We’re constantly evolving our calendar with seasonal specials, brand collabs, and community-driven celebrations.
        </p>
        <p className="text-foreground leading-relaxed mb-2">Recurring Highlights Include:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
          <li>Desi Night (Chennai & Bengaluru)</li>
          <li>Live Artist Showcases</li>
          <li>Themed Brunch Parties</li>
          <li>Private Rooftop Takeovers for Brands & Influencers</li>
        </ul>
        <p className="text-foreground leading-relaxed mb-8">
          <strong>Customizable for Groups:</strong> Whether it’s a corporate party or birthday bash, we can tailor entertainment to suit your crowd—DJs, live performers, special menus and more.
        </p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌆 One Brand, Two Vibes</h2>
        <p className="text-foreground leading-relaxed mb-2">
          Though united by the Macaw spirit, each city brings its own flavor to the entertainment:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
          <li>Macaw Chennai leans into its ocean-side setting with relaxed sundowners that build into high-energy dance nights.</li>
          <li>Macaw Bengaluru offers a more urban, boutique-style experience with curated sets, tighter zones, and themed nights that pack a punch.</li>
        </ul>
        <p className="text-foreground leading-relaxed mb-8">No matter where you party, Macaw brings the atmosphere.</p>

        <h2 className="font-cinzel text-2xl font-bold text-primary mb-3">🌟 The Takeaway</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Entertainment at Macaw is not a backdrop—it’s the star of the show. We don’t just play music or host DJs—we create immersive rooftop journeys that leave you buzzing long after last call.
        </p>
        <p className="text-foreground leading-relaxed mb-8">
          So whether you’re here to dance, vibe, or discover something new—just look up. The rooftop’s calling.
        </p>
      </div>
    )
  },
];

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = useMemo(() => BLOGS.find(b => b.slug === slug), [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-foreground">Blog not found.</p>
            <Link to="/media" className="text-primary underline">Back to Media</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHead 
        title={`${blog.title} - Macaw by Stories`} 
        description={blog.excerpt}
      />
      <Navigation />

      <main className="pt-20">
        <section className="py-12 px-4 bg-gradient-primary">
          <div className="container mx-auto max-w-3xl">
            <Link to="/media" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Media
            </Link>
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-4">{blog.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-card border-border overflow-hidden p-6 sm:p-10">
              {blog.content}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <Button 
                  className="bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth"
                  onClick={() => window.location.assign('/locations')}
                >
                  Explore Our Locations →
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-smooth"
                  onClick={() => window.open('https://webbook.wegsoft.com/H7G6F5E4D3C2B1A0Z9Y8', '_blank', 'noopener,noreferrer')}
                >
                  Make a Reservation →
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
