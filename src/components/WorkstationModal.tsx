import React, { useEffect } from 'react';
import { X, Monitor, Cpu, Headphones, Shield, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

interface WorkstationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkstationModal: React.FC<WorkstationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl bg-[#0b0717] border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.3)] p-6 sm:p-8 space-y-6 glow-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIGITAL RIG TELEMETRY // CYBER STUDIO</span>
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white">
              CREATIVE WORKSTATION INSPECTION
            </h3>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            aria-label="Close workstation modal"
            className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/80 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image */}
        <div className="rounded-xl overflow-hidden border border-purple-500/40 relative bg-black aspect-[16/9] w-full">
          <img
            src="/src/assets/images/hero_workstation_1792080652260.jpg"
            alt="Futuristic cyberpunk gaming studio workstation setup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/80 border border-purple-500/40 text-xs font-mono text-purple-200">
            AMBIENT PURPLE RGB // DUAL ULTRA-WIDE WORKFLOW
          </div>
        </div>

        {/* Rig Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Monitor className="w-4 h-4 text-purple-400" />
              <span>DISPLAY MATRIX</span>
            </div>
            <div className="text-sm font-bold font-orbitron text-white">Dual 4K IPS Displays</div>
            <p className="text-xs text-purple-200/70">
              Color calibrated (100% sRGB & DCI-P3) for accurate social post rendering.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>SOFTWARE CORE</span>
            </div>
            <div className="text-sm font-bold font-orbitron text-white">Creative Cloud & Figma</div>
            <p className="text-xs text-purple-200/70">
              High-speed prototyping, vector illustration, and typography workflows.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Headphones className="w-4 h-4 text-purple-400" />
              <span>AUDIO & AMBIANCE</span>
            </div>
            <div className="text-sm font-bold font-orbitron text-white">Lo-Fi Cyber Ambience</div>
            <p className="text-xs text-purple-200/70">
              Dedicated focused deep-work environment with zero distractions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
