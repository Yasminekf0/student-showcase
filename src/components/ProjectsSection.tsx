import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
const projects = [
  {
    title: "2D Minecraft",
    description: "A 2D recreation of the classic Minecraft experience with block-based world generation, crafting mechanics, and exploration — built from the ground up.",
    longDescription: "This project reimagines Minecraft in a 2D side-scrolling format. It features procedural terrain generation using Perlin noise, a full crafting system, day/night cycles, and enemy AI. Players can mine blocks, build structures, and explore an infinite world. The rendering engine was built from scratch using Java's graphics libraries.",
    tags: ["Java", "Game Dev", "2D Graphics"],
    features: ["Procedural world generation", "Crafting system", "Day/night cycle", "Enemy AI", "Inventory management"],
<<<<<<< HEAD
    github: "#",
    live: "#",
    images: 3,
  },
  {
    title: "AI Roleplay Sales Tool",
=======
    github: "https://github.com/Yasminekf0/Minicraft", 
    live: "#",
    main_image: "../public/Screenshot from 2026-02-17 10-20-49.png",
    images: [
      "../public/Screenshot from 2026-02-16 20-45-11.png",
      "../public/Screenshot from 2026-02-17 10-54-49.png",
      "../public/Screenshot from 2026-02-17 10-49-02.png"
    ],
  },
  {
    title: "BetterMe: AI Roleplay Sales Tool",
>>>>>>> yey
    description: "An AI-powered roleplay simulation tool designed to help sales teams practice and improve their pitching skills through realistic, dynamic conversation scenarios.",
    longDescription: "A conversational AI platform that simulates realistic buyer personas for sales training. The tool uses large language models to generate dynamic responses based on customizable scenarios, objection handling patterns, and product knowledge bases. It tracks performance metrics and provides actionable feedback after each session.",
    tags: ["Python", "GenAI", "React", "TensorFlow"],
    features: ["Dynamic buyer personas", "Real-time conversation AI", "Performance analytics", "Custom scenario builder", "Objection handling training"],
<<<<<<< HEAD
    github: "#",
    live: "#",
    images: 3,
=======
    github: "https://github.com/Yasminekf0/BetterMe",
    live: "#",
    main_image: "../public/1771274213815.png",
    images: [
      "../public/19c6829bc5bf6cf39701.gif"
    ],
>>>>>>> yey
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary">{'// '}</span>Projects
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal open={!!selected} onClose={() => setSelected(null)} project={selected} />
      )}
    </section>
  );
};

export default ProjectsSection;
