import React from 'react';
import { Gamepad2, ArrowUp, Heart, Sparkles, Mail, Instagram, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#050309] border-t border-purple-900/40 pt-16 pb-12 overflow-hidden text-purple-200/80">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-purple-900/40">
          {/* Brand & Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-950 border border-purple-500/50 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="font-orbitron font-extrabold text-xl text-white tracking-wider">
                {PROFILE_DATA.name.toUpperCase()}
              </h3>
            </div>
            <p className="text-xs font-mono text-purple-300">
              {PROFILE_DATA.role}
            </p>
            <p className="text-xs text-purple-400/80 max-w-sm">
              Helping brands craft memorable social presences through intentional aesthetics and visual storytelling.
            </p>
          </div>

          {/* Quick Nav Shortcuts */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  soundFx.playClick();
                  onNavigate(link.id);
                }}
                className="hover:text-white hover:underline decoration-purple-500 underline-offset-4 transition-colors cursor-pointer text-purple-300/80"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Return to top of page"
            className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/80 hover:border-purple-400 transition-all cursor-pointer shadow-sm group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Closing Motto & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-purple-400/80">
          {/* Closing Motto */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-orbitron font-bold tracking-widest text-white text-xs sm:text-sm glow-text-subtle">
              CREATE. COMMUNICATE. EVOLVE.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROFILE_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>{PROFILE_DATA.instagram}</span>
            </a>
            <span className="text-purple-800">·</span>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="text-purple-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PROFILE_DATA.email}</span>
            </a>
          </div>

          <div className="text-[11px] text-purple-500">
            © {new Date().getFullYear()} Noor Ul Eiman. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
