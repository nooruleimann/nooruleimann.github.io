import React, { useState, useEffect } from 'react';
import { Gamepad2, Volume2, VolumeX, Menu, X, Sparkles, Instagram } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !sfxEnabled;
    setSfxEnabled(nextState);
    soundFx.enabled = nextState;
    if (nextState) {
      soundFx.playSelect();
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    soundFx.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080512]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-[0_4px_25px_rgba(139,92,246,0.08)]'
          : 'bg-[#07050d]/60 backdrop-blur-sm border-b border-purple-900/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-purple-950/70 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-400/80 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-lg tracking-wider text-white group-hover:text-purple-300 transition-colors">
              NOOR
            </span>
            <span className="text-[10px] font-mono tracking-widest text-purple-400/70 uppercase -mt-1 hidden sm:block">
              CREATIVE PORTFOLIO
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`text-sm font-medium transition-all py-1 px-1 relative tracking-wide cursor-pointer ${
                  isActive
                    ? 'text-white glow-text-purple'
                    : 'text-purple-200/70 hover:text-white hover:glow-text-subtle'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 shadow-[0_0_8px_#c084fc] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: HUD Status Indicator & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Creative Mode Status indicator */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="tracking-wide">CREATIVE MODE: ACTIVE</span>
          </div>

          {/* Instagram Handle Shortcut */}
          <a
            href={PROFILE_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Instagram: ${PROFILE_DATA.instagram}`}
            aria-label={`Instagram ${PROFILE_DATA.instagram}`}
            className="p-2 rounded-lg border border-purple-900/40 hover:border-pink-500/60 bg-black/40 hover:bg-purple-950/50 text-purple-400/80 hover:text-pink-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Instagram className="w-4 h-4" />
            <span className="font-mono text-[10px] hidden 2xl:inline">{PROFILE_DATA.instagram}</span>
          </a>

          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            aria-label={sfxEnabled ? 'Mute futuristic audio sound effects' : 'Enable futuristic audio sound effects'}
            title={sfxEnabled ? 'SFX Audio: ON' : 'SFX Audio: OFF'}
            className={`p-2 rounded-lg border text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              sfxEnabled
                ? 'bg-purple-900/50 border-purple-500 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                : 'bg-black/40 border-purple-900/40 text-purple-400/60 hover:text-purple-300 hover:border-purple-600/50'
            }`}
          >
            {sfxEnabled ? <Volume2 className="w-4 h-4 text-purple-300" /> : <VolumeX className="w-4 h-4" />}
            <span className="font-mono text-[10px] hidden xl:inline">
              {sfxEnabled ? 'SFX ON' : 'SFX OFF'}
            </span>
          </button>

          {/* Primary Quick CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase font-orbitron text-white bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 border border-purple-400/40 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.35)] hover:shadow-[0_0_20px_rgba(147,51,234,0.55)] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>Connect</span>
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-purple-300 hover:text-white bg-purple-950/40 border border-purple-500/30 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0715]/95 border-b border-purple-500/30 px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-900/40 text-[11px] font-mono text-purple-400">
            <span>STATUS: ONLINE</span>
            <span className="text-purple-300">CREATIVE MODE: ACTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-purple-900/60 text-white border border-purple-500/50 font-semibold'
                    : 'text-purple-200/80 hover:bg-purple-950/50 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 space-y-2">
            <a
              href={PROFILE_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-purple-950/70 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center justify-center gap-2 hover:border-pink-500/50"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram: {PROFILE_DATA.instagram}</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 px-4 text-center font-orbitron text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-purple-700 to-indigo-700 rounded-lg border border-purple-400/40 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
            >
              Start Mission // Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
