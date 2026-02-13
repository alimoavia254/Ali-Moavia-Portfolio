import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, CheckCircle2, Terminal } from 'lucide-react';
import { profileData } from '../lib/portfolio-data';

interface ProfileSidebarProps {
  data?: typeof profileData;
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  return (
    <aside className="w-full lg:w-[360px] flex-shrink-0 space-y-6">
      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-emerald-400 to-accent" />
        
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent to-emerald-600 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
                src={data.avatar}
                alt={data.name}
                className="relative w-48 h-48 rounded-full object-cover border-4 border-card shadow-xl"
            />
            <div className="absolute bottom-2 right-2 bg-card rounded-full p-1.5 shadow-lg border border-border">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-accent border-2 border-white dark:border-zinc-900"></span>
                </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
             <CheckCircle2 className="w-3.5 h-3.5" />
             Open to Work
          </div>
          
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">{data.name}</h2>
          <p className="text-lg text-muted-foreground mb-8 font-medium bg-secondary/50 px-4 py-1 rounded-lg">{data.title}</p>
          
          <div className="flex gap-4 w-full justify-center mb-8">
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0077b5]/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={data.social.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-[#88cc14] hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#88cc14]/20"
              aria-label="TryHackMe"
            >
              <Terminal className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="space-y-6 pt-8 border-t border-border/50">
          <div className="flex items-center gap-4 group/item">
            <div className="p-3 rounded-xl bg-secondary group-hover/item:bg-accent/10 transition-colors">
                 <Mail className="w-5 h-5 text-muted-foreground group-hover/item:text-accent transition-colors" />
            </div>
            <div className="min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Email</p>
                <a href={`mailto:${data.email}`} className="text-foreground hover:text-accent transition-colors truncate font-medium block">
                {data.email}
                </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group/item">
             <div className="p-3 rounded-xl bg-secondary group-hover/item:bg-accent/10 transition-colors">
                <Phone className="w-5 h-5 text-muted-foreground group-hover/item:text-accent transition-colors" />
             </div>
             <div className="min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Phone</p>
                <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-accent transition-colors font-medium block">
                {data.phone}
                </a>
             </div>
          </div>

          <div className="flex items-center gap-4 group/item">
             <div className="p-3 rounded-xl bg-secondary group-hover/item:bg-accent/10 transition-colors">
                <MapPin className="w-5 h-5 text-muted-foreground group-hover/item:text-accent transition-colors" />
             </div>
             <div className="min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Location</p>
                <span className="text-foreground font-medium block">{data.location}</span>
             </div>
          </div>
        </div>

<a href="/Ali_Moavia_Cybersecurity_CV.pdf" download>
  <button className="w-full mt-10 flex items-center justify-center gap-3 px-6 py-4 bg-foreground text-background rounded-xl text-base font-bold hover:bg-accent hover:text-white transition-all active:scale-95 shadow-lg hover:shadow-accent/25">
    <Download className="w-5 h-5" />
    Download CV
  </button>
</a>
      </div>
    </aside>
  );
}
