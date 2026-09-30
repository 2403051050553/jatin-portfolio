import React from 'react';
import { Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-panel border-t border-white/10 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left space-y-1">
          <div className="text-sm font-extrabold text-white">
            {PERSONAL_INFO.name} <span className="text-cyan-400">• Portfolio</span>
          </div>
          <p className="text-xs text-slate-400">
            B.Tech Computer Science Engineering Student @ Parul University (Expected 2027)
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Overview</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#java-dsa" className="hover:text-cyan-400 transition-colors">Java & DSA</a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-white/5"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded-lg border border-white/5"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-amber-400 bg-slate-900 rounded-lg border border-white/5"
            title="LeetCode Profile"
          >
            <Code className="w-4 h-4" />
          </a>
        </div>

      </div>

      <div className="mt-8 pt-4 border-t border-white/5 text-center text-[11px] text-slate-500">
        Deployable on Vercel • Engineered with React, TypeScript & Tailwind CSS for Ahuja Jatin Tehalram
      </div>
    </footer>
  );
};
