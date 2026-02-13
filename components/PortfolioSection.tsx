import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Search, Shield, Zap, Globe, HardDrive, Server } from 'lucide-react';
import { portfolioData } from '../lib/portfolio-data';

interface PortfolioSectionProps {
  data?: typeof portfolioData;
}

const iconMap = {
  Search,
  Shield,
  Zap,
  Globe,
  HardDrive,
  Server
};

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all' ? data.projects : data.projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <h2 className="text-2xl font-display font-bold text-foreground">Projects</h2>
        
        <div className="flex flex-wrap gap-2">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                activeFilter === category
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => {
          const Icon = project.icon ? iconMap[project.icon as keyof typeof iconMap] : null;

          return (
            <div
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-foreground/20 transition-colors"
            >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {Icon && (
                    <div className="absolute top-4 right-4 bg-card/90 backdrop-blur p-2.5 rounded-xl border border-border/50 shadow-sm text-accent transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                </div>
                
                <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded mb-2 uppercase tracking-wide">
                        {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground group-hover:underline decoration-1 underline-offset-4">
                        {project.title}
                    </h3>
                    </div>
                    <div className="flex gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                        <Github className="w-5 h-5" />
                    </a>
                    </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {t}
                    </span>
                    ))}
                </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}