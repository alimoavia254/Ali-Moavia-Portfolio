import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactData } from '../lib/portfolio-data';

interface ContactSectionProps {
  data?: typeof contactData;
}

export function ContactSection({ data = contactData }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Contact</h2>
        <div className="h-1.5 w-16 bg-accent rounded-full mb-6" />
      </div>

      <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border bg-secondary shadow-inner">
        <iframe
          src={data.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="opacity-80 hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 p-5 bg-card/50 rounded-xl border border-border/50 hover:border-accent/50 transition-colors group shadow-sm">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Email</h3>
            <a
              href={`mailto:${data.email}`}
              className="text-sm text-foreground hover:text-accent transition-colors font-medium truncate block"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-card/50 rounded-xl border border-border/50 hover:border-accent/50 transition-colors group shadow-sm">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Phone</h3>
            <a
              href={`tel:${data.phone.replace(/\s/g, '')}`}
              className="text-sm text-foreground hover:text-accent transition-colors font-medium"
            >
              {data.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-card/50 rounded-xl border border-border/50 hover:border-accent/50 transition-colors group shadow-sm">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Location</h3>
            <p className="text-sm text-foreground font-medium">{data.location}</p>
          </div>
        </div>
      </div>

      <div className="bg-card/30 p-6 md:p-8 rounded-xl border border-border/50">
        <h3 className="text-xl font-bold text-foreground mb-6">Send Message</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                Full Name
                </label>
                <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                placeholder="John Doe"
                required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                placeholder="john@example.com"
                required
                />
            </div>
            </div>

            <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                Your Message
            </label>
            <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                placeholder="How can I help you?"
                required
            />
            </div>

            <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all"
            >
            <Send className="w-4 h-4" />
            Send Message
            </button>
        </form>
      </div>
    </div>
  );
}