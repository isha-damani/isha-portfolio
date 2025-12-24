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
    title: "Titanic Dataset Analysis",
    description:
      "Performed exploratory data analysis on the Titanic dataset to study survival patterns across factors such as gender, age, and passenger class. Focused on data cleaning, visualization, and drawing meaningful insights from the data.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: null,
    live: null,
  },
  {
    title: "Wine Quality Data Analysis",
    description:
      "Analyzed the Wine Quality dataset to understand how chemical properties such as alcohol content and acidity influence quality ratings. Used visualizations and statistical observations to identify trends and relationships.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: null,
    live: null,
  },
  {
    title: "SLM for Data Science Learning (Ongoing)",
    description:
      "Currently developing a small language model-based chatbot designed to support learning in data science. The project focuses on understanding how language models work by building a system that explains data science concepts using self-written, curated content.",
    tech: [
      "Python",
      "Natural Language Processing (Foundations)",
      "Machine Learning (Foundations)",
    ],
    github: null,
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
