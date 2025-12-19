const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="container max-w-4xl text-center">
        <p className="text-muted-foreground font-sans text-sm tracking-wide uppercase mb-4 animate-fade-in">
          Welcome to my portfolio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Isha Damani
        </h1>
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Student and aspiring developer passionate about creating thoughtful, user-centered digital experiences.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center bg-pink-medium text-foreground font-medium px-8 py-3 rounded-md hover:bg-pink-dark hover:shadow-md transition-all duration-200"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
