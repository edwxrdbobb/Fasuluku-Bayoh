import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioBranding from "@/assets/portfolio-branding.jpg";
import portfolioPhotography from "@/assets/portfolio-photography.jpg";
import { Carousel, Card as CarouselCard } from "@/components/ui/apple-cards-carousel";

// Import flyer images
import flyer1 from "@/assets/FLYERS/219_pool_party.jpg";
import flyer2 from "@/assets/FLYERS/A2 GUINNESS 2.jpg";
import flyer3 from "@/assets/FLYERS/A2 MALT.jpg";
import flyer4 from "@/assets/FLYERS/Easter.jpg";
import flyer5 from "@/assets/FLYERS/KOLAT.jpg";
import flyer6 from "@/assets/FLYERS/LAJ 2.jpg";

const Portfolio = () => {
  const cards = [
    {
      category: "Event Promotion",
      title: "Pool Party Flyer",
      src: flyer1,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Vibrant event promotion design for an exclusive pool party, featuring eye-catching visuals and clear information hierarchy to drive attendance.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Event</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Promotion</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Lifestyle</span>
          </div>
        </div>
      ),
    },
    {
      category: "Beverage Marketing",
      title: "Guinness Campaign",
      src: flyer2,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Bold and distinctive promotional material for Guinness, capturing the brand's premium positioning while resonating with the local market.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Beverage</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Advertising</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Brand</span>
          </div>
        </div>
      ),
    },
    {
      category: "Product Launch",
      title: "Malta Promotion",
      src: flyer3,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Strategic product promotion design for Malta, highlighting product benefits and creating an appealing visual identity that connects with consumers.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Product</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Marketing</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Beverage</span>
          </div>
        </div>
      ),
    },
    {
      category: "Holiday Campaign",
      title: "Easter Celebration",
      src: flyer4,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Festive and engaging Easter promotional design that combines holiday themes with compelling marketing messages to drive seasonal engagement.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Holiday</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Seasonal</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Celebration</span>
          </div>
        </div>
      ),
    },
    {
      category: "Music Promotion",
      title: "KOLAT Event",
      src: flyer5,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Dynamic music event promotion featuring bold typography and striking visuals to create excitement and drive ticket sales for the KOLAT performance.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Music</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Event</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Entertainment</span>
          </div>
        </div>
      ),
    },
    {
      category: "Artist Promotion",
      title: "LAJ Concert",
      src: flyer6,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Impactful concert promotion design for artist LAJ, combining powerful imagery and clear event information to build anticipation and maximize attendance.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Concert</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Artist</span>
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Entertainment</span>
          </div>
        </div>
      ),
    },
  ];

  const carouselItems = cards.map((card, index) => (
    <CarouselCard key={index} card={card} index={index} />
  ));

  return (
    <section id="portfolio" className="section-padding bg-muted/20">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12 container-custom">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my recent projects showcasing creative excellence 
            across branding, photography, and video production.
          </p>
        </div>

        {/* Carousel */}
        <Carousel items={carouselItems} />

        {/* Call to Action */}
        <div className="text-center mt-16 container-custom">
          <Card className="inline-block p-8 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's collaborate on your next project and bring your vision to life 
              with exceptional creativity and strategic thinking.
            </p>
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;