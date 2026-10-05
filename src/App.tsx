import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  Database,
  ExternalLink,
  GitCommitHorizontal,
  GraduationCap,
  Mail,
  MapPin,
  Star,
  Terminal,
  Users,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';

const projects = [
  {
    number: '01',
    name: 'Youtube-Clone',
    description: 'Video-browsing homepage layout built with HTML and CSS, with original local SVG assets.',
    stack: ['HTML', 'CSS'],
    href: 'https://github.com/2403051050553/Youtube-Clone',
    accent: 'cyan',
  },
  {
    number: '02',
    name: 'NETFLIX-CLONE',
    description: 'Static streaming-service landing page concept built with HTML and CSS.',
    stack: ['HTML', 'CSS'],
    href: 'https://github.com/2403051050553/NETFLIX-CLONE',
    accent: 'violet',
  },
  {
    number: '03',
    name: 'jatin-portfolio',
    description: 'Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.',
    stack: ['TypeScript', 'React', 'Vite'],
    href: 'https://github.com/2403051050553/jatin-portfolio',
    accent: 'emerald',
  },
  {
    number: '04',
    name: 'LeetCode-Solutions',
    description: 'Java algorithm practice with unit-tested array, string, and binary-search implementations.',
    stack: ['Java', 'Algorithms', 'JUnit'],
    href: 'https://github.com/2403051050553/LeetCode-Solutions',
    accent: 'violet',
  },
  {
    number: '05',
    name: 'SPOTIFY-CLONE',
    description: 'Static Spotify-inspired music landing page concept built with HTML and CSS.',
    stack: ['HTML', 'CSS'],
    href: 'https://github.com/2403051050553/SPOTIFY-CLONE',
    accent: 'cyan',
  },
  {
    number: '06',
    name: 'student-grade-management',
    description: 'Java 17 Spring Boot REST API for managing students and grades with JWT authentication and MySQL.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    href: 'https://github.com/2403051050553/student-grade-management',
    accent: 'emerald',
  },
];

