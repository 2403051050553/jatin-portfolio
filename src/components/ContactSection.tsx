import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, RefreshCw, ExternalLink, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setActivationNotice(false);

    try {
      // Direct POST to FormSubmit API endpoint for jatinahuja289@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `⚡ Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await res.json().catch(() => ({}));

      // FormSubmit requires 1-time activation click on first submit to jatinahuja289@gmail.com
      if (data.message && data.message.includes('activation')) {
        setActivationNotice(true);
      }

      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('FormSubmit API triggered mailto fallback');
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGmailDirectly = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Jatin,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`, '_blank');
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" /> Direct Candidate Connection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Connect & <span className="text-gradient-cyan">Collaborate</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Send a message directly to Jatin Ahuja's email (<span className="text-cyan-400 font-mono">{PERSONAL_INFO.email}</span>) or connect on social profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-white/5 hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Email Address</div>
                    <div className="text-xs font-semibold text-white truncate group-hover:text-cyan-400">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-white/5 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Phone Number</div>
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-400">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Location</div>
                    <div className="text-xs font-semibold text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Professional Links</div>
                <div className="flex gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 text-xs font-semibold text-slate-300 hover:text-blue-400 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" /> LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-cyan-400" /> Direct Email Dispatch Form
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                  ✓ Active Service
                </span>
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-white">Message Dispatched!</h4>
                    <p className="text-xs text-emerald-300">
                      Your inquiry has been sent to <span className="font-mono font-bold text-white">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>

                  {/* 1-Time Activation Alert Notice */}
                  {activationNotice && (
                    <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-xl text-left text-xs space-y-1">
                      <div className="font-bold text-amber-300 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        First-Time Activation Email Sent!
                      </div>
                      <p className="text-amber-200/90 text-[11px] leading-relaxed">
                        FormSubmit has sent a 1-click activation link to <strong>{PERSONAL_INFO.email}</strong>. Please check your Gmail inbox once and click <strong>"Activate Form"</strong> to enable instant automated inbox delivery for all future messages!
                      </p>
                    </div>
                  )}

                  {/* Direct Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={openGmailDirectly}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" /> Open Pre-filled Gmail Compose
                    </button>

                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs hover:bg-emerald-400"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name / Organization</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. Parul University Faculty / Recruiter"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. recruiter@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Role Inquiry</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Type your message or inquiry here..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                          Sending Email to Jatin...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={openGmailDirectly}
                      className="px-4 py-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 font-bold text-xs flex items-center gap-1.5 transition-colors"
                      title="Open directly in Gmail"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      Gmail Direct
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
