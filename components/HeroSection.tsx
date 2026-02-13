import React from 'react';
import { profileData } from '../lib/portfolio-data';
import { CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8 border-b border-border">
      <div className="max-w-3xl animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to Work
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
          {profileData.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
          {profileData.title}
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
          I am a Digital Forensics Specialist and Penetration Tester. I help organizations identify vulnerabilities, investigate security incidents, and build resilient digital infrastructure using industry-standard methodologies.
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="px-5 py-2.5 bg-foreground text-background font-medium rounded-md hover:opacity-90 transition-opacity">
            Contact Me
          </a>
          <a href="#portfolio" className="px-5 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}