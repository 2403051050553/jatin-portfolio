import React from 'react';
import { X, Download, Printer, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-glow-cyan overflow-hidden my-8">
        
        {/* Modal Top Control Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-extrabold text-white">Official Engineering Resume Artifact</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" /> Print / Save as PDF
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="AHUJA_JATIN_TEHALRAM_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 hover:shadow-glow-cyan transition-all"
            >
              <Download className="w-4 h-4" /> Download PDF File
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Formatted Resume Body */}
        <div className="p-8 space-y-6 max-h-[80vh] overflow-y-auto bg-white text-slate-900 font-sans print:p-0 print:bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-xs font-bold text-slate-700 mt-0.5">{PERSONAL_INFO.degree} STUDENT</p>
              <p className="text-xs text-slate-600 italic">Aspiring Software Engineer | Targeting Microsoft Software Engineering Internship/Placement</p>
            </div>
            <div className="text-right text-xs text-slate-700 space-y-0.5">
              <p>+91 8799847123 • {PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.location}</p>
              <p className="font-semibold text-blue-700">github.com/2403051050553</p>
            </div>
          </div>

          {/* Grid Layout: Education & Summary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Education & Skills */}
            <div className="md:col-span-4 space-y-5 border-r border-slate-200 pr-4">
              
              <section className="space-y-1">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Education</h2>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Parul University</p>
                  <p className="text-xs text-slate-700 font-medium">B.Tech Computer Science Engineering</p>
                  <p className="text-xs text-slate-600">Semester: 5th | CGPA: 7.04 / 10.0</p>
                  <p className="text-xs text-slate-500">Expected Graduation: 2027</p>
                </div>
              </section>

              <section className="space-y-1">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Technical Skills</h2>
                <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                  <li><strong>Java</strong> — Strong</li>
                  <li><strong>DSA</strong> — Intermediate</li>
                  <li><strong>React</strong> — Basic / Intermediate</li>
                  <li><strong>SQL</strong> — Basic / Advanced Certified</li>
                  <li><strong>Git & GitHub</strong> — Advanced</li>
                </ul>
              </section>

              <section className="space-y-1">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Coding Profiles</h2>
                <div className="text-xs text-slate-700 space-y-1">
                  <p><strong>LeetCode:</strong> 2403051050553</p>
                  <p><strong>HackerRank:</strong> Jatin Ahuja</p>
                  <p><strong>Codeforces:</strong> Jatin_DSA2006</p>
                </div>
              </section>

              <section className="space-y-1">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Languages</h2>
                <p className="text-xs text-slate-700">English, Hindi, Marathi</p>
              </section>

            </div>

            {/* Right Column: Summary, Projects, Certifications */}
            <div className="md:col-span-8 space-y-5">
              
              <section className="space-y-1">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Professional Summary</h2>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Projects</h2>
                
                <div className="space-y-1">
                  <h3 className="text-xs font-extrabold text-slate-900">1. Hospital Management System | Full Stack Web Application</h3>
                  <p className="text-xs text-slate-700">• Developed a full-stack web app for managing patient/doctor registrations, appointments, and operations.</p>
                  <p className="text-xs text-slate-700">• Implemented secure authentication and role-based access control.</p>
                  <p className="text-xs text-slate-500 font-mono">Tech Stack: HTML, CSS, JavaScript, React (Frontend), Java (Backend), MySQL</p>
                </div>

                <div className="space-y-1 pt-1">
                  <h3 className="text-xs font-extrabold text-slate-900">2. AI Interview Platform | Full Stack Web Application</h3>
                  <p className="text-xs text-slate-700">• Built an AI-powered platform analyzing interview questions and generating actionable feedback.</p>
                  <p className="text-xs text-slate-700">• Integrated AI capabilities for real-time answer rubric evaluation.</p>
                  <p className="text-xs text-slate-500 font-mono">Tech Stack: React (Frontend), Java AI (Backend), OpenAI API, MySQL</p>
                </div>
              </section>

              <section className="space-y-1">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Certifications</h2>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• <strong>AWS Academy Graduate – Cloud Foundations</strong> (Sep 2026)</li>
                  <li>• <strong>AWS SimuLearn: Cloud Computing Essentials</strong> (Sep 2026)</li>
                  <li>• <strong>IBM SkillsBuild: IBM Z Log & Data Analytics</strong> (Sep 2026)</li>
                  <li>• <strong>HackerRank SQL (Advanced)</strong> (Jan 2026 | ID: A56B8381C5FB)</li>
                  <li>• <strong>HackerRank Java (Basic) & CSS (Basic)</strong> (Aug 2026)</li>
                </ul>
              </section>

              <section className="space-y-1">
                <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider border-b border-slate-300 pb-1">Career Objective</h2>
                <p className="text-xs text-slate-700 italic">
                  Seeking a Software Engineer Internship or Placement opportunity at Microsoft where I can utilize my programming skills, problem-solving abilities, and passion for technology to contribute to innovative projects.
                </p>
              </section>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
