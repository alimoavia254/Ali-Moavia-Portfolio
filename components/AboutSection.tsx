import React from 'react';
import { Shield, Search, Lock, Code, Globe, Monitor, Terminal } from 'lucide-react';
import { aboutData } from '../lib/portfolio-data';

const iconMap = {
  Shield,
  Search,
  Lock,
  Code,
  Globe,
  Monitor,
};

interface AboutSectionProps {
  data?: typeof aboutData;
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      {/* About Me */}
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-tech uppercase tracking-wide flex items-center gap-3">
            <span className="text-accent">#</span> About_Me
        </h2>
        <div className="p-8 bg-card/30 backdrop-blur-sm border border-accent/10 rounded-3xl relative overflow-hidden shadow-lg">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent to-transparent" />
             <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {data.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 font-tech uppercase pl-2 border-l-4 border-accent">Active Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group relative p-8 bg-card/40 border border-white/5 rounded-2xl hover:bg-card/60 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-md hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 rounded-2xl transition-colors duration-300" />
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
                
                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#0f172a] border border-accent/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow">
                    {IconComponent && <IconComponent className="w-8 h-8 text-accent" strokeWidth={1.5} />}
                    </div>
                    <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors font-tech">{service.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials with Marquee Animation */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-tech uppercase tracking-wide flex items-center gap-3">
            <span className="text-accent">#</span> Intelligence / Feedback
        </h3>
        
        {/* Full width container with fade mask */}
        <div className="relative overflow-hidden w-full mask-linear-fade py-6">
          <div className="flex gap-8 animate-marquee w-max hover:pause">
            {[...data.testimonials, ...data.testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[550px] p-8 md:p-10 bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl hover:border-accent/50 transition-all duration-300 relative shadow-lg group"
              >
                <div className="absolute top-8 right-8 text-accent/20 group-hover:text-accent/40 transition-colors">
                    <Terminal size={32} />
                </div>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors shadow-lg">
                     <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-base text-accent font-mono uppercase tracking-wider font-semibold mt-1">Verified Client</p>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed italic font-medium pl-6 border-l-4 border-accent/20 group-hover:border-accent/50 transition-colors">
                    "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="pt-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 font-tech uppercase pl-2 border-l-4 border-accent">Affiliations</h3>
        <div className="relative overflow-hidden py-8 bg-card/20 rounded-3xl border border-white/5">
          <div className="flex gap-16 animate-marquee-slow w-max items-center px-4">
            {[...data.clients, ...data.clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}