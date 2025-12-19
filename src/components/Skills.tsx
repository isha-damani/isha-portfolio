const skillCategories = [
  {
    title: "Data Science & Analysis",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning & Preprocessing",
      "Data Visualization",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Machine Learning (Foundations)",
    skills: [
      "Classification & Regression",
      "Basic Supervised Learning",
      "Model Evaluation",
      "Scikit-learn (Basic Usage)",
    ],
  },
  {
    title: "Statistics & Analytical Concepts",
    skills: [
      "Descriptive Statistics",
      "Correlation Analysis",
      "ANOVA (Basics)",
      "Hypothesis Testing (Foundations)",
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      "Python",
      "Git & GitHub",
      "Jupyter Notebooks",
      "VS Code",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container max-w-4xl">
        <h2 className="section-heading font-serif text-3xl md:text-4xl text-foreground mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="card-elevated p-6"
            >
              <h3 className="font-serif text-lg text-foreground mb-4 pb-2 border-b border-pink-soft">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="font-sans text-muted-foreground text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
