# Jatin Portfolio

[![CI](https://github.com/2403051050553/jatin-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/2403051050553/jatin-portfolio/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)](https://vite.dev/)

A personal portfolio built with React and TypeScript to present projects, technical interests, and professional background.

**Live site:** [jatin-ahuja-portfolio.vercel.app](https://jatin-ahuja-portfolio.vercel.app)

## Highlights

- Responsive portfolio layout with project, education, certification, and contact sections
- Live GitHub contribution graph hosted by GitHub, with no hard-coded activity totals
- Resume and recruiter-view experiences
- Contact form integration
- TypeScript build checks and Oxlint

## Tech stack

- React 19 and TypeScript 6
- Vite 8
- Tailwind CSS 4
- Lucide React
- Node.js 22 or newer
- Vercel deployment

## Run locally

### Prerequisites

- Node.js 22 or newer (the repository includes an `.nvmrc`)
- npm

### Install and start

```bash
git clone https://github.com/2403051050553/jatin-portfolio.git
cd jatin-portfolio
npm ci
npm run dev
```

Vite prints the local URL when the development server starts (by default, `http://localhost:5173`).

## Quality checks

```bash
npm run lint
npm run build
```

`npm run build` runs the TypeScript project build before producing the optimized Vite output in `dist/`.

To preview a production build locally:

```bash
npm run preview
```

GitHub Actions runs lint and build checks on pushes and pull requests.

## Repository layout

```text
public/
└── assets/           # Public images and downloadable documents
src/
├── assets/           # Imported application assets
├── components/       # Portfolio sections and UI components
├── data/             # Portfolio content
├── types/            # Shared TypeScript types
├── App.tsx
└── main.tsx
```

## Deployment

The live site is hosted on Vercel. Deployment configuration is maintained by the linked Vercel project; use its configured production branch and environment settings rather than deploying from an unreviewed local checkout.

## License

This project is released under the MIT License.

## Contact

- [GitHub](https://github.com/2403051050553)
- [LinkedIn](https://www.linkedin.com/in/jatin-tehalram-ahuja-0386b5390/)
- [Email](mailto:2403051050553@paruluniversity.ac.in)
