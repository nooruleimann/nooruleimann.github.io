import React, { useState } from 'react';
import {
  Share2,
  Sparkles,
  PenTool,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const serviceIcons = {
  '01': Share2,
  '02': Sparkles,
  '03': PenTool,
  '04': FileText,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('srv-1');

  const handleCardClick = (service: ServiceItem) => {
    soundFx.playSelect();
    setSelectedServiceId(service.id);
  };

  const handleChooseMission = (serviceTitle: string) => {
    soundFx.playClick();
    onSelectService(serviceTitle);
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            CREATIVE OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-orbitron tracking-tight">
            WHAT I CAN DO
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base max-w-2xl font-normal">
            Specialized creative services delivering consistent social media execution, clear communication, and polished visual impact.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedServiceId === service.id;
            const IconComponent =
              serviceIcons[service.number as keyof typeof serviceIcons] || Sparkles;

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service)}
                onMouseEnter={() => soundFx.playHover()}
                className={`group rounded-2xl p-6 sm:p-7 transition-all duration-300 border cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#120b26] border-purple-400/80 shadow-[0_0_25px_rgba(168,85,247,0.25)]'
                    : 'bg-[#0d091b]/80 border-purple-500/20 hover:border-purple-400/50 hover:bg-[#110a24]'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl border transition-colors ${
                          isSelected
                            ? 'bg-purple-900/80 border-purple-400 text-purple-200'
                            : 'bg-purple-950/60 border-purple-500/30 text-purple-400 group-hover:text-purple-200'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider">
                        SERVICE {service.number}
                      </span>
                    </div>

                    <span className="font-orbitron text-2xl font-extrabold text-purple-500/20 group-hover:text-purple-400/30 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Main Info */}
                  <div className="space-y-1.5 mb-5">
                    <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-purple-200 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs font-mono text-purple-300">
                      {service.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables tags */}
                  <div className="pt-3 border-t border-purple-900/30">
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/20 text-purple-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChooseMission(service.title);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-900/50 hover:bg-purple-800 text-purple-200 hover:text-white border border-purple-400/40 text-xs font-orbitron font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <span>Inquire About Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
