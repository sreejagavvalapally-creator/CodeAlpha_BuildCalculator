# Sreeja Gavvalapally - Frontend Developer Portfolio

A modern, responsive personal portfolio website for Sreeja Gavvalapally, a B.Tech Artificial Intelligence student and passionate Frontend Developer from Hyderabad, India. The site showcases her skills, projects, resume, and contact information in a polished, dark-themed UI built for a frontend development internship project.

## Technologies Used

- **React 18** — component-based UI architecture
- **TypeScript** — type-safe development
- **Vite** — fast build tool and dev server
- **Tailwind CSS 3** — utility-first styling with a custom dark theme
- **Lucide React** — icon library
- **HTML5 & CSS3** — semantic markup and modern styling
- **JavaScript (ES2020+)** — interactivity and animations

## Features

- **Dark theme** with a professional blue, cyan, and purple accent palette
- **Glassmorphism** cards and navbar with backdrop blur
- **Sticky navbar** with active-section indicator, smooth scrolling, and a mobile hamburger menu
- **Hero section** with animated typing effect, "Available for opportunities" badge, and a stylized code-window illustration
- **Scroll reveal animations** powered by IntersectionObserver
- **Scroll progress indicator** at the top of the page
- **Back-to-top button** that appears on scroll
- **Hover effects** on buttons, skill cards, and project cards
- **Responsive design** optimized for mobile, tablet, laptop, and desktop screens
- **Accessible** with semantic HTML, ARIA labels, and reduced-motion support
- **SEO-friendly** with a descriptive title and meta description
- **Custom favicon** with a gradient code motif
- **Contact form** with front-end validation and a success message (no backend)

## Projects Included

The portfolio showcases three frontend projects:

1. **Image Gallery** — A responsive image gallery with navigation, hover effects, and lightbox functionality. (HTML, CSS, JavaScript)
2. **JavaScript Calculator** — A responsive calculator supporting basic arithmetic operations with a clean, user-friendly interface. (HTML, CSS, JavaScript)
3. **Music Player** — A modern music player interface with playback controls, progress bar, and volume control. (HTML, CSS, JavaScript)

Each project card includes a thumbnail, description, technology tags, a Live Demo button, and a GitHub button (using placeholder links).

## How to Run the Project Locally

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at the local URL shown in the terminal (typically `http://localhost:5173`).

3. **Build for production**

   ```bash
   npm run build
   ```

   This creates an optimized build in the `dist/` folder.

4. **Preview the production build**

   ```bash
   npm run preview
   ```

5. **Type checking**

   ```bash
   npm run typecheck
   ```

6. **Linting**

   ```bash
   npm run lint
   ```

## Project Structure

```
project/
├── public/
│   └── favicon.svg              # Custom gradient code favicon
├── src/
│   ├── components/
│   │   ├── About.tsx            # About section
│   │   ├── BackToTop.tsx        # Back-to-top button
│   │   ├── Contact.tsx          # Contact info + form
│   │   ├── Footer.tsx           # Footer with links and copyright
│   │   ├── Hero.tsx             # Hero / home section
│   │   ├── Navbar.tsx           # Sticky glass navbar + mobile menu
│   │   ├── Projects.tsx         # Project showcase cards
│   │   ├── Resume.tsx           # Resume timeline + download
│   │   ├── ScrollProgress.tsx   # Top scroll progress bar
│   │   └── Skills.tsx           # Skill cards grid
│   ├── data/
│   │   └── portfolio.ts         # Central data file (personal info, skills, projects)
│   ├── hooks/
│   │   ├── useActiveSection.ts  # Tracks active nav section
│   │   └── useReveal.ts         # Scroll reveal animation hook
│   ├── App.tsx                  # Root component assembling all sections
│   ├── index.css               # Tailwind layers + custom styles and animations
│   ├── main.tsx                # React entry point
│   └── vite-env.d.ts           # Vite type declarations
├── index.html                  # HTML shell with SEO meta and fonts
├── tailwind.config.js          # Tailwind theme (colors, fonts, animations)
├── postcss.config.js           # PostCSS config
├── vite.config.ts              # Vite config with @ path alias
├── tsconfig.json               # TypeScript config
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.node.json          # Node TypeScript config
├── eslint.config.js            # ESLint config
└── package.json                # Project dependencies and scripts
```

## Contact Information

- **Name:** Sreeja Gavvalapally
- **Role:** Frontend Developer
- **Education:** B.Tech in Artificial Intelligence
- **Location:** Hyderabad, India
- **Email:** example@gmail.com
- **Phone:** +91 9000000000
- **GitHub:** [https://github.com/](https://github.com/) (placeholder)
- **LinkedIn:** [https://www.linkedin.com/](https://www.linkedin.com/) (placeholder)

## Internship Project Information

This portfolio website was created as a **Frontend Development Internship Project**. It demonstrates practical skills in building a modern, responsive, and accessible web application using React, TypeScript, and Tailwind CSS. The project is suitable for recruiter demonstration and showcases the two key points:

1. Sreeja Gavvalapally is a B.Tech Artificial Intelligence student.
2. Sreeja Gavvalapally is a Frontend Developer.

The website is built with clean, maintainable, beginner-friendly code and follows good accessibility and SEO practices. All placeholder links (GitHub, LinkedIn, Live Demo, and resume PDF) can be replaced with actual URLs as they become available.

---

&copy; 2026 Sreeja Gavvalapally. All rights reserved.
