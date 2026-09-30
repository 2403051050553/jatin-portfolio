import React from 'react';
import { FileText, Code, Sparkles, Building2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenRecruiterDeck: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenRecruiterDeck }) => {
  return (
    <section id="hero" className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Blazer Photo & Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Animated Glowing Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse-slow" />
              
              <div className="relative rounded-3xl bg-slate-900 border border-white/10 p-3 overflow-hidden shadow-2xl">
                {/* User Blazer Portrait Photo */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-950">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Microsoft Target Badge */}
                  <div className="absolute bottom-3 left-3 right-3 glass-panel p-2.5 rounded-xl border border-cyan-500/30 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Target Role</p>
                      <p className="text-xs font-semibold text-white truncate">Microsoft SDE Intern / FTE 2027</p>
                    </div>
                  </div>
                </div>

                {/* Card Quick Info Footer */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Open to Opportunities
                  </span>
                  <span className="font-mono text-slate-400">Sem 5 | CGPA 7.04</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Links Under Image */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 text-xs font-semibold text-slate-300 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 hover:text-blue-400 text-xs font-semibold text-slate-300 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-amber-500/40 hover:text-amber-400 text-xs font-semibold text-slate-300 transition-all"
              >
                <Code className="w-4 h-4 text-amber-400" />
                LeetCode
              </a>
            </div>
          </div>

          {/* Right Column: Hero Content & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Full Stack & DSA Engineer
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Parul University (Grad 2027)
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name.split(' ')[0]} <span className="text-gradient-cyan">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                Crafting Scalable <span className="text-cyan-400">Java & Spring Boot</span> Backends with Modern <span className="text-blue-400">React</span> Frontends & <span className="text-purple-400">AI Capabilities</span>
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Key Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Java Core', 'Data Structures & Algorithms', 'React.js', 'Spring Boot', 'MySQL & Advanced SQL', 'AWS Cloud Foundations', 'AI API Integration'].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                View & Download Resume PDF
              </button>

              <button
                onClick={onOpenRecruiterDeck}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-sm hover:bg-amber-500/20 transition-all duration-300 shadow-glow-gold"
              >
                <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                ⚡ Executive Recruiter View
              </button>
            </div>

            {/* Metrics Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-2xl font-black text-cyan-400">200+</div>
                <div className="text-xs text-slate-400 font-medium">DSA Problems Solved</div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-2xl font-black text-emerald-400">4+</div>
                <div className="text-xs text-slate-400 font-medium">Full Stack & AI Apps</div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-2xl font-black text-purple-400">8+</div>
                <div className="text-xs text-slate-400 font-medium">Verified Certifications</div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-2xl font-black text-amber-400">7.04</div>
                <div className="text-xs text-slate-400 font-medium">B.Tech CSE CGPA</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
