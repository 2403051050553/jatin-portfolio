import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';

const projects = [
  {
    number: '01',
    name: 'Student Grade Management API',
    description:
      'A Java 17 and Spring Boot REST API for managing students and grades, with request validation, JWT login, and MySQL persistence.',
    stack: ['Java 17', 'Spring Boot', 'MySQL', 'Maven'],
    href: 'https://github.com/2403051050553/student-grade-management',
    accent: 'cyan',
  },
  {
    number: '02',
    name: 'Java DSA Practice',
    description:
      'A tested set of Java implementations for data-structure and algorithm patterns. Practice examples are clearly distinguished from publicly verifiable submissions.',
    stack: ['Java 17', 'Algorithms', 'JUnit', 'Maven'],
    href: 'https://github.com/2403051050553/LeetCode-Solutions',
    accent: 'violet',
  },
  {
    number: '03',
    name: 'YouTube-Inspired Video Homepage',
    description:
      'A static HTML and CSS layout exercise with a video grid, search area, sidebar, and original illustrative SVG artwork. Search and video hosting are not implemented.',
    stack: ['HTML', 'CSS', 'Responsive UI'],
    href: 'https://github.com/2403051050553/Youtube-Clone',
    accent: 'emerald',
  },
];

const skillGroups = [
  {
    icon: Braces,
    title: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: Code2,
    title: 'Web & backend',
    items: ['React', 'Spring Boot', 'Node.js', 'REST APIs', 'Vite'],
  },
  {
    icon: Database,
    title: 'Data & tools',
    items: ['MySQL', 'MongoDB', 'Git', 'GitHub Actions', 'Maven', 'Postman'],
  },
];

