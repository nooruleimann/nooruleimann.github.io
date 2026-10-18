import React from 'react';
import {
  Sparkles,
  MessageSquare,
  Zap,
  Eye,
  Film,
  TrendingUp,
  Instagram,
  User,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

const strengthIcons = {
  Sparkles: Sparkles,
  MessageSquare: MessageSquare,
  Zap: Zap,
  ScanEye: Eye,
  Film: Film,
  TrendingUp: TrendingUp,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            CREATIVE IDENTITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-orbitron tracking-tight">
            ABOUT ME
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base max-w-2xl font-normal">
            The creative individual behind the screen: self-taught dedication, visual storytelling, and continuous growth.
          </p>
        </div>

        {/* Streamlined 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Player Profile Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#0d091b]/80 border border-purple-500/25 backdrop-blur-md space-y-5">
              {/* Avatar + Identity */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.25)] relative bg-[#130d29] shrink-0">
                  <img
                    src={PROFILE_DATA.avatarImage}
                    alt="Noor Ul Eiman chibi character illustration on red armchair"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-orbitron text-white">
                    {PROFILE_DATA.name}
                  </h3>
                  <p className="text-xs text-purple-300 font-medium">
                    {PROFILE_DATA.role}
                  </p>
                  <div className="pt-1.5">
                    <a
                      href={PROFILE_DATA.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 text-xs font-mono transition-all shadow-sm"
                    >
                      <Instagram className="w-3.5 h-3.5 text-pink-400" />
                      <span>{PROFILE_DATA.instagram}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Statement */}
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                "{PROFILE_DATA.aboutBio}"
              </div>

              {/* 3 Core Status Markers */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-purple-900/30">
                <div className="p-2 rounded-lg bg-[#140c2a]/60 border border-purple-500/20">
                  <div className="text-[10px] font-mono text-purple-400/80">CLASS</div>
                  <div className="text-xs font-orbitron font-bold text-white mt-0.5">CREATIVE</div>
                </div>
                <div className="p-2 rounded-lg bg-[#140c2a]/60 border border-purple-500/20">
                  <div className="text-[10px] font-mono text-purple-400/80">STATUS</div>
                  <div className="text-xs font-mono font-bold text-purple-200 mt-0.5">LEARNING</div>
                </div>
                <div className="p-2 rounded-lg bg-[#140c2a]/60 border border-purple-500/20">
                  <div className="text-[10px] font-mono text-purple-400/80">MODE</div>
                  <div className="text-xs font-mono font-bold text-fuchsia-300 mt-0.5">EVOLVING</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Strengths in a Clean, Breathable Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-purple-400 uppercase tracking-wider pb-1">
              CORE CREATIVE STRENGTHS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PROFILE_DATA.strengths.map((strength) => {
                const IconComponent =
                  strengthIcons[strength.icon as keyof typeof strengthIcons] || User;
                return (
                  <div
                    key={strength.title}
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-4 rounded-xl bg-[#0d091b]/70 border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#120b24] transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-500/30 text-purple-400 group-hover:text-purple-200 transition-colors shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold font-orbitron text-white group-hover:text-purple-200 transition-colors">
                          {strength.title}
                        </h4>
                        <p className="text-xs text-purple-200/70 leading-relaxed">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
