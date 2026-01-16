import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to present my work and learning journey. Used an AI-assisted tool to generate the initial project structure, then customized the design, content, and components manually. Implemented version control using Git, managed the repository on GitHub, and deployed the site using Netlify.",
    tech: [
      "Git & GitHub",
      "Project Structuring",
      "Frontend Customization",
      "Netlify Deployment",
    ],
    github: "https://github.com/isha-damani/isha-portfolio",
    live: "https://isha-damani-portfolio.netlify.app",
  }, 
  {
    title: "AgroGuide - Crop Recommendation System",
    description:
      "Developed a web-based application that provides crop recommendations based on soil nutrients and weather parameters. The system collects user inputs such as nitrogen, phosphorus, potassium, pH, temperature, and rainfall, and uses a machine learning model to suggest suitable crops for cultivation. The project focuses on applying data science concepts to a real-world agricultural problem.",
    tech: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Model Prediction",
      "Frontend-Backend Integration",
      "Render Deployment",
    ],
    github: "https://github.com/isha-damani/agro-guide",
    live: "https://agro-guide-frontend.onrender.com/",
  },  
  {
    title: "Ritu - Cycle And Wellness Tracker",
    description:
      "A privacy-first menstrual cycle tracker that predicts cycle phases and period windows, allows daily mood and symptom logging, and visualizes data through an interactive calendar. Built with a focus on state consistency, persistence, and clean UX.",
    tech: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
      "LocalStorage",
      "Vercel Deployment",
    ],
    github: "https://github.com/isha-damani/ritu",
    live: "https://ritu-period-tracker.vercel.app/",
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