const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/2403051050553',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jatin-tehalram-ahuja-0386b5390/',
  },
  {
    label: 'Email',
    href: 'mailto:2403051050553@paruluniversity.ac.in',
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#080b12]/85 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <a
            href="#home"
            className="flex items-center gap-3 font-semibold tracking-tight text-white"
          >
            <span className="flex size-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] font-mono text-sm text-cyan-200">
              JA
            </span>
            <span>Jatin Ahuja</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-400 sm:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="https://github.com/2403051050553"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            <GithubIcon className="size-4" />
            GitHub
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative isolate scroll-mt-24 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-28"
        >
          <div className="pointer-events-none absolute -left-40 top-0 -z-10 size-[420px] rounded-full bg-cyan-500/[0.08] blur-[110px]" />
          <div className="pointer-events-none absolute -right-32 top-20 -z-10 size-[400px] rounded-full bg-violet-500/[0.09] blur-[110px]" />

          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-100">
                <span className="size-1.5 rounded-full bg-cyan-300" />
                Computer Science Engineering Student
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Hi, I&apos;m Jatin
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                  I build software
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                I&apos;m studying Computer Science Engineering at Parul
                University, where I&apos;m building practical projects and
                strengthening my foundations in Java, backend development,
                full-stack web development, and problem solving.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={16} className="text-cyan-200" aria-hidden="true" />
                  Parul University
                </span>
                <span aria-hidden="true" className="text-slate-700">/</span>
                <span>Expected graduation: 2028</span>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  Explore my work
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a
                  href="mailto:2403051050553@paruluniversity.ac.in"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <Mail size={16} aria-hidden="true" />
                  Get in touch
                </a>
              </div>
            </div>

            <aside
              aria-label="Profile summary"
              className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1320]/90 p-5 shadow-[0_28px_100px_-50px_rgba(56,189,248,0.4)] sm:p-6"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                <img
                  src="https://github.com/2403051050553.png"
                  alt="Jatin Tehalram Ahuja"
                  className="size-14 rounded-xl border border-white/10 object-cover"
                  width="56"
                  height="56"
                />
                <div>
                  <p className="font-semibold text-white">Jatin Tehalram Ahuja</p>
                  <p className="mt-1 text-xs text-slate-400">Student developer · India</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-slate-500">
                <Terminal size={14} className="text-cyan-200" aria-hidden="true" />
                <span>profile.summary</span>
              </div>
              <div className="mt-3 rounded-xl border border-white/[0.06] bg-[#080b12] p-4 font-mono text-xs leading-6 sm:text-sm">
                <p><span className="text-violet-300">const</span> <span className="text-cyan-200">student</span> = {'{'}</p>
                <p className="pl-4 text-slate-300">university: <span className="text-emerald-200">&quot;Parul University&quot;</span>,</p>
                <p className="pl-4 text-slate-300">degree: <span className="text-emerald-200">&quot;Computer Science Engineering&quot;</span>,</p>
                <p className="pl-4 text-slate-300">graduation: <span className="text-amber-200">2028</span>,</p>
                <p className="pl-4 text-slate-300">interests: [<span className="text-emerald-200">&quot;Java&quot;</span>, <span className="text-emerald-200">&quot;Web&quot;</span>, <span className="text-emerald-200">&quot;DSA&quot;</span>]</p>
                <p>{'}'};</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'React', 'TypeScript'].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-y border-white/[0.06] bg-white/[0.015] px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">Selected work</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projects I&apos;ve built</h2>
              </div>
              <a
                href="https://github.com/2403051050553?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-100"
              >
                Browse all repositories <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex min-h-[270px] flex-col rounded-2xl border border-white/[0.08] bg-[#0b101a]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-[#0e1623]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs ${project.accent === 'cyan' ? 'text-cyan-200' : project.accent === 'violet' ? 'text-violet-200' : 'text-emerald-200'}`}>
                      /{project.number}
                    </span>
                    <Code2 size={17} className="text-slate-500 transition group-hover:text-cyan-200" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-snug text-white">{project.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md bg-white/[0.045] px-2 py-1 text-[10px] text-slate-300">{item}</span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-100"
                  >
                    View repository <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-200">Tools I work with</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Learning by building</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                A snapshot of the languages and technologies I&apos;ve used in my projects and practice.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map(({ icon: Icon, title, items }) => (
                <div key={title} className="rounded-2xl border border-white/[0.08] bg-[#0b101a]/80 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-cyan-200/10 bg-cyan-200/[0.06] text-cyan-100">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-white">{title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 px-5 pb-20 sm:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-cyan-300/[0.09] to-violet-400/[0.06] p-7">
              <GraduationCap size={22} className="text-cyan-100" aria-hidden="true" />
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-slate-400">Education</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-white">Parul University</h2>
              <p className="mt-2 text-sm text-slate-300">Computer Science Engineering</p>
              <p className="mt-5 inline-flex rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-cyan-100">
                Expected graduation · 2028
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0b101a]/80 p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-200">A little about me</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Curious, practical, and always learning.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                I&apos;m an undergraduate Computer Science Engineering student at
                Parul University. I enjoy turning ideas into working projects,
                learning how software systems fit together, and improving my
                fundamentals through hands-on coding and DSA practice. I aim to
                keep my work understandable, useful, and honest about what it
                does.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
                {['Java backend', 'Full-stack development', 'Problem solving', 'Testing & documentation'].map((item) => (
                  <span key={item} className="rounded-md border border-white/[0.08] px-2.5 py-1.5">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-white/[0.06] bg-[#090d16]/70 px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">Get in touch</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Let&apos;s connect.</h2>
              <p className="mt-3 text-sm text-slate-400">Find my work, connect professionally, or send me a message.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {contacts.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-200/30 hover:text-cyan-100"
                >
                  {label === 'GitHub' ? (
                    <GithubIcon className="size-4" />
                  ) : label === 'LinkedIn' ? (
                    <LinkedinIcon className="size-4" />
                  ) : (
                    <Mail size={16} aria-hidden="true" />
                  )}
                  {label}
                  {label !== 'Email' && <ArrowUpRight size={13} aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-6xl border-t border-white/[0.06] pt-5 text-xs text-slate-500">
            <p>Jatin Tehalram Ahuja · Built with React and TypeScript.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
