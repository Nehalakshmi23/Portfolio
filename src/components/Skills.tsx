import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  {
    category: "Backend",
    items: ["Python","Flask","Java"]
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS"],
  },
  {
    category: "AI & Data Science",
    items: ["Python", "Machine Learning", "TensorFlow", "Data Analysis", "NLP"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "VS Code", "Figma", "Firebase", "IoT"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-primary font-medium mb-2">Expertise</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={skillGroup.category}
                className={`glass-card rounded-2xl p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${groupIndex * 150}ms` : '0ms'
                }}
              >
                <h3 className="text-lg font-display font-semibold mb-4 text-gradient">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: isVisible ? `${groupIndex * 150 + index * 50}ms` : '0ms'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
