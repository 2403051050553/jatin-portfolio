import React, { useState } from 'react';
import { Code2, Cpu, Check, Copy, ExternalLink, Sparkles, Binary } from 'lucide-react';
import { CODE_SNIPPETS, DSA_STATS, TECHNICAL_SKILLS } from '../data/portfolioData';

export const JavaDsaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CODE_SNIPPETS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeSnippet = CODE_SNIPPETS.find((s) => s.id === activeTab) || CODE_SNIPPETS[0];

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="java-dsa" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Cpu className="w-3.5 h-3.5" /> Core Computer Science & Algorithms
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Java Core, DSA & <span className="text-gradient-gold">Problem Solving</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Solid grasp of Data Structures, Algorithm Complexity, Object-Oriented Principles, Spring Boot REST Architecture, and Advanced SQL Querying.
          </p>
        </div>

        {/* DSA Profiles & Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DSA_STATS.map((dsa) => (
            <div key={dsa.platform} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
                  <Binary className="w-4 h-4" /> {dsa.platform} Profile
                </span>
                <a
                  href={dsa.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-400 hover:text-cyan-400 flex items-center gap-1"
                >
                  View Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <div className="text-xl font-bold text-white">{dsa.username}</div>
                <div className="text-xs text-slate-400">{dsa.ranking}</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">Solved Problems</span>
                <span className="text-2xl font-black text-amber-400">{dsa.problemsSolved}+</span>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Key Milestones</span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {dsa.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code Snippets Explorer */}
        <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Top Code Bar */}
          <div className="bg-slate-950 px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Interactive Logic & Algorithm Playground
              </span>
            </div>

            {/* Snippet Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {CODE_SNIPPETS.map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveTab(snippet.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    activeTab === snippet.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {snippet.category}: {snippet.title.split('/')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Snippet Content */}
          <div className="p-6 space-y-4">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{activeSnippet.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeSnippet.description}</p>
              </div>

              <div className="flex items-center gap-3">
                {activeSnippet.complexity && (
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block">Time Complexity</span>
                    <span className="text-xs font-mono text-cyan-300 font-bold">{activeSnippet.complexity.time}</span>
                  </div>
                )}
                <button
                  onClick={() => handleCopyCode(activeSnippet.id, activeSnippet.code)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedId === activeSnippet.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Snippet
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Block Container */}
            <div className="bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
              <pre>
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

          </div>

        </div>

        {/* Comprehensive Technical Skills Matrix */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-center">Engineered Skillsets & Proficiency Matrix</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECHNICAL_SKILLS.map((sec) => (
              <div key={sec.category} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">{sec.category}</h4>
                <div className="space-y-3">
                  {sec.items.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="text-slate-400 font-mono">{item.level}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
