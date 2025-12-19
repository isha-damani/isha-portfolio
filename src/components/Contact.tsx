import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:isha.damani@email.com",
    icon: Mail,
    display: "isha.damani@email.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/ishadamani",
    icon: Github,
    display: "github.com/ishadamani",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ishadamani",
    icon: Linkedin,
    display: "linkedin.com/in/ishadamani",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container max-w-3xl">
        <h2 className="section-heading font-serif text-3xl md:text-4xl text-foreground mb-8">
          Contact
        </h2>
        <p className="font-sans text-muted-foreground mb-10">
          I am open to discussing new opportunities, collaborations, or answering any questions you may have.
        </p>
        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-pink-medium hover:bg-secondary transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-pink-soft flex items-center justify-center group-hover:bg-pink-medium transition-colors duration-200">
                <link.icon size={18} className="text-foreground" />
              </div>
              <div>
                <p className="font-sans text-sm text-muted-foreground">{link.label}</p>
                <p className="font-sans text-foreground">{link.display}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
