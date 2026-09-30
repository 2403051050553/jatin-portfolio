import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="text-gradient-purple">Academic Profile</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Currently pursuing Bachelor of Technology in Computer Science Engineering at Parul University.
          </p>
        </div>

        {/* University Timeline Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-3xl border border-purple-500/30 shadow-glow-purple space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-purple-400 font-bold text-xl">
                  PU
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">{PERSONAL_INFO.university}</h3>
                <p className="text-sm font-semibold text-purple-300">{PERSONAL_INFO.degree}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs font-mono text-slate-400">Target Graduation</div>
              <div className="text-lg font-extrabold text-cyan-400">{PERSONAL_INFO.expectedGraduation}</div>
            </div>
          </div>

          {/* Academic Stats Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-950/80 p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Current Semester</span>
              <div className="text-lg font-black text-white">{PERSONAL_INFO.semester}</div>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-xl border border-purple-500/20 space-y-1">
              <span className="text-[10px] uppercase font-bold text-purple-400">Cumulative GPA</span>
              <div className="text-lg font-black text-purple-300">{PERSONAL_INFO.cgpa}</div>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-xl border border-emerald-500/20 space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-400">Academic Standing</span>
              <div className="text-sm font-bold text-emerald-300">Active Good Standing</div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider">Core Engineering Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming (Java)',
                'Database Management Systems (SQL)',
                'Software Engineering & System Architecture',
                'Web Technologies (HTML, CSS, JS, React)',
                'Cloud Computing Essentials'
              ].map((course) => (
                <span key={course} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
