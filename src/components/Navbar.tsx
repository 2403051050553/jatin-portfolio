import React, { useState } from 'react';
import { FileText, Menu, X, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  recruiterMode: boolean;
  setRecruiterMode: (val: boolean) => void;
  onOpenResume: () => void;
  onOpenRecruiterDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  recruiterMode,
  setRecruiterMode,
  onOpenResume,
  onOpenRecruiterDeck,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Java & DSA', href: '#java-dsa' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'GitHub', href: '#github' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-cyan-400">
              JA
            </div>
          </div>
          <div>
            <div className="font-extrabold text-lg text-white tracking-wide flex items-center gap-2">
              {PERSONAL_INFO.shortName}
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                CSE '27
              </span>
            </div>
            <p className="text-xs text-slate-400">Targeting Microsoft SDE 2027</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Recruiter Mode Toggle */}
          <button
            onClick={() => {
              setRecruiterMode(!recruiterMode);
              if (!recruiterMode) onOpenRecruiterDeck();
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border ${
              recruiterMode
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-glow-gold'
                : 'bg-slate-800/80 text-slate-300 border-white/10 hover:border-cyan-500/40 hover:text-cyan-400'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${recruiterMode ? 'text-amber-400 animate-bounce' : 'text-slate-400'}`} />
            {recruiterMode ? '⚡ Recruiter Mode Active' : '⚡ Recruiter Mode'}
          </button>

          {/* Resume View Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-glow-cyan hover:opacity-95 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Social Links */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setRecruiterMode(!recruiterMode)}
            className="p-2 text-amber-400 bg-amber-500/10 rounded-lg border border-amber-500/20"
            title="Toggle Recruiter View"
          >
            <Zap className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/60 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold bg-cyan-500 text-slate-950"
            >
              <FileText className="w-4 h-4" /> View Resume PDF
            </button>
            <div className="flex justify-center gap-4 pt-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-cyan-400">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
