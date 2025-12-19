const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="section-heading font-serif text-3xl md:text-4xl text-foreground mb-8">
          About Me
        </h2>
        <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
          <p>
            I am a dedicated student with a strong interest in software development and technology. 
            My academic journey has equipped me with foundational skills in programming, web development, 
            and problem-solving, which I continuously seek to expand through hands-on projects and self-directed learning.
          </p>
          <p>
            I am committed to building clean, efficient, and accessible solutions that prioritize user experience. 
            Currently, I am focused on developing my expertise in modern web technologies while exploring 
            opportunities to contribute to meaningful projects in collaborative environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
