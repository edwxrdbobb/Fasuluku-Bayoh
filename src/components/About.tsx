import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";
import { CarouselDemo } from "./CarouselLarge";

const About = () => {
  const skills = [
    "Brand Strategy", "Logo Design", "Visual Identity", "Photography",
    "Video Production", "Print Design", "Creative Direction",
    "Adobe Creative Suite"
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={profilePhoto}
                alt="Professional portrait"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -right-8 p-6 bg-card/80 backdrop-blur-md border-border">
              <div className="text-2xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </Card>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
          <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm Fasuluku Bayoh, a graduate of Limkokwing University and a multidisciplinary creative 
                  professional specializing in graphic design, brand strategy, photography, and video production.
                </p>
                <p>
                  With over 5 years of experience in the creative industry, I've had the privilege of working 
                  with reputable brands like Sierra Leone Brewery Limited, Action Aid Sierra Leone, Afro International, 
                  United Africa Wears (UK/Sierra Leone), Office of the Vice President, and BTL Marketing Sierra Leone.
                </p>
                <p>
                  I've also helped numerous small to medium-sized enterprises develop strong visual brand identities 
                  that help them stand out in the market while increasing profit, revenue, engagement, and leads. 
                  As a great team player and fast learner, I enjoy researching new trends in and out of the creative 
                  industry while continuously refining my craft.
                </p>
                <p>
                  When I'm not creating, I enjoy reading books, watching sports (especially soccer and boxing), 
                  and listening to music—my favorite genres include Reggae, Dancehall, Hip-Hop, Afrobeats, and EDM/House.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/50 text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <Card className="p-6 bg-gradient-to-r from-muted/50 to-transparent border-border">
              <blockquote className="text-lg italic text-foreground">
                "Great design combines strategic thinking with artistic vision, ensuring every 
                project not only looks exceptional but also achieves meaningful business objectives."
              </blockquote>
              <div className="text-sm text-muted-foreground mt-3">— My Design Philosophy</div>
            </Card>
          </div>
        </div>
      </div>

      <div className="container my-16">
         <h2 className="text-4xl lg:text-5xl font-bold mb-2">
            Showcase 
            {/* <span className="gradient-text">Me</span> */}
          </h2>
          <CarouselDemo />
      </div>
    </section>
  );
};

export default About;