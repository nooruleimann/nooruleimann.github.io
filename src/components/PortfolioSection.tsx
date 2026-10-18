import React, { useState } from 'react';
import {
  FolderGit2,
  ArrowRight,
  Eye,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'social', label: 'Social Media Posts' },
  { id: 'carousel', label: 'Instagram Carousels' },
  { id: 'brand', label: 'Brand Identity' },
  { id: 'strategy', label: 'Content Strategy' },
  { id: 'promo', label: 'Promotional Graphics' },
  { id: 'experiments', label: 'Creative Experiments' },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categorySlug === activeCategory;
  });

  const handleCardClick = (project: PortfolioProject) => {
    soundFx.playSelect();
    onSelectProject(project);
  };

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>MISSION LOG // SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-orbitron tracking-tight">
            MY CREATIVE UNIVERSE
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base max-w-2xl font-normal">
            A collection of creative concepts, visual experiments, and design projects exploring social media impact and futuristic aesthetics.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-purple-900/80 text-white border border-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : 'bg-[#0d091b]/80 text-purple-300/70 hover:text-white border border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Bento / Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // Give first card a 2-col span on large screens for bento rhythm
            const isFeatured = index === 0 && activeCategory === 'all';

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => soundFx.playHover()}
                className={`group rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0d091c]/90 hover:border-purple-400/70 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:-translate-y-1 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Thumbnail Area */}
                <div
                  className={`w-full overflow-hidden relative bg-[#130d29] ${
                    isFeatured
                      ? 'aspect-[16/9] sm:aspect-[21/9]'
                      : 'aspect-[4/3] sm:aspect-[16/10]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Scrim & Purple Tint on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0717] via-black/20 to-transparent opacity-80 group-hover:opacity-90 group-hover:bg-purple-900/20 transition-all duration-300 pointer-events-none" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 border border-purple-500/40 text-[11px] font-mono text-purple-300 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>{project.category}</span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-4 py-2 rounded-xl bg-purple-950/90 border border-purple-400/80 text-white font-orbitron text-xs font-bold tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center gap-2 backdrop-blur-sm">
                      <Eye className="w-4 h-4" />
                      <span>VIEW PROJECT LOG</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-purple-400/80">
                      {project.tag}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-orbitron text-white group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed line-clamp-2">
                      {project.overview}
                    </p>
                  </div>

                  {/* Footer Action Bar on Card */}
                  <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-purple-300">
                      <span>{project.toolsUsed.slice(0, 2).join(' · ')}</span>
                      {project.toolsUsed.length > 2 && (
                        <span className="text-purple-400/60">
                          +{project.toolsUsed.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-purple-300 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                      <span className="font-orbitron font-semibold text-[11px] tracking-wider uppercase">
                        VIEW PROJECT
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on concept work */}
        <div className="p-4 rounded-xl bg-[#090514] border border-purple-900/40 text-center text-xs font-mono text-purple-300/75">
          All showcase items represent authentic self-developed concept prototypes, visual exercises, and design explorations.
        </div>
      </div>
    </section>
  );
};
