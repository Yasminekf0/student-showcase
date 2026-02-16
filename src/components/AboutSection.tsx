const skills = [
  "Java", "Python", "C++", "Go", "F#", "R",
  "JavaScript", "React", "HTML/CSS", "SQL",
  "Shell Scripting", "Docker", "Kubernetes", "Linux",
  "TensorFlow", "PyTorch", "GenAI"
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Arabic", level: "Native" },
  { name: "English", level: "C1 (Cambridge)" },
  { name: "French", level: "C1 (DALF)" },
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
              I'm a BSc General Engineering student specializing in Cyber Systems at the Technical University of Denmark (DTU), graduating in 2026. I thrive at the intersection of engineering, IT, and leadership.
            </p>
            <p>
              Former IT & Workplace Student Assistant at ZeroNorth A/S, member of the Robotics Student Association (Robotech), debate team captain, and Black Belt (1st DAN) in Karate. I bring the same discipline and drive to every project I build.
            </p>
            <div className="mt-4">
              <h3 className="font-heading text-sm text-primary mb-3">{'>'} Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang.name} className="px-3 py-1.5 bg-secondary text-secondary-foreground font-heading text-xs rounded-sm border border-border">
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </div>
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
