import React, { useState } from 'react';
import {
  Share2,
  PenTool,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Wrench,
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

interface SkillItem {
  name: string;
  deliverable: string;
  status: 'Practicing' | 'Developing' | 'Active';
}

const SOCIAL_SKILLS: SkillItem[] = [
  {
    name: 'Social Media Management',
    deliverable: 'Cross-platform editorial calendars & scheduled publishing cadence',
    status: 'Practicing',
  },
  {
    name: 'Content Planning & Pillars',
    deliverable: '30-day distribution blueprints & theme alignment',
    status: 'Developing',
  },
  {
    name: 'Social Media Strategy',
    deliverable: 'Audience demographic audits & organic reach roadmaps',
    status: 'Practicing',
  },
  {
    name: 'Caption Copywriting',
    deliverable: 'High-converting hook sequences & actionable closing CTAs',
    status: 'Developing',
  },
  {
    name: 'Community Engagement',
    deliverable: 'Active comment interaction & authentic relationship building',
    status: 'Practicing',
  },
  {
    name: 'Trend & Format Research',
    deliverable: 'Viral format breakdown & competitor benchmark studies',
    status: 'Developing',
  },
];

const DESIGN_SKILLS: SkillItem[] = [
  {
    name: 'Social Media Post Design',
    deliverable: 'High-contrast feed graphics & announcement assets',
    status: 'Practicing',
  },
  {
    name: 'Carousel Architecture',
    deliverable: 'Swipe-retentive multi-slide educational storytelling',
    status: 'Developing',
  },
  {
    name: 'Visual Composition & Balance',
    deliverable: 'Intentional negative space, visual flow & hierarchy',
    status: 'Developing',
  },
  {
    name: 'Typography Pairing',
    deliverable: 'Legible, bold display headers paired with clean body type',
    status: 'Developing',
  },
  {
    name: 'Brand Aesthetic Systems',
    deliverable: 'Cohesive color coordination, mood boards & style kits',
    status: 'Practicing',
  },
  {
    name: 'Creative Campaign Concepts',
    deliverable: 'Thematic visual metaphors & digital promotional art',
    status: 'Developing',
  },
];

const SOFTWARE_TOOLS = [
  { name: 'Canva Pro', role: 'Social & Feed Layouts' },
  { name: 'Adobe Photoshop', role: 'Graphic & Photo Editing' },
  { name: 'Figma', role: 'Design Systems & Carousels' },
  { name: 'Adobe Illustrator', role: 'Vector Assets & Icons' },
  { name: 'Meta Business Suite', role: 'Publishing & Analytics' },
  { name: 'Notion', role: 'Editorial Organization' },
];

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'social' | 'design'>('all');

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden bg-[#06040b]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Clean, spacious section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-purple-900/30">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-orbitron tracking-tight">
              SKILLS & EXPERTISE
            </h2>
            <p className="text-purple-200/70 text-sm sm:text-base max-w-xl font-normal">
              Structured capabilities across Social Media Strategy and Graphic Design, focused on tangible creative deliverables.
            </p>
          </div>

          {/* Clean Segmented Filter (All, Social, Design) */}
          <div className="flex items-center p-1 bg-[#0d091a] border border-purple-500/20 rounded-xl self-start sm:self-auto shrink-0">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('all');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-purple-900/80 text-white shadow-sm border border-purple-400/50 font-semibold'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('social');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'social'
                  ? 'bg-purple-900/80 text-white shadow-sm border border-purple-400/50 font-semibold'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('design');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'design'
                  ? 'bg-purple-900/80 text-white shadow-sm border border-purple-400/50 font-semibold'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              Graphic Design
            </button>
          </div>
        </div>

        {/* 2-Pillar Clean Capability Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Pillar 1: Social Media Strategy */}
          {(activeTab === 'all' || activeTab === 'social') && (
            <div className={`space-y-4 ${activeTab === 'social' ? 'lg:col-span-2 max-w-3xl mx-auto w-full' : ''}`}>
              <div className="flex items-center justify-between pb-2 border-b border-purple-900/30">
                <div className="flex items-center gap-2 text-white font-orbitron font-bold text-base sm:text-lg">
                  <div className="p-1.5 rounded-lg bg-purple-950 border border-purple-500/30 text-purple-400">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span>Social Media Strategy</span>
                </div>
                <span className="text-xs font-mono text-purple-400/70">6 Competencies</span>
              </div>

              <div className="space-y-2.5">
                {SOCIAL_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-3.5 rounded-xl bg-[#0d091a]/70 border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#120b24] transition-all group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold font-orbitron text-white group-hover:text-purple-200 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-purple-300 shrink-0">
                        {skill.status}
                      </span>
                    </div>
                    <p className="text-xs text-purple-200/70 mt-1 leading-relaxed">
                      {skill.deliverable}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pillar 2: Graphic Design */}
          {(activeTab === 'all' || activeTab === 'design') && (
            <div className={`space-y-4 ${activeTab === 'design' ? 'lg:col-span-2 max-w-3xl mx-auto w-full' : ''}`}>
              <div className="flex items-center justify-between pb-2 border-b border-purple-900/30">
                <div className="flex items-center gap-2 text-white font-orbitron font-bold text-base sm:text-lg">
                  <div className="p-1.5 rounded-lg bg-purple-950 border border-purple-500/30 text-purple-400">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <span>Graphic Design & Aesthetics</span>
                </div>
                <span className="text-xs font-mono text-purple-400/70">6 Competencies</span>
              </div>

              <div className="space-y-2.5">
                {DESIGN_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-3.5 rounded-xl bg-[#0d091a]/70 border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#120b24] transition-all group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold font-orbitron text-white group-hover:text-purple-200 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-purple-300 shrink-0">
                        {skill.status}
                      </span>
                    </div>
                    <p className="text-xs text-purple-200/70 mt-1 leading-relaxed">
                      {skill.deliverable}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Dedicated Software & Tools Arsenal (Replaces 30 repetitive badges) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0c081a]/80 border border-purple-500/25 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-purple-900/30">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-semibold uppercase tracking-wider">
              <Wrench className="w-4 h-4 text-purple-400" />
              <span>SOFTWARE ARSENAL & CREATIVE TOOLS</span>
            </div>
            <span className="text-[11px] font-mono text-purple-400/70">Primary Daily Stack</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SOFTWARE_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="p-3 rounded-xl bg-[#110a22] border border-purple-500/20 hover:border-purple-400/50 transition-colors text-center space-y-1"
              >
                <div className="font-orbitron font-bold text-xs sm:text-sm text-white">
                  {tool.name}
                </div>
                <div className="text-[10px] font-mono text-purple-300/70 truncate">
                  {tool.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
