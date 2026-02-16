import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Algorithm Visualizer",
    description: "An interactive web app that visualizes sorting and pathfinding algorithms in real-time with adjustable speed and array size controls.",
    tags: ["React", "TypeScript", "Canvas API"],
    github: "#",
    live: "#",
  },
  {
    title: "Campus Connect",
    description: "A full-stack platform for university students to find study groups, share resources, and organize campus events.",
    tags: ["Node.js", "PostgreSQL", "React"],
    github: "#",
  },
  {
    title: "ML Image Classifier",
    description: "A convolutional neural network trained on CIFAR-10 dataset achieving 92% accuracy with a clean web interface for real-time predictions.",
    tags: ["Python", "TensorFlow", "Flask"],
    github: "#",
    live: "#",
  },
  {
    title: "Shell From Scratch",
    description: "A custom Unix shell implementation supporting pipes, redirects, job control, and built-in commands written in C.",
    tags: ["C", "Linux", "Systems Programming"],
    github: "#",
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
