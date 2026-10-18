import React from 'react';
import { Compass, Lightbulb, Palette, CheckCircle, ShieldCheck } from 'lucide-react';
import { PROCESS_DATA } from '../data/portfolioData';

const stepIcons = {
  '01': Compass,
  '02': Lightbulb,
  '03': Palette,
  '04': CheckCircle,
};

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden bg-[#07050f]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            WORKFLOW PROGRESSION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-orbitron tracking-tight">
            FROM IDEA TO EXECUTION
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base max-w-2xl font-normal">
            A transparent four-phase process translating creative concepts into polished, platform-ready assets.
          </p>
        </div>

        {/* 4 Connected Progression Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_DATA.map((item) => {
            const IconComp = stepIcons[item.step as keyof typeof stepIcons] || Compass;

            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#0c081a]/80 border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#120b24] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-orbitron font-bold text-sm bg-purple-950/80 border border-purple-500/30 text-purple-300 group-hover:border-purple-400 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-orbitron font-bold text-lg text-purple-500/30 group-hover:text-purple-400/60 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-base text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-purple-300 mt-0.5">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-purple-200/70 leading-relaxed mt-2.5">
                    {item.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-900/30 flex items-center gap-1.5 text-[11px] font-mono text-purple-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="truncate">{item.checkpoint}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
