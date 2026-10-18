import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, Compass, Layers, Maximize2, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface HeroSectionProps {
  onExploreWork: () => void;
  onConnect: () => void;
  onOpenWorkstationModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onConnect,
  onOpenWorkstationModal,
}) => {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const creativeWords = [
    'Visual Storytelling',
    'Social Media Strategy',
    'High-Impact Graphic Design',
    'Engaging Carousel Systems',
    'Memorable Brand Aesthetics',
  ];

  useEffect(() => {
    const currentWord = creativeWords[wordIndex % creativeWords.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Decorative ambient aura behind hero */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 space-y-6">
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-purple-950/70 border border-purple-500/40 text-xs font-mono text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span className="tracking-widest uppercase">{PROFILE_DATA.introLabel}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse ml-1" />
            </div>

            {/* Large Main Headline */}
            <div className="space-y-1">
              <span className="block text-sm sm:text-base font-mono text-purple-300/80 tracking-widest uppercase">
                DIGITAL IDENTITY //
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-orbitron leading-[1.1] text-balance">
                HEY, I'M <br />
                <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent glow-text-purple">
                  NOOR UL EIMAN.
                </span>
              </h1>
            </div>

            {/* Professional Title */}
            <div className="border-l-2 border-purple-500/50 pl-4 py-1">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold tracking-wide text-purple-200 uppercase font-orbitron">
                SELF-TAUGHT SOCIAL MEDIA MANAGER <br className="hidden sm:inline" />
                <span className="text-purple-400">& GRAPHIC DESIGNER</span>
              </h2>
            </div>

            {/* Dynamic Typewriter Lead */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-purple-300">
              <span className="text-purple-500 select-none">&gt;</span>
              <span>Focusing on</span>
              <span className="text-white font-semibold underline decoration-purple-500 decoration-2 underline-offset-4">
                {typedText}
              </span>
              <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse" />
            </div>

            {/* Short Introduction */}
            <p className="text-purple-100/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PROFILE_DATA.shortIntro}
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onExploreWork();
                }}
                className="group relative px-6 py-3.5 rounded-xl font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 border border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.45)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  soundFx.playSelect();
                  onConnect();
                }}
                className="px-6 py-3.5 rounded-xl font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase text-purple-200 hover:text-white bg-[#0e091d]/80 hover:bg-purple-950/60 border border-purple-500/40 hover:border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>LET'S CONNECT</span>
              </button>
            </div>

            {/* Professional Status Bar */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-purple-300/80 border-t border-purple-900/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="tracking-wide">AVAILABLE FOR WORK &amp; COLLABORATIONS</span>
            </div>
          </div>

          {/* Right Column: Cinematic Futuristic Gaming Workstation Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0c081a] shadow-[0_0_35px_rgba(147,51,234,0.25)] transition-all duration-300">
              {/* Corner Tag */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 border border-purple-500/40 text-[10px] font-mono text-purple-300 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                <span>STUDIO WORKSTATION</span>
              </div>

              {/* Main Cinematic Image */}
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="/src/assets/images/hero_workstation_1792080652260.jpg"
                  alt="Cinematic futuristic cyberpunk gaming workstation with dual curved monitors, ergonomic chair, headphones and purple RGB glow"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle cyber scanline & contrast gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-transparent to-black/20 pointer-events-none" />
                
                {/* Cyber Reticles / Corner brackets */}
                <div className="absolute inset-0 p-3 pointer-events-none flex flex-col justify-between">
                  <div className="flex justify-between">
                    <span className="w-4 h-4 border-t-2 border-l-2 border-purple-400/80" />
                    <span className="w-4 h-4 border-t-2 border-r-2 border-purple-400/80" />
                  </div>
                  <div className="flex justify-between">
                    <span className="w-4 h-4 border-b-2 border-l-2 border-purple-400/80" />
                    <span className="w-4 h-4 border-b-2 border-r-2 border-purple-400/80" />
                  </div>
                </div>

                {/* Hover Quick Inspect Action */}
                {onOpenWorkstationModal && (
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      onOpenWorkstationModal();
                    }}
                    aria-label="Inspect workstation view"
                    className="absolute bottom-3 right-3 z-20 p-2 rounded-lg bg-black/70 border border-purple-400/60 text-purple-200 hover:text-white hover:bg-purple-900/80 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg backdrop-blur-sm"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Bottom HUD Bar on image container */}
              <div className="p-3 bg-[#0a0618] border-t border-purple-500/30 flex items-center justify-between text-xs font-mono text-purple-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span className="text-[11px] text-purple-200">WORKSTATION ACTIVE</span>
                </div>
                <div className="text-[10px] text-purple-400/70 tracking-wider">
                  CANVAS: 4K ULTRA-WIDE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric / Capability Strip below the split */}
        <div className="mt-14 pt-8 border-t border-purple-900/40 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#0e091f]/60 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <div className="font-orbitron font-extrabold text-2xl lg:text-3xl text-white glow-text-subtle">
              30+
            </div>
            <div className="text-xs font-mono text-purple-300 mt-1 uppercase tracking-wider">
              Creative Concepts
            </div>
            <div className="text-[11px] text-purple-400/60 mt-0.5">Posts, carousels & brands</div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e091f]/60 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <div className="font-orbitron font-extrabold text-2xl lg:text-3xl text-purple-300 glow-text-subtle">
              100%
            </div>
            <div className="text-xs font-mono text-purple-300 mt-1 uppercase tracking-wider">
              Passion-Driven
            </div>
            <div className="text-[11px] text-purple-400/60 mt-0.5">Self-taught momentum</div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e091f]/60 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <div className="font-orbitron font-extrabold text-2xl lg:text-3xl text-white glow-text-subtle">
              2-in-1
            </div>
            <div className="text-xs font-mono text-purple-300 mt-1 uppercase tracking-wider">
              Core Disciplines
            </div>
            <div className="text-[11px] text-purple-400/60 mt-0.5">Strategy & Graphic Design</div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e091f]/60 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <div className="font-orbitron font-extrabold text-2xl lg:text-3xl text-fuchsia-300 glow-text-subtle">
              ALWAYS
            </div>
            <div className="text-xs font-mono text-purple-300 mt-1 uppercase tracking-wider">
              Evolving
            </div>
            <div className="text-[11px] text-purple-400/60 mt-0.5">Continuous daily practice</div>
          </div>
        </div>
      </div>
    </section>
  );
};
