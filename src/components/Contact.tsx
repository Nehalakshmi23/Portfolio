import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactLinks = [
  {
    icon: FileText,
    label: "View Resume",
    href: "https://drive.google.com/file/d/19NVulkwAjrTka2on-pJcmb1YRIiU0Q7q/view?usp=sharing",
    description: "My skills, projects & achievements",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Nehalakshmi23",
    description: "View my real projects and code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neha-r-b7266b258/",
    description: "Connect with me professionally",
  },
  {
    icon: Mail,
    label: "Contact Me",
    href: "mailto:lakshmineha6@gmail.com",
    description: "Let's discuss your project",
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(175_80%_50%_/_0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-primary font-medium mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's Build Something <span className="text-gradient">Impactful</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all hover:-translate-y-1 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  transitionDuration: '700ms'
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <link.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div 
            className={`text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <p className="text-muted-foreground mb-6">
              Let's build something impactful, smart, and beautiful together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:lakshmineha6@gmail.com">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
