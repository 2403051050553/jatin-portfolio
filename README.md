# Jatin Portfolio

[![CI](https://github.com/2403051050553/jatin-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/2403051050553/jatin-portfolio/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)](https://vite.dev/)

A responsive, dark portfolio for **Jatin Tehalram Ahuja**, a Computer Science Engineering student at Parul University with expected graduation in 2028.

**Live site:** [jatin-portfolio-eight-psi.vercel.app](https://jatin-portfolio-eight-psi.vercel.app)

## Highlights

- Recruiter-friendly introduction, education, skills, selected projects, and contact links
- Project details link to their corresponding public repositories
- Responsive layout with keyboard-accessible navigation and reduced visual clutter
- No invented activity totals, rankings, or proficiency scores
- TypeScript build checks and Oxlint

## Featured work

- **Student Grade Management API:** Java 17 and Spring Boot REST API with MySQL persistence
- **Java DSA Practice:** Java implementations of common data-structure and algorithm patterns
- **YouTube-Inspired Video Homepage:** Static HTML and CSS layout exercise; search and video hosting are not implemented

## Tech stack

- React 19 and TypeScript 6
- Vite 8
- Tailwind CSS 4
- Lucide React
- Node.js 22 or newer
- Vercel

## Run locally

### Requirements

- Node.js 22 or newer (see `.nvmrc`)
- npm

```bash
git clone https://github.com/2403051050553/jatin-portfolio.git
cd jatin-portfolio
npm ci
npm run dev
```

Vite prints the local URL (by default, `http://localhost:5173`).

## Quality checks

```bash
npm run lint
npm run build
```

`npm run build` runs the TypeScript project build before creating the optimized production output in `dist/`.

## Deployment

The site is hosted on Vercel. When the linked GitHub repository's configured production branch receives a change, Vercel builds and publishes the site using that project's deployment settings.

## Contact

- [GitHub](https://github.com/2403051050553)
- [LinkedIn](https://www.linkedin.com/in/jatin-tehalram-ahuja-0386b5390/)
- [Email](mailto:2403051050553@paruluniversity.ac.in)
