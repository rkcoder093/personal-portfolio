# Ritik Kumar Keshri Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion featuring a stunning dark mode with animated stars background.

Live Website: [https://](https:///)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Using This Template](#using-this-template)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## Overview

This portfolio website showcases my projects, experience, and skills with a focus on modern web development and innovative UI/UX. The site features smooth animations, a unique dark mode experience with Three.js stars animation, and a responsive design that works across all devices.

## Features

- **Modern UI/UX**: Clean, minimal design with custom animations
- **Responsive**: Fully responsive across mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with a beautiful starry background in dark mode
- **Command Palette (⌘K)**: Keyboard-driven navigation inspired by power user tools
- **Interactive Components**:
  - Floating glassmorphic navbar
  - Animated project cards
  - Timeline-based experience section
  - Achievement showcase
  - Testimonials/recommendations
- **Performance Optimized**: Fast load times and smooth animations
- **Accessibility**: ARIA-compliant components and keyboard navigation
- **SEO Friendly**: Proper metadata and semantic HTML

## Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: 
  - Framer Motion
  - Three.js (for starry background)
- **UI Components**: shadcn/ui
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Fonts**: Inter (variable) and custom fonts

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                       # Next.js app directory
│   ├── (routes)/              # Page routes
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── experience/
│   │   └── projects/
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/                # React components
│   ├── home/                  # Homepage components
│   ├── layout/                # Layout components (navbar, footer)
│   ├── projects/              # Project related components
│   ├── shared/                # Shared components
│   ├── ui/                    # UI components (shadcn)
│   ├── 3d-card.tsx           # 3D hover effect card
│   ├── black-hole-video.tsx   # Black hole video component
│   └── star-background.tsx    # Star background component
├── data/                      # Static data files
│   ├── projects.ts            # Projects data
│   ├── experience.ts          # Experience data
│   ├── skills.ts              # Skills data
│   └── social.ts              # Social links data
├── lib/                       # Utility functions
│   └── utils.ts               # Helper functions
├── public/                    # Static assets
│   ├── fonts/                 # Custom fonts
│   ├── images/                # Images
│   └── blackhole.webm         # Black hole video for dark mode
└── package.json               # Project dependencies
```

## Customization

### Personal Information

Edit the following files to update with your information:

- `data/projects.ts`: Add your projects
- `data/experience.ts`: Add your work and research experience
- `data/skills.ts`: Update your technical skills
<!-- Rewritten README: developer-focused, content-first -->

# Personal Portfolio — Source

This repository contains the source code for a personal portfolio website built with Next.js, TypeScript and Tailwind CSS. The site is content-driven: all resume/project/skill text is stored in `data/` files so you can update content independently from the UI.

---

## Summary

- Framework: Next.js (App Router)
- Languages: TypeScript, React
- Styling: Tailwind CSS v4
- Animations: Framer Motion; optional 3D scenes via React Three Fiber
- Data-driven: content lives in `data/` (projects, experience, skills, social)

## Quick start (Windows — cmd.exe)

Install deps:

```cmd
npm install
```

Run dev server:

```cmd
npm run dev
```

Build and preview production:

```cmd
npm run build
npm run start
```

Lint:

```cmd
npm run lint
```

Open http://localhost:3000 after `npm run dev`.

## Where to edit resume & content

Edit the following files to change textual content and data shown on the site:

- `data/projects.ts` — list of projects and per-project details
- `data/experience.ts` — work / research / leadership timeline entries
- `data/skills.ts` — categorized skills showcased on the site
- `data/social.ts` — contact & social links

Also replace assets in `public/` (profile image, project images, `resume.pdf`) as needed.

Important: keep the same object shapes when editing the `data/*.ts` files. These files export typed arrays the UI expects.

## Project layout (short)

- `app/` — Next.js App Router pages & layouts
- `components/` — UI components grouped by feature
- `data/` — content that drives the site
- `lib/` — helpers
- `public/` — images, fonts, resume.pdf

## Best practices for content updates

1. Branch: `git checkout -b content/update-resume`
2. Update files under `data/` and assets in `public/` only.
3. Run `npm run dev` and verify pages where content appears.
4. Commit & open a PR for review.

## Deploying

Preferred host: Vercel — connect the repository and deploy; Vercel will detect this is a Next.js project.

Other hosts: follow the Next.js deployment docs.

## Contributing

Contributions welcomed. If proposing UI or structural changes, include a short demo or screenshots in your PR and run the dev server to verify visuals.

## Next steps I can do for you

- Update `data/experience.ts`, `data/education.ts`, `data/skills.ts`, and `data/projects.ts` with your resume (I can re-apply the resume edits you wanted), or
- Add a `CONTENT_GUIDE.md` that documents data shapes and gives editing examples.

Tell me which you'd like and I will proceed.

---

© 2025 — Personal Portfolio Source
