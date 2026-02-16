const skills = [
  "Python", "Java", "C++", "TypeScript",
  "React", "Node.js", "Git", "SQL",
  "Data Structures", "Algorithms", "Linux", "Docker"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary">{'// '}</span>About Me
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-secondary-foreground leading-relaxed">
            <p>
              I'm a junior CS student at [Your University] with a focus on software engineering and systems design. I love turning ideas into code and building things that matter.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source, competing in hackathons, or exploring new technologies. Currently seeking internship opportunities for Summer 2026.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm text-primary mb-4">{'>'} Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground font-heading text-xs rounded-sm border border-border hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
