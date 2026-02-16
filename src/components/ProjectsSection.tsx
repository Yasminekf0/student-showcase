import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "2D Minecraft",
    description: "A 2D recreation of the classic Minecraft experience with block-based world generation, crafting mechanics, and exploration — built from the ground up.",
    tags: ["Java", "Game Dev", "2D Graphics"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Roleplay Sales Tool",
    description: "An AI-powered roleplay simulation tool designed to help sales teams practice and improve their pitching skills through realistic, dynamic conversation scenarios.",
    tags: ["Python", "GenAI", "React", "TensorFlow"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary">{'// '}</span>Projects
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
