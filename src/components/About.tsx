const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="section-heading font-serif text-3xl md:text-4xl text-foreground mb-8">
          About Me
        </h2>
        <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
        <p>
          I am a student currently focusing on data science, with an interest in working 
          with data to understand patterns, trends, and real-world problems. I enjoy the 
          process of exploring datasets and making sense of information through analysis.
        </p>
        <p>
          Lately, I have been spending more time building skills in Python, data analysis, 
          and basic machine learning concepts, while also learning how to visualize and 
          communicate insights clearly.
        </p>
        <p>
          This portfolio is a space to document my work and learning progress. I use web 
          technologies mainly as a way to present my projects, while continuing to develop 
          my core strengths in data science and programming.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
