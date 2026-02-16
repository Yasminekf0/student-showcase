const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="font-heading text-primary text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          {'>'} Hello, World! I'm
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <span className="text-foreground">John </span>
          <span className="text-gradient">Doe</span>
          <span className="text-primary animate-blink">_</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
          Computer Science Student passionate about building elegant solutions to complex problems.
        </p>
        <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
          <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm rounded-md hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-primary text-primary font-heading text-sm rounded-md hover:bg-primary/10 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
