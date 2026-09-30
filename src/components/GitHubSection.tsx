import React from 'react';
import { GitFork, Star, Activity, Code } from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <GithubIcon className="w-3.5 h-3.5" /> Open Source & Version Control
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            GitHub Activity & <span className="text-gradient-cyan">Repositories</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Active version control contributor with 94+ commits in 2026 across full-stack applications, frontend clones, and algorithm utilities.
          </p>
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-white">
                <Activity className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  94 Contributions in 2026
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">
                    Active Streak
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Target User Profile: github.com/2403051050553</p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white flex items-center gap-2 border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> Open Full Profile
            </a>
          </div>

          {/* GitHub Activity Heatmap Screenshot Artifact Image */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 space-y-3 overflow-hidden">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>GitHub Contribution Grid Stream</span>
              <span className="text-cyan-400">2026 Commit Ledger</span>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900/60 p-2">
              <img
                src="/assets/github-contributions.png"
                alt="Jatin Ahuja GitHub Contributions"
                className="w-full h-auto object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

        </div>

        {/* Pinned Repositories Grid */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" /> Pinned Repositories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GITHUB_REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      <Code className="w-4 h-4 text-slate-400" />
                      <span>{repo.name}</span>
                    </div>
                    <span className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-white/5">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-amber-400">
                      <Star className="w-3.5 h-3.5" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-cyan-400">
                      <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