const skillGroups = [
  {
    icon: Braces,
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    icon: Terminal,
    title: 'Backend',
    items: ['Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Database',
    items: ['MySQL', 'MongoDB', 'SQL'],
  },
  {
    icon: Terminal,
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Maven', 'Postman'],
  },
];

const contacts = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jatin-tehalram-ahuja-0386b5390/' },
  { label: 'Email', href: 'mailto:2403051050553@paruluniversity.ac.in' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/2403051050553/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@JATINTEHALRAMAHUJA' },
  { label: 'Portfolio', href: 'https://jatin-portfolio-eight-psi.vercel.app' },
];

const contributionLevels: Record<string, number> = {
  '2025-11-01': 1,
  '2025-11-04': 2,
  '2025-11-07': 1,
  '2025-11-12': 1,
  '2025-11-14': 1,
  '2025-11-26': 1,
  '2025-12-03': 1,
  '2025-12-05': 1,
  '2025-12-12': 1,
  '2025-12-13': 1,
  '2025-12-21': 1,
  '2025-12-24': 1,
  '2025-12-28': 1,
  '2026-02-07': 1,
  '2026-03-03': 1,
  '2026-05-27': 2,
  '2026-05-28': 3,
  '2026-05-29': 1,
  '2026-05-30': 4,
  '2026-05-31': 2,
  '2026-06-02': 2,
  '2026-06-04': 1,
  '2026-06-06': 1,
  '2026-08-10': 4,
  '2026-09-24': 4,
  '2026-10-01': 3,
  '2026-10-02': 1,
  '2026-10-03': 1,
  '2026-10-04': 4,
};

const contributionWeeks = Array.from({ length: 53 }, (_, weekIndex) =>
  Array.from({ length: 7 }, (_, dayIndex) => {
    const date = new Date(Date.UTC(2025, 9, 5 + weekIndex * 7 + dayIndex));
    const dateKey = date.toISOString().slice(0, 10);
    return dateKey <= '2026-10-05'
      ? { dateKey, level: contributionLevels[dateKey] ?? 0 }
      : null;
  }),
);

function App() {
  return (
    <div className="min-h-screen bg-[#080b10] text-slate-200">
      <header className="sticky top-0 z-30 border-b border-white/[0.09] bg-[#0b0f15]/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-9 max-w-[1440px] items-center gap-4 px-3 sm:px-4"
        >
          <a href="#home" aria-label="Jatin Ahuja home" className="shrink-0 text-white">
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://github.com/search"
            target="_blank"
            rel="noreferrer"
            className="hidden h-7 min-w-40 items-center justify-between rounded-md border border-white/10 bg-[#080b10] px-2 text-[10px] text-slate-500 sm:flex"
          >
            <span>Search or jump to...</span>
            <span className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px]">/</span>
          </a>
          <div className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto whitespace-nowrap text-[10px] font-medium text-slate-300 sm:gap-4">
            <a className="transition hover:text-white" href="https://github.com/pulls">Pull requests</a>
            <a className="transition hover:text-white" href="https://github.com/issues">Issues</a>
            <a className="transition hover:text-white" href="https://github.com/codespaces">Codespaces</a>
            <a className="transition hover:text-white" href="https://github.com/marketplace">Marketplace</a>
            <a className="transition hover:text-white" href="https://github.com/explore">Explore</a>
          </div>
          <a
            href="https://github.com/2403051050553"
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-1.5 text-[10px] text-slate-300 transition hover:text-white"
          >
            <span className="hidden sm:inline">Open GitHub</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <div className="portfolio-layout mx-auto grid max-w-[1440px] gap-4 px-3 py-4 sm:px-2 md:grid-cols-[148px_minmax(0,1fr)_96px] md:gap-2 md:py-0 lg:grid-cols-[205px_minmax(0,1fr)_145px] lg:gap-5 lg:px-8">
        <aside className="space-y-4 md:sticky md:top-[48px] md:self-start md:pt-3">
          <div>
            <div className="relative mx-auto w-fit lg:mx-0">
              <img
                src="https://github.com/2403051050553.png"
                alt="Jatin Tehalram Ahuja"
                width="240"
                height="240"
                className="size-[128px] rounded-full border border-white/10 object-cover shadow-xl lg:size-[190px]"
              />
              <a
                href="https://github.com/2403051050553"
                aria-label="Open Jatin's GitHub profile"
                className="absolute bottom-2 right-1 flex size-8 items-center justify-center rounded-full border border-white/10 bg-[#161b22] text-slate-300 transition hover:text-white"
              >
                <Code2 size={15} aria-hidden="true" />
              </a>
            </div>
            <h1 className="mt-3 text-center text-base font-semibold tracking-tight text-white lg:text-left lg:text-xl">
              Jatin Tehalram Ahuja
            </h1>
            <p className="text-center text-sm text-slate-400 lg:text-left">JatinAhuja</p>
            <p className="mt-1 text-center text-[10px] text-slate-500 lg:text-left lg:text-xs">2 followers</p>
            <p className="mt-2 text-center text-xs leading-4 text-slate-300 lg:text-left lg:text-sm lg:leading-5">
              B.Tech CSE student at Parul University. Aspiring software engineer building full-stack applications.
            </p>
            <a
              href="mailto:2403051050553@paruluniversity.ac.in"
              className="mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-[#171b22] text-sm font-medium text-slate-200 shadow-sm transition hover:border-white/20 hover:bg-[#202630]"
            >
              <Mail size={15} aria-hidden="true" />
              Contact
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 lg:grid-cols-1 lg:text-xs">
            <p className="flex items-center gap-2">
              <GraduationCap size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
              Parul University
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
              Vadodara, Gujarat, India
            </p>
            <a className="flex items-center gap-2 hover:text-cyan-200" href="https://github.com/2403051050553" target="_blank" rel="noreferrer">
              <GithubIcon className="size-4 shrink-0" />
              github.com/2403051050553
            </a>
            <a className="flex items-center gap-2 hover:text-cyan-200" href="https://www.linkedin.com/in/jatin-tehalram-ahuja-0386b5390/" target="_blank" rel="noreferrer">
              <LinkedinIcon className="size-4 shrink-0" />
              LinkedIn profile
            </a>
          </div>

          <section aria-labelledby="highlights-title" className="rounded-md border-2 border-amber-400/80 bg-[#0d1117] p-3">
            <h2 id="highlights-title" className="flex items-center gap-2 text-xs font-semibold text-white lg:text-sm">
              <Star size={15} className="text-amber-300" aria-hidden="true" />
              Highlights
            </h2>
            <ul className="mt-2 space-y-1.5 text-[10px] leading-4 text-slate-300 lg:text-xs">
              <li>Java & Spring Boot</li>
              <li>Full-stack development</li>
              <li>DSA & problem solving</li>
            </ul>
          </section>

          <section aria-labelledby="community-title" className="rounded-md border-2 border-pink-400/80 bg-[#0d1117] p-3">
            <h2 id="community-title" className="flex items-center gap-2 text-xs font-semibold text-white lg:text-sm">
              <Users size={15} className="text-pink-300" aria-hidden="true" />
              Communities
            </h2>
            <p className="mt-2 text-[10px] leading-4 text-slate-400">Learning and building with:</p>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[9px] font-semibold">
              <span className="rounded border border-orange-400/30 bg-orange-400/10 px-1.5 py-1 text-orange-200">Java</span>
              <span className="rounded border border-cyan-400/30 bg-cyan-400/10 px-1.5 py-1 text-cyan-200">Web</span>
              <span className="rounded border border-violet-400/30 bg-violet-400/10 px-1.5 py-1 text-violet-200">Open source</span>
            </div>
          </section>
        </aside>

        <main id="home" className="min-w-0 space-y-3 md:space-y-1">
          <nav aria-label="Profile sections" className="flex overflow-x-auto border-b border-white/10 text-[10px]">
            <a href="#home" className="flex shrink-0 items-center gap-1 border-b-2 border-orange-400 px-2 py-1.5 font-medium text-white">
              <BookOpen size={15} aria-hidden="true" /> Overview
            </a>
            <a href="#work" className="flex shrink-0 items-center gap-1 px-2 py-1.5 text-slate-400 transition hover:text-white">
              <Code2 size={13} aria-hidden="true" /> Repositories <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[9px]">29</span>
            </a>
            <a href="#skills" className="flex shrink-0 items-center gap-1 px-2 py-1.5 text-slate-400 transition hover:text-white">
              <Braces size={13} aria-hidden="true" /> Projects
            </a>
            <a href="#work" className="flex shrink-0 items-center gap-1 px-2 py-1.5 text-slate-400 transition hover:text-white">
              <Database size={13} aria-hidden="true" /> Packages
            </a>
            <a href="#activity" className="flex shrink-0 items-center gap-1 px-2 py-1.5 text-slate-400 transition hover:text-white">
              <Star size={13} aria-hidden="true" /> Stars
            </a>
          </nav>

          <section aria-labelledby="readme-title" className="relative overflow-hidden rounded-lg border-2 border-emerald-400/90 bg-[#0d1117] p-2.5 shadow-[0_0_30px_-22px_rgba(52,211,153,0.7)] sm:p-3">
            <div className="mb-2 flex items-center gap-2 border-b border-white/[0.08] pb-1 text-[9px] text-slate-400">
              <BookOpen size={14} aria-hidden="true" />
              <span>JatinAhuja</span><span>/</span><span className="text-slate-300">README.md</span>
            </div>
            <div className="grid items-center gap-2 md:grid-cols-[1.4fr_0.6fr]">
            <div>
            <h2 id="readme-title" className="text-base font-semibold leading-tight text-white sm:text-lg md:whitespace-nowrap md:text-[17px] lg:text-xl">
              Hi <span aria-hidden="true">👋</span>, I&apos;m <span className="text-sky-400">Jatin Tehalram Ahuja</span>
            </h2>
            <p className="mt-1 text-[10px] font-medium leading-4 text-slate-200 sm:text-xs">
              B.Tech CSE Student at Parul University
            </p>
            <p className="mt-1.5 text-[10px] leading-4 text-slate-400 sm:text-xs">
              Building useful Java APIs and web projects; learning full-stack development and DSA.
            </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/2403051050553/2403051050553/main/profile-banner.svg"
              alt="Jatin's developer profile banner"
              className="hidden max-h-24 w-full rounded-md object-contain md:block"
            />
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {contacts.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                  className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#161b22] px-1.5 py-0.5 text-[9px] text-slate-200 transition hover:border-sky-300/40 hover:text-sky-200"
                >
                  {label === 'LinkedIn' ? (
                    <LinkedinIcon className="size-2.5" />
                  ) : label === 'Email' ? (
                    <Mail size={10} aria-hidden="true" />
                  ) : (
                    <ExternalLink size={10} aria-hidden="true" />
                  )}
                  {label}
                  {label !== 'Email' && <ArrowUpRight size={9} aria-hidden="true" />}
                </a>
              ))}
              <a href="https://github.com/2403051050553" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#161b22] px-1.5 py-0.5 text-[9px] text-slate-200 transition hover:border-sky-300/40 hover:text-sky-200">
                <GithubIcon className="size-2.5" /> GitHub <ArrowUpRight size={9} aria-hidden="true" />
              </a>
            </div>
          </section>

          <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 rounded-lg border-2 border-amber-400/90 bg-[#0d1117] p-3">
            <div className="flex items-center gap-2">
              <Terminal size={17} className="text-amber-300" aria-hidden="true" />
              <h2 id="skills-title" className="text-lg font-semibold text-white">Tech Stack</h2>
            </div>
            <div className="mt-1 divide-y divide-white/[0.07]">
              {skillGroups.map(({ icon: Icon, title, items }) => (
                <div key={title} className="grid gap-1 py-0.5 first:pt-0 last:pb-0 sm:grid-cols-[110px_1fr] sm:items-start lg:grid-cols-[140px_1fr]">
                  <h3 className="flex items-center gap-1.5 text-[9px] font-medium text-slate-400 sm:pt-0.5">
                    <Icon size={14} aria-hidden="true" /> {title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {items.map((item) => (
                      <span key={item} className="rounded-md border border-white/[0.08] bg-[#161b22] px-1.5 py-0 text-[8px] text-slate-300">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="stats" aria-labelledby="stats-title" className="scroll-mt-20 rounded-lg border-2 border-violet-400/90 bg-[#0d1117] p-3">
            <div className="mb-1 flex items-center gap-2">
              <GitCommitHorizontal size={17} className="text-violet-300" aria-hidden="true" />
              <h2 id="stats-title" className="text-base font-semibold text-white">GitHub Stats</h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="rounded-md border border-white/[0.08] bg-[#101720] p-1.5">
                <p className="text-[9px] text-slate-400">Contributions</p>
                <p className="mt-0.5 text-lg font-semibold text-white">159</p>
                <p className="text-[8px] text-slate-500">In the last year</p>
              </div>
              <div className="rounded-md border border-white/[0.08] bg-[#101720] p-1.5">
                <p className="text-[9px] text-slate-400">Public repos</p>
                <p className="mt-0.5 text-lg font-semibold text-white">29</p>
                <p className="text-[8px] text-slate-500">Projects & practice</p>
              </div>
              <div className="rounded-md border border-white/[0.08] bg-[#101720] p-1.5">
                <p className="text-[9px] text-slate-400">Followers</p>
                <p className="mt-0.5 text-lg font-semibold text-white">2</p>
                <p className="text-[8px] text-slate-500">On GitHub</p>
              </div>
            </div>
          </section>

          <section id="work" aria-labelledby="work-title" className="scroll-mt-20 rounded-lg border-2 border-sky-400/90 bg-[#0d1117] p-2">
            <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <Star size={17} className="text-sky-300" aria-hidden="true" />
                <h2 id="work-title" className="text-lg font-semibold text-white">Pinned Repositories</h2>
              </div>
              <a href="https://github.com/2403051050553?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[9px] text-slate-400 transition hover:text-sky-200">
                Browse all <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex min-h-0 flex-col rounded-md border border-white/[0.12] bg-[#0b1017] p-1 transition hover:border-sky-300/40 hover:bg-[#101720]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <a href={project.href} target="_blank" rel="noreferrer" className="line-clamp-1 text-[9px] font-semibold leading-3 text-sky-300 hover:underline">
                      {project.name}
                    </a>
                    <span className="shrink-0 rounded-full border border-white/10 px-1 py-0 text-[7px] text-slate-500">Public</span>
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-[8px] leading-[9px] text-slate-400">{project.description}</p>
                  <div className="mt-0.5 flex flex-wrap gap-0.5">
                    {project.stack.slice(0, 3).map((item) => (
                      <span key={item} className={`rounded-full px-1 py-0 text-[7px] ${project.accent === 'cyan' ? 'bg-cyan-300/10 text-cyan-200' : project.accent === 'violet' ? 'bg-violet-300/10 text-violet-200' : 'bg-emerald-300/10 text-emerald-200'}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="activity" aria-labelledby="activity-title" className="scroll-mt-20 rounded-lg border-2 border-pink-400/90 bg-[#0d1117] p-1.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <h2 id="activity-title" className="text-sm font-semibold text-white">159 contributions in the last year</h2>
                <div aria-hidden="true" className="hidden items-center gap-0.5 sm:flex">
                  {['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'].map((color) => (
                    <span key={color} className={`size-[6px] rounded-[2px] ${color}`} />
                  ))}
                </div>
              </div>
              <a href="https://github.com/2403051050553" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[9px] text-slate-400 transition hover:text-pink-200">
                View profile <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-1 overflow-x-auto rounded-md border border-white/[0.08] bg-[#080b10] p-1">
              <div className="min-w-[390px]">
                <div className="mb-1 flex justify-between px-1 text-[9px] text-slate-500">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((month, index) => (
                    <span key={`${month}-${index}`}>{month}</span>
                  ))}
                </div>
                <div
                  role="img"
                  aria-label="GitHub contribution heatmap, showing 159 contributions in the last year"
                  className="grid auto-cols-[4px] grid-flow-col grid-rows-7 gap-[2px]"
                >
                  {contributionWeeks.flatMap((week, weekIndex) =>
                    week.map((day, dayIndex) => day ? (
                      <span
                        key={day.dateKey}
                        title={`${day.dateKey}: contribution level ${day.level}`}
                        className={`size-[4px] rounded-[2px] ${day.level === 0 ? 'bg-[#161b22]' : day.level === 1 ? 'bg-[#0e4429]' : day.level === 2 ? 'bg-[#006d32]' : day.level === 3 ? 'bg-[#26a641]' : 'bg-[#39d353]'}`}
                      />
                    ) : (
                      <span key={`empty-${weekIndex}-${dayIndex}`} className="size-[4px]" aria-hidden="true" />
                    )),
                  )}
                </div>
              </div>
            </div>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-3 px-1 py-3 text-xs text-slate-500">
            <p>Jatin Tehalram Ahuja · Built with React and TypeScript.</p>
            <a href="#home" className="inline-flex items-center gap-1 transition hover:text-white">Back to top <ArrowDown size={12} className="rotate-180" aria-hidden="true" /></a>
          </footer>
        </main>
        <aside aria-label="Portfolio section guide" className="hidden space-y-6 pt-[58px] md:block">
          {[
            { title: 'Profile README', color: 'border-emerald-400 bg-emerald-400 text-emerald-950', notes: ['Introduction', 'Your focus areas', 'Tech stack', 'Links & profile'] },
            { title: 'Tech Stack Section', color: 'border-amber-400 bg-amber-400 text-amber-950', notes: ['Show your skills', 'Use icons & badges', 'Keep it clean'] },
            { title: 'GitHub Stats Section', color: 'border-violet-400 bg-violet-400 text-violet-950', notes: ['Contribution graph', 'Profile stats', 'Languages & tools'] },
            { title: 'Pinned Repositories', color: 'border-sky-400 bg-sky-400 text-sky-950', notes: ['Show 6 best projects', 'Each with description', 'Tech stack', 'Relevant repositories'] },
            { title: 'Contribution Graph', color: 'border-pink-400 bg-pink-400 text-pink-950', notes: ['Shows your activity', 'Consistent contributions', 'Keep it current'] },
          ].map(({ title, color, notes }) => (
            <section key={title} className="text-[8px] leading-3 text-slate-300 lg:text-[10px] lg:leading-4">
              <h2 className={`mb-1 inline-block whitespace-nowrap rounded-md border px-1.5 py-1 font-semibold ${color}`}>{title}</h2>
              <ul className="space-y-0.5">{notes.map((note) => <li key={note}>• {note}</li>)}</ul>
            </section>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default App;
