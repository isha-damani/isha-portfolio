const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            {currentYear} Isha Damani. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a 
              href="#about" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
