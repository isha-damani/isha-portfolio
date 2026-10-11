const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="section-heading font-serif text-3xl md:text-4xl text-foreground mb-8">
          About Me
        </h2>
        <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
        <p>
          I am a third-year B.Tech student in Computer Science and Engineering
          (AI &amp; ML) at Neil Gogte Institute of Technology. I enjoy building
          software and understanding how things work, from the logic behind a
          problem to the finished application.
        </p>
        <p>
          I have been building my skills in Java, Python, and data structures
          and algorithms, and I practice regularly on LeetCode. On the
          development side, I have built a full-stack web app with React,
          Node.js, Express, and MongoDB. I also work with Python, Pandas, and
          scikit-learn to explore data and learn the foundations of machine
          learning.
        </p>
        <p>
          Right now I am working on a research project on drug sensitivity
          prediction as part of my college Project School. I am also preparing
          for software engineering roles. This portfolio is a space to document
          my projects and learning progress as I keep growing.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;