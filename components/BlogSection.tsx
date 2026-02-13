import React from 'react';
import { Calendar, Clock, ArrowRight, Hash } from 'lucide-react';
import { blogData } from '../lib/portfolio-data';

interface BlogSectionProps {
  data?: typeof blogData;
  onPostClick?: (post: typeof blogData.posts[0]) => void;
}

export function BlogSection({ data = blogData, onPostClick }: BlogSectionProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-3xl font-bold text-foreground font-tech uppercase tracking-wide">Research Log</h2>
           <div className="h-1 w-12 bg-accent mt-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.posts.map((post, index) => (
          <article
            key={index}
            onClick={() => onPostClick?.(post)}
            className="group bg-card/40 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden hover:border-accent/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
          >
            <div className="aspect-video overflow-hidden bg-muted relative">
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-20 transition-opacity z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-2 py-1 bg-black/80 backdrop-blur text-accent text-[10px] font-mono font-bold uppercase rounded border border-accent/20">
                    {post.category}
                  </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1 border-t border-white/5">
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="text-accent">/</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors font-tech">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1 border-l-2 border-white/10 pl-3 group-hover:border-accent/50 transition-colors">
                  {post.excerpt}
              </p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-accent/20 transition-colors">
                  <div className="flex gap-2">
                     {post.tags?.slice(0, 2).map((tag, i) => (
                         <span key={i} className="text-[10px] text-muted-foreground font-mono flex items-center">
                             <Hash className="w-2 h-2 mr-0.5" />{tag}
                         </span>
                     ))}
                  </div>
                 <span
                    className="flex items-center gap-2 text-xs text-accent font-bold uppercase tracking-wider group-hover:gap-3 transition-all"
                  >
                    Analyze
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}