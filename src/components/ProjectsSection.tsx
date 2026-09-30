import React, { useState } from 'react';
import { Layers, Server, Database, Cpu, CheckCircle, ArrowRight, X, Sparkles, Code, Activity } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" /> Featured Engineering & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Full-Stack & <span className="text-gradient-cyan">AI System Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Architected with modern software design principles, clean RESTful contracts, role-based security, and AI integrations. Click any project to inspect its architecture case study.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-md text-xs font-bold ${
                    project.category === 'AI & LLM' 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : project.category === 'Full Stack'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {project.category}
                  </span>
                  {project.isFeatured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" /> Featured Case Study
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mt-0.5">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Architecture Highlights Pill */}
                <div className="bg-slate-950/60 p-3 rounded-xl border border-white/5 space-y-1">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-cyan-400" />
                    Architecture Flow
                  </div>
                  <div className="text-xs text-slate-300 font-mono truncate">
                    {project.architecture.client} → {project.architecture.backend}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Card Actions */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                >
                  <Cpu className="w-4 h-4" /> Inspect System Design
                </button>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive System Architecture Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-glow-cyan overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">System Architecture & Case Study</span>
                <h3 className="text-xl font-extrabold text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Project Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-white/5">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Visual System Architecture Diagram */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Visual End-to-End Component Architecture
                </h4>
                <div className="bg-slate-950 p-5 rounded-xl border border-cyan-500/20 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    
                    {/* Client Box */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 mx-auto flex items-center justify-center text-cyan-400 mb-2">
                        <Code className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-white">Frontend Client</div>
                      <div className="text-[11px] text-cyan-300 mt-1 font-mono">{selectedProject.architecture.client}</div>
                    </div>

                    {/* Backend Box */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 mx-auto flex items-center justify-center text-purple-400 mb-2">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-white">Backend Controller & REST API</div>
                      <div className="text-[11px] text-purple-300 mt-1 font-mono">{selectedProject.architecture.backend}</div>
                    </div>

                    {/* Database Box */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mx-auto flex items-center justify-center text-emerald-400 mb-2">
                        <Database className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-white">Persistence & Database</div>
                      <div className="text-[11px] text-emerald-300 mt-1 font-mono">{selectedProject.architecture.database}</div>
                    </div>

                  </div>

                  {/* Flow Steps */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="text-xs font-bold text-slate-300">Data Transaction Execution Sequence:</div>
                    <ol className="space-y-1.5 text-xs text-slate-400 font-mono">
                      {selectedProject.architecture.flow.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              {/* Core Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Key Functional Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="bg-slate-950 p-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> View Source Code on GitHub
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
