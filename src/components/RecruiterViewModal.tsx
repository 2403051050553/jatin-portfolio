import React, { useState } from 'react';
import { X, CheckCircle, Zap, Download, Mail, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RecruiterViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterViewModal: React.FC<RecruiterViewModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const copyContact = () => {
    navigator.clipboard.writeText(`Candidate: ${PERSONAL_INFO.name}\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}`);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 3000);
  };

  const microsoftCompetencies = [
    { name: 'Data Structures & Algorithms', score: 92, status: 'Intermediate / Strong', detail: '200+ solved on LeetCode & HackerRank. Focus on Arrays, Strings, HashTables & Two-Pointers.' },
    { name: 'Java Backend & Object-Oriented Design', score: 95, status: 'Strong', detail: 'Clean OOP principles, Spring Boot REST controllers, Exception Handling, Collections Framework.' },
    { name: 'Full Stack Architecture (React + MySQL)', score: 94, status: 'Proficient', detail: 'Built Hospital Management System & AI Interview Assistant with role-based access.' },
    { name: 'Cloud & System Integration', score: 90, status: 'Certified', detail: 'AWS Academy Cloud Foundations Graduate, IBM Z Data Analytics & HackerRank SQL Advanced.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-glow-gold overflow-hidden my-8">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-slate-900 border-b border-amber-500/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                Executive Recruiter Candidate Summary Deck
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950">
                  30-SEC SNAPSHOT
                </span>
              </h2>
              <p className="text-xs text-amber-200/80">Tailored for Microsoft SDE Internship / Full-Time Engineering Hiring</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Candidate Snapshot Box */}
          <div className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-500/40 shadow-md"
              />
              <div>
                <h3 className="text-xl font-extrabold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-cyan-400 font-medium">B.Tech Computer Science Engineering @ Parul University</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono border border-white/5">Semester: 5th</span>
                  <span className="bg-emerald-500/10 text-emerald-300 px-2.5 py-1 rounded-md font-mono border border-emerald-500/20 font-bold">CGPA: 7.04 / 10.0</span>
                  <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-md font-mono border border-purple-500/20">Graduation: 2027</span>
                </div>
              </div>
            </div>

            {/* Microsoft Fit Score Box */}
            <div className="w-full md:w-auto bg-slate-950/80 p-4 rounded-xl border border-amber-500/30 text-center min-w-[200px]">
              <div className="text-xs uppercase tracking-wider font-bold text-amber-400">Microsoft SDE Fit Score</div>
              <div className="text-4xl font-black text-amber-300 mt-1">95<span className="text-xl">%</span></div>
              <div className="text-[11px] text-slate-400 mt-1">High Potential Candidate</div>
            </div>
          </div>

          {/* 30-Second Elevator Pitch */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Executive Candidate Elevator Pitch
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-white/5">
              "{PERSONAL_INFO.summary} Solved 200+ algorithms across LeetCode & HackerRank, holds verified HackerRank Advanced SQL & AWS Cloud certifications, and built full-stack production-ready software including a Hospital Management Portal and an AI Mock Interview Evaluator."
            </p>
          </div>

          {/* Microsoft SDE Competency Radar */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Microsoft Role Competency Breakdown
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {microsoftCompetencies.map((comp) => (
                <div key={comp.name} className="glass-panel p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{comp.name}</span>
                    <span className="font-mono text-cyan-400 font-bold">{comp.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-amber-400 rounded-full"
                      style={{ width: `${comp.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">{comp.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/20">
              <div className="text-xs font-bold text-emerald-400">AWS Cloud Foundations</div>
              <div className="text-xs text-slate-400 mt-1">Graduate Badge (AWS Academy Sep 2026)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-blue-500/20">
              <div className="text-xs font-bold text-blue-400">SQL (Advanced) Certified</div>
              <div className="text-xs text-slate-400 mt-1">HackerRank Verified (ID: A56B8381C5FB)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-purple-500/20">
              <div className="text-xs font-bold text-purple-400">Full Stack & AI Apps</div>
              <div className="text-xs text-slate-400 mt-1">Spring Boot, React & OpenAI API</div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="bg-slate-950 p-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{PERSONAL_INFO.email}</span>
            <span className="mx-1">•</span>
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={copyContact}
              className="px-4 py-2 rounded-xl bg-slate-800 border border-white/10 hover:bg-slate-700 text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
            >
              {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Zap className="w-4 h-4 text-amber-400" />}
              {copied ? 'Shortlisted! Contact Copied' : '1-Click Shortlist Candidate'}
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-xs font-extrabold hover:shadow-glow-gold transition-all flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
