import { Lightbulb, Palette, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const drives = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Solving real-world problems with technology and innovative approaches",
  },
  {
    icon: Palette,
    title: "Design Excellence",
    description: "Crafting elegant UI with motion & purpose that delights users",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Always learning and innovating to stay at the cutting edge",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(175_80%_50%_/_0.05)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              What <span className="text-gradient">Drives</span> Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From ReactJS frontends to AI-driven and IoT solutions, I enjoy 
              turning ideas into meaningful products that make a difference.
            </p>
          </div>

          {/* Drives Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {drives.map((drive, index) => (
              <div
                key={drive.title}
                className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  transitionDuration: '700ms'
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <drive.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {drive.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {drive.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
