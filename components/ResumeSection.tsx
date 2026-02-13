import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';
import { resumeData } from '../lib/portfolio-data';

interface ResumeSectionProps {
  data?: typeof resumeData;
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Resume</h2>
        <div className="h-1.5 w-16 bg-accent rounded-full" />
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl shadow-sm">
            <BookOpen className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-6">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 last:border-transparent">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
              <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3 bg-accent/10 w-fit px-2 py-1 rounded">{item.period}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-3 mb-8 mt-4">
          <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl shadow-sm">
            <Briefcase className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-6">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 last:border-transparent">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
              <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3 bg-accent/10 w-fit px-2 py-1 rounded">{item.period}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card/30 p-6 rounded-xl border border-border/50">
          {data.skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden border border-border/50">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}