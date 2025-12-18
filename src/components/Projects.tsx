import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import projectAiDashboard from "@/assets/project-ai-dashboard.png";
import projectIotApp from "@/assets/project-iot-app.png";
import projectEcommerce from "@/assets/project-ecommerce.png";

const projects = [
  {
    title: "Carrer Compass",
    description:
      "Career Compass is an AI-powered web application that analyzes a candidate’s resume against a job description and provides match scores, skill gaps, and personalized improvement suggestions to boost job readiness.",
    image: projectAiDashboard,
    tags: ["Python", "NLP", "React", "Flask"],
    
    githubUrl: "https://github.com/Nehalakshmi23/carrer-campus",
    featured: true,
  },
  {
    title: "Smart Reminder Mat",
    description:
      "Smart Mat Reminder is an IoT-based mat integrated with sensors and AI that detects user presence and sends timely reminders (like medicines or tasks) through a mobile app, helping users follow daily routines efficiently.",
    image: projectIotApp,
    tags: ["React Native", "IoT", "Firebase", "Node.js"],
    githubUrl: "https://github.com/Nehalakshmi23/Smart-Reminder-Mat",
    featured: true,
  },
  
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(175_80%_50%_/_0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-primary font-medium mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills in AI, frontend development, and building user-centric solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:-translate-y-2 ${
                  project.featured ? "md:col-span-1" : ""
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  transitionDuration: '700ms'
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                    
                    <Button variant="heroOutline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All CTA */}
          <div 
            className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? '450ms' : '0ms' }}
          >
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/Nehalakshmi23" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
