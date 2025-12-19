import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Task Management App",
    description: "A full-stack application for organizing tasks with drag-and-drop functionality and user authentication.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location search, forecasts, and responsive design.",
    tech: ["JavaScript", "REST API", "CSS Grid"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills, built with modern web technologies.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary">
      <div className="container max-w-4xl">
        <h2 className="section-heading font-serif text-3xl md:text-4xl text-foreground mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article 
              key={project.title} 
              className="card-elevated p-6 flex flex-col"
            >
              <h3 className="font-serif text-xl text-foreground mb-3">
                {project.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="font-sans text-xs px-3 py-1 rounded-full bg-pink-soft text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
