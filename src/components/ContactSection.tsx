import { Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary">{'// '}</span>Get In Touch
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />

        <p className="text-secondary-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          I'm always open to new opportunities, collaborations, or just a good conversation about tech. Feel free to reach out!
        </p>

        <a
          href="mailto:yasminekf0@gmail.com"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading text-sm rounded-md hover:opacity-90 transition-opacity mb-12"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/yasmine-kennou-filali" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="mailto:yasminekf0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
