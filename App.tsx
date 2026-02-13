import React, { useState, useEffect } from 'react';
import { ProfileSidebar } from './components/ProfileSidebar';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { BlogDetail } from './components/BlogDetail';
import { BlogDetailAmnDos } from './components/BlogDetailAmnDos';
import { Moon, Sun, Menu, X } from 'lucide-react';
import {
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  blogData,
  contactData,
} from './lib/portfolio-data';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [viewMode, setViewMode] = useState<'main' | 'blog-detail' | 'amn-dos'>('main');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize theme from localStorage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const handlePostClick = (post: any) => {
    if (post.slug === 'advanced-digital-forensic-tool-v3') {
        setViewMode('blog-detail');
        window.scrollTo(0, 0);
    } else if (post.slug === 'amn-dos') {
        setViewMode('amn-dos');
        window.scrollTo(0, 0);
    }
  };

  if (viewMode === 'blog-detail') {
    return <BlogDetail onBack={() => setViewMode('main')} />;
  }

  if (viewMode === 'amn-dos') {
    return <BlogDetailAmnDos onBack={() => setViewMode('main')} />;
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex flex-col font-sans">
      {/* Mobile Header */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-4 transition-all duration-300 ${scrolled ? 'bg-card/90 backdrop-blur shadow-md border-b border-border/50' : 'bg-transparent'}`}>
         <button 
           onClick={() => setIsSidebarOpen(true)}
           className="p-2 -ml-2 rounded-lg text-foreground hover:bg-accent/10 active:scale-95 transition-all"
           aria-label="Open Menu"
         >
            <Menu className="w-6 h-6" />
         </button>
         
         <span className="font-display font-bold text-lg tracking-tight text-foreground">Ali Moavia</span>

         <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-foreground hover:bg-accent/10 transition-all"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Desktop Theme Toggle */}
      <div className="hidden lg:block fixed top-6 right-6 z-[100]">
        <button
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 shadow-lg"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Drawer Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 w-full mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 py-4 lg:py-12 mt-16 lg:mt-0">
        <div className="flex flex-col lg:flex-row gap-8 items-start h-full">
          
          {/* Sidebar - Drawer on Mobile, Sticky on Desktop */}
          <aside className={`
             fixed inset-y-0 left-0 z-[60] w-[320px] bg-card border-r border-border shadow-2xl transform transition-transform duration-300 ease-in-out
             lg:translate-x-0 lg:static lg:w-auto lg:bg-transparent lg:border-none lg:shadow-none lg:z-auto lg:block
             ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
             <div className="h-full overflow-y-auto lg:overflow-visible p-6 lg:p-0 lg:sticky lg:top-8 scrollbar-hide">
                <div className="lg:hidden flex justify-end mb-4">
                     <button 
                       onClick={() => setIsSidebarOpen(false)}
                       className="p-2 rounded-full hover:bg-accent/10 text-foreground transition-colors"
                     >
                        <X className="w-6 h-6" />
                     </button>
                </div>
                <ProfileSidebar data={profileData} />
             </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 w-full bg-card/30 border border-border/50 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl flex flex-col min-h-[85vh]">
            {/* Navigation Tabs */}
            <nav className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border/50 p-4 lg:p-6 overflow-x-auto scrollbar-hide flex gap-3">
              {['about', 'resume', 'portfolio', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                      setActiveSection(section);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-6 py-2.5 rounded-xl text-base font-semibold capitalize transition-all whitespace-nowrap flex-shrink-0 border ${
                    activeSection === section
                      ? 'text-accent-foreground bg-accent border-accent shadow-lg shadow-accent/20 scale-105'
                      : 'text-muted-foreground bg-transparent border-transparent hover:bg-accent/10 hover:text-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            {/* Content Area */}
            <div className="flex-1 p-6 lg:p-12 animate-in fade-in zoom-in-95 duration-300">
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'portfolio' && <PortfolioSection data={portfolioData} />}
              {activeSection === 'blog' && <BlogSection data={blogData} onPostClick={handlePostClick} />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}