import { Button } from "@/components/ui/button";
import TypingAnimation from "./TypingAnimation";
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(175_80%_50%_/_0.08)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 opacity-0 animate-fade-in">
            Hi, I'm 👋
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 opacity-0 animate-fade-in animation-delay-100">
            <span className="text-gradient">Neha R</span>
          </h1>

          {/* Typing Animation */}
          <div className="mb-8 opacity-0 animate-fade-in animation-delay-200">
            <TypingAnimation />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-300">
            A passionate AI & Data Science engineer who loves building clean, 
            impactful, and user-centric digital experiences. I design and develop 
            modern web applications with smooth animations, intuitive interfaces, 
            and scalable logic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="https://drive.google.com/file/d/19NVulkwAjrTka2on-pJcmb1YRIiU0Q7q/view" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2" />
                View Resume
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/Nehalakshmi23" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/neha-r-b7266b258/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="opacity-0 animate-fade-in animation-delay-600">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="text-sm mb-2">Explore More</span>
              <ArrowDown className="animate-bounce" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
