import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector("#portfolio");
    portfolioSection?.scrollIntoView({ behavior: "smooth" });
  }; 

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full z-10">
        {/* Background Image with Overlay */}
      {/* <BackgroundRippleEffect /> */}
      <BackgroundBeamsWithCollision className="absolute inset-0 z-10">
        <div className="absolute inset-0 z-10">
          <img
            src={heroWorkspace}
            alt="Creative workspace"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/95 to-background/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              Fasuluku
              <br />
              <span className="gradient-text">Bayoh</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Graphic Designer • Brand Strategist • Photographer • Videographer
              <br />
              <span className="text-base md:text-md mt-2 block">
                Crafting compelling visual identities that help brands stand out and drive business growth.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-semibold group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted/50 px-8 py-3 text-lg"
              >
                Let's Collaborate
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
             
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        </BackgroundBeamsWithCollision>
      </section>
    </div>
  );
};

export default Hero;