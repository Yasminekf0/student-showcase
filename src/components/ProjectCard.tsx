import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

const ProjectCard = ({ title, description, tags, github, live }: ProjectCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden card-hover group">
      {/* Placeholder image */}
      <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        <span className="font-heading text-muted-foreground text-sm z-10">[ screenshot ]</span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            {github && (
              <a href={github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
            )}
            {live && (
              <a href={live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-heading text-primary/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
