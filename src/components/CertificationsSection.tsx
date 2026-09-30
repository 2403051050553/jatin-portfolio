import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, FileText, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../types';

export const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const categories = ['All', 'Cloud', 'Database', 'Programming', 'Web'];

  const filteredCerts = activeCategory === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Award className="w-3.5 h-3.5" /> Industry Recognized Accomplishments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Verified Technical <span className="text-gradient-emerald">Certifications & Badges</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Certified proficiency across AWS Cloud Computing, Advanced SQL Querying, IBM Enterprise Analytics, Java Core, and Web Standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-glow-emerald'
                  : 'bg-slate-900 text-slate-400 border-white/10 hover:text-white hover:border-emerald-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between cursor-pointer group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-white/5">
                    {cert.issueDate}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-emerald-400/90 font-medium mt-1">{cert.issuer}</p>
                </div>

                {cert.credentialId && (
                  <div className="bg-slate-950/80 p-2 rounded-lg border border-white/5 text-[10px] font-mono text-slate-400 truncate">
                    ID: <span className="text-cyan-300 font-bold">{cert.credentialId}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-500">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-bold">
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-emerald-500/40 rounded-2xl shadow-glow-emerald overflow-hidden">
            
            <div className="bg-gradient-to-r from-emerald-950/50 to-slate-900 border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-extrabold text-white">Certification Credential Details</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xl font-bold text-white">{selectedCert.title}</h4>
                <p className="text-sm font-semibold text-emerald-400 mt-0.5">{selectedCert.issuer} • {selectedCert.issueDate}</p>
              </div>

              {selectedCert.credentialId && (
                <div className="bg-slate-950 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Verification Credential ID</span>
                  <span className="font-mono text-cyan-300 font-bold">{selectedCert.credentialId}</span>
                </div>
              )}

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-slate-400">Validated Skills</span>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-lg text-xs bg-slate-950 text-emerald-300 border border-emerald-500/20 font-medium">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCert.pdfPath && (
                <div className="pt-2">
                  <a
                    href={selectedCert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
                  >
                    <FileText className="w-4 h-4" /> Open Official PDF Certificate Artifact
                  </a>
                </div>
              )}
            </div>

            <div className="bg-slate-950 p-4 border-t border-white/10 text-right">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:text-white"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
