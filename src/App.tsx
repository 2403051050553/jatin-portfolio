import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RecruiterViewModal } from './components/RecruiterViewModal';
import { ProjectsSection } from './components/ProjectsSection';
import { AIProjectSimulator } from './components/AIProjectSimulator';
import { JavaDsaSection } from './components/JavaDsaSection';
import { CertificationsSection } from './components/CertificationsSection';
import { GitHubSection } from './components/GitHubSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [recruiterDeckOpen, setRecruiterDeckOpen] = useState(false);

  return (
    <div className={`min-h-screen ${recruiterMode ? 'recruiter-active' : ''}`}>
      
      {/* Sticky Executive Navigation Bar */}
      <Navbar
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
        onOpenResume={() => setResumeOpen(true)}
        onOpenRecruiterDeck={() => setRecruiterDeckOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="space-y-4">
        
        {/* Hero Section with Blazer Photo & Profile Info */}
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onOpenRecruiterDeck={() => setRecruiterDeckOpen(true)}
        />

        {/* Featured Engineering Projects & Architecture Case Studies */}
        <ProjectsSection />

        {/* Interactive AI Interview Platform Simulator */}
        <AIProjectSimulator />

        {/* Java Core, DSA & Code Playground */}
        <JavaDsaSection />

        {/* Verified Certifications Gallery */}
        <CertificationsSection />

        {/* GitHub Contribution Heatmap & Repositories */}
        <GitHubSection />

        {/* Education & Academic Profile */}
        <EducationSection />

        {/* Contact & Recruiter Connect */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <RecruiterViewModal
        isOpen={recruiterDeckOpen}
        onClose={() => setRecruiterDeckOpen(false)}
        onOpenResume={() => {
          setRecruiterDeckOpen(false);
          setResumeOpen(true);
        }}
      />

    </div>
  );
}

export default App;
