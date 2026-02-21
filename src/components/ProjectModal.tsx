import { ExternalLink, Github, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    features: string[];
    github?: string;
    live?: string;
    main_image?: string;
    images: string[];}
}

const ProjectModal = ({ open, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl bg-card border-border p-0 gap-0 overflow-hidden max-h-[85vh] overflow-y-auto">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        {/* Header image */}
<div className="relative aspect-video bg-secondary flex items-center justify-center overflow-hidden">
  {project.main_image ? (
    <img
      src={project.main_image}
      alt={`${project.title} main screenshot`}
      className="object-cover w-full h-full"
    />
  ) : (
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    />
  )}
  {!project.main_image && (
    <span className="font-heading text-muted-foreground text-sm z-10">
      [ main screenshot ]
    </span>
  )}
</div>

          <div className="h-72 sm:h-80 md:h-80 lg:h-96 xl:h-80 2xl:h-96"></div>

        <div className="p-6 space-y-6">
          {/* Title + links */}
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">{project.title}</h2>
            <div className="flex gap-3 shrink-0 mt-1">
              {project.github && (
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
              )}
              {project.live && (
                <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary text-primary font-heading text-xs rounded-sm border border-border">
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-secondary-foreground leading-relaxed">{project.longDescription}</p>

          {/* Features */}
          <div>
            <h3 className="font-heading text-sm text-primary mb-3">{'>'} Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <span className="text-primary font-heading">—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
<div>
  <h3 className="font-heading text-sm text-primary mb-3">{'>'} Gallery</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    {project.images.map((imgSrc, i) => (
      <div
        key={i}
        className="aspect-video bg-secondary rounded-md flex items-center justify-center border border-border overflow-hidden relative"
      >
        <img
          src={imgSrc}
          alt={`Project image ${i + 1}`}
          className="object-cover w-full h-full"
        />
        {/* Optional overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />
      </div>
    ))}
  </div>
</div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
