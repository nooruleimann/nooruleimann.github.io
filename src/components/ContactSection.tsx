import React, { useState } from 'react';
import {
  Send,
  Mail,
  Copy,
  Check,
  Instagram,
  Linkedin,
  MessageSquare,
  Sparkles,
  Terminal,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Social Media Management');
  const [message, setMessage] = useState('');

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If initialService changes from parent, sync it
  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please provide your name or organization handle.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid communication email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setError('Please share a few details about your project (at least 10 characters).');
      return;
    }

    soundFx.playTransmit();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFx.playSelect();
    }, 900);
  };

  const handleReset = () => {
    soundFx.playClick();
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-[#06040d]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[32rem] h-[32rem] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/70 border border-purple-500/40 text-xs font-mono text-purple-300">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>TRANSMISSION CHANNEL // NEW MISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-orbitron tracking-tight">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base font-normal leading-relaxed">
            Let's turn your ideas into something creative. I'm always interested in connecting, learning, and exploring new opportunities.
          </p>
        </div>

        {/* Contact Layout: Form on Left, Direct Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Terminal Contact Form */}
          <div className="lg:col-span-7 bg-[#0c081a]/90 rounded-2xl border border-purple-500/40 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.15)] glow-border relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-900/40">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="font-semibold text-white">GET IN TOUCH</span>
              </div>
              <span className="text-[11px] font-mono text-purple-400/70">DIRECT INQUIRY</span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-purple-900/60 border border-purple-400 text-purple-200 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-orbitron font-bold text-xl text-white">
                    MESSAGE RECEIVED
                  </h3>
                  <p className="text-xs font-mono text-purple-300">
                    STATUS: READY FOR CONNECTION
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200/90 leading-relaxed font-mono text-left space-y-2">
                  <p>
                    Thank you, <span className="text-white font-semibold">{name}</span>! Your project inquiry for{' '}
                    <span className="text-purple-300 font-semibold">{service}</span> has been noted.
                  </p>
                  <p className="text-purple-400/80">
                    You can also reach out directly anytime at{' '}
                    <span className="text-purple-200 underline">{PROFILE_DATA.email}</span>.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-white border border-purple-400/50 text-xs font-orbitron font-bold tracking-wider uppercase transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-mono text-purple-300 flex items-center justify-between">
                    <span>YOUR NAME:</span>
                    <span className="text-[10px] text-purple-500 font-normal">REQUIRED</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-purple-500/30 text-white placeholder-purple-400/40 text-xs font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-purple-300 flex items-center justify-between">
                    <span>EMAIL ADDRESS:</span>
                    <span className="text-[10px] text-purple-500 font-normal">REQUIRED</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@studio.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-purple-500/30 text-white placeholder-purple-400/40 text-xs font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-purple-300">
                    SERVICE INTEREST:
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-purple-500/30 text-white text-xs font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all cursor-pointer"
                  >
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Content & Caption Writing">Content & Caption Writing</option>
                    <option value="General Creative Exploration">General Creative Exploration</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-purple-300 flex items-center justify-between">
                    <span>PROJECT DETAILS:</span>
                    <span className="text-[10px] text-purple-400/70 font-mono">
                      {message.length} CHARS
                    </span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, target audience, aesthetic preferences, or goals..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-purple-500/30 text-white placeholder-purple-400/40 text-xs font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase border border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.35)] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-mono">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>SENDING MESSAGE...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels, Socials, and Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Copy Box */}
            <div className="p-6 rounded-2xl bg-[#0d091b]/90 border border-purple-500/30 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>DIRECT EMAIL CHANNEL</span>
              </div>
              <h3 className="text-lg font-bold font-orbitron text-white">
                {PROFILE_DATA.email}
              </h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Prefer direct correspondence? Click below to copy my primary email to your clipboard.
              </p>
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 px-3 rounded-xl bg-purple-950/70 hover:bg-purple-900/80 border border-purple-500/40 text-purple-200 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-purple-400" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels Panel */}
            <div className="p-6 rounded-2xl bg-[#0d091b]/90 border border-purple-500/30 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>DIGITAL PRESENCE // SOCIAL CHANNELS</span>
              </div>

              <div className="space-y-2.5">
                <a
                  href={PROFILE_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/40 transition-all group/ig cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-900/50 text-purple-300 group-hover/ig:text-pink-400 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-orbitron text-white group-hover/ig:text-purple-200 transition-colors">Instagram</div>
                      <div className="text-[10px] font-mono text-purple-300">{PROFILE_DATA.instagram}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300/80 px-2 py-0.5 rounded bg-black/40 border border-purple-900/40 group-hover/ig:border-purple-400">
                    VISIT // →
                  </span>
                </a>

                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/40 transition-all group/li cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-900/50 text-purple-300 group-hover/li:text-cyan-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-orbitron text-white group-hover/li:text-purple-200 transition-colors">LinkedIn</div>
                      <div className="text-[10px] font-mono text-purple-300">Noor Ul Eiman</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300/80 px-2 py-0.5 rounded bg-black/40 border border-purple-900/40 group-hover/li:border-purple-400">
                    CONNECT // →
                  </span>
                </a>

                <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-900/50 text-purple-300">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-orbitron text-white">Direct DM</div>
                      <div className="text-[10px] font-mono text-purple-400/80">Always open to discussions</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300/80 px-2 py-0.5 rounded bg-black/40 border border-purple-900/40">
                    OPEN
                  </span>
                </div>
              </div>
            </div>

            {/* Quick response pledge */}
            <div className="p-4 rounded-xl bg-[#090514] border border-purple-900/40 text-xs font-mono text-purple-300/80 leading-relaxed flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
              <span>
                Standard mission acknowledgment: Typically within 24 hours. Clear, prompt, and friendly communication.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
