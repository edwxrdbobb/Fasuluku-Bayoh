import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Twitter, Dribbble, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Dribbble, href: "#", label: "Dribbble" }
  ];

  const quickLinks = [
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand & Description */}
            <div className="space-y-6">
              <div className="font-display text-2xl font-semibold">
                <span className="gradient-text">Fasuluku Bayoh</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                A multidisciplinary creative professional crafting compelling visual identities 
                that help brands stand out in the market and drive business growth.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="w-10 h-10 p-0 border-border hover:border-accent hover:bg-accent/10"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Let's Connect</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:fasuluku@example.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    fasuluku@example.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a
                    href="tel:+232XXXXXXXX"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    +232 XX XXX XXXX
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground">Sierra Leone</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Fasuluku Bayoh. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-border hover:border-accent hover:bg-accent/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;