import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  main_image?: string;
  github?: string;
  live?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  github,
  live,
  main_image,
  onClick,
}: ProjectCardProps & { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-lg overflow-hidden card-hover group cursor-pointer"
    >
      {/* Main / Placeholder image */}
      <div className="relative aspect-video bg-secondary flex items-center justify-center overflow-hidden">
        {main_image ? (
          <img
            src={main_image}
            alt={`${title} screenshot`}
            className="object-cover w-full h-full"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <span className="font-heading text-muted-foreground text-sm z-10">
              [ screenshot ]
            </span>
          </>
        )}
      </div>

      <div className="p-6">
        {/* Title + links */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {live && (
              <a
                href={live}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
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
