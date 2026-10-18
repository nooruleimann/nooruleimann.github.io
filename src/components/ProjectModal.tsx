import React, { useEffect } from 'react';
import { X, Sparkles, Layers, Palette, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c081a] border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.35)] p-6 sm:p-8 space-y-6 glow-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-purple-900/50 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <span>{project.tag}</span>
              <span>·</span>
              <span className="text-purple-300">{project.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            aria-label="Close project modal"
            className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/70 hover:border-purple-400 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Preview Image */}
        <div className="rounded-xl overflow-hidden border border-purple-500/40 relative group bg-[#110a24]">
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/75 border border-purple-500/40 text-xs font-mono text-purple-200">
            DEMO PREVIEW // {project.category}
          </div>
        </div>

        {/* Detailed Concept Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PROJECT OVERVIEW</span>
              </h4>
              <p className="text-sm text-purple-100/90 leading-relaxed bg-[#120b24] p-4 rounded-xl border border-purple-900/40">
                {project.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1.5">
                DESIGN & STRATEGY RATIONALE
              </h4>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                {project.conceptBrief}
              </p>
            </div>

            {/* Slides list if carousel */}
            {project.slides && project.slides.length > 0 && (
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>SLIDE PROGRESSION ARCHITECTURE</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.slides.map((s) => (
                    <div
                      key={s}
                      className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Meta Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Highlights */}
            <div className="p-4 rounded-xl bg-[#120b24] border border-purple-500/25 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold block">
                KEY SPECIFICATIONS:
              </span>
              <ul className="space-y-1.5">
                {project.keyHighlights.map((hl) => (
                  <li
                    key={hl}
                    className="text-xs text-purple-200/90 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Palette Swatches */}
            <div className="p-4 rounded-xl bg-[#120b24] border border-purple-500/25 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-purple-400" />
                <span>COLOR PALETTE ARCHITECTURE:</span>
              </span>
              <div className="flex items-center gap-2 pt-1">
                {project.palette.map((color) => (
                  <div key={color} className="space-y-1 text-center">
                    <div
                      className="w-9 h-9 rounded-lg border border-purple-400/40 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] font-mono text-purple-400/80 block">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="p-4 rounded-xl bg-[#120b24] border border-purple-500/25 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-purple-400" />
                <span>DESIGN TOOLS UTILIZED:</span>
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-purple-900/50 border border-purple-500/30 text-purple-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA inside modal */}
            {onRequestSimilar && (
              <button
                onClick={() => {
                  soundFx.playSelect();
                  onRequestSimilar(project.title);
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-orbitron font-bold text-xs tracking-wider uppercase border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.35)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
