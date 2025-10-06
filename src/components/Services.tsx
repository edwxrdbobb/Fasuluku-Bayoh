import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Camera, Video, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating visual solutions that communicate your brand's story with impact and elegance.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics", "Packaging Design"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Developing comprehensive brand strategies that position your business for sustainable growth.",
      features: ["Brand Positioning", "Market Research", "Competitive Analysis", "Brand Guidelines", "Messaging Strategy"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing compelling imagery that tells your story and connects with your audience.",
      features: ["Product Photography", "Portrait Sessions", "Commercial Photography", "Event Coverage", "Editorial Photography"],
      gradient: "from-secondary/40 to-secondary/10"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Creating dynamic video content that engages viewers and drives meaningful action.",
      features: ["Brand Videos", "Product Demos", "Commercial Production", "Event Documentation", "Social Media Content"],
      gradient: "from-muted/40 to-muted/10"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of creative services designed to elevate your brand 
            and create meaningful connections with your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className={`p-8 hover-lift bg-gradient-to-br ${service.gradient} border-border/50 hover:border-accent/30 transition-all duration-300`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground">Key Offerings:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="text-xs border-border/50 hover:border-accent/50 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Overview */}
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            My <span className="gradient-text">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, goals, and target audience" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive creative strategy and roadmap" },
              { step: "03", title: "Creation", description: "Bringing concepts to life with precision and artistry" },
              { step: "04", title: "Delivery", description: "Providing polished results that exceed expectations" }
            ].map((phase) => (
              <div key={phase.step} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <span className="text-xl font-bold gradient-text">{phase.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;