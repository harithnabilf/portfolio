# Personal Portfolio

A minimalist, high-performance personal portfolio website showcasing software projects, achievements, and development work. Hosted live via GitHub Pages.

**Live Website:** [https://harithnabilf.github.io/portfolio/](https://harithnabilf.github.io/portfolio/)

---

## Features

- **Minimalist Dark Theme:** Clean charcoal aesthetic (`#111111`) with restrained monochrome highlights and high-contrast typography.
- **Fast & Dependency-Free:** Built with pure semantic HTML5, custom CSS3 (Flexbox and Grid), and vanilla JavaScript. Zero heavy client-side bundle bloat.
- **Native Scroll Animations:** Smooth viewport fade-ins powered by the browser's native Intersection Observer API.
- **Responsive Layout:** Adaptive styling optimized across mobile, tablet, and desktop screens.
- **Graceful Media Fallbacks:** HTML5 Canvas fallback poster generator for embedded video demonstrations.

---

## Projects Showcased

- **Q-Up:** A real-time web-based virtual queue management system built with React, Node.js, Express, Socket.IO, and MongoDB. Awarded the Silver Medal at Pertandingan Inovasi Antara Asasi Malaysia (PITRAM) 2026.
- **TeleSearch:** An AI-powered property search engine that parses and extracts structured real estate listings from Telegram chat channels using FastAPI, Telethon, and the Google Gemini API.
- **Photron:** A 2-player local multiplayer arcade game built in C++ using the Simple and Fast Multimedia Library (SFML).

---

## Tech Stack

- **Markup & Styling:** HTML5, CSS3, Modern Reset
- **Scripting:** Vanilla JavaScript (ES6+)
- **Typography:** Inter (via Google Fonts)
- **Deployment:** GitHub Pages
- **Development Tooling:** Vite, TypeScript

---

## Project Structure

```text
portfolio/
├── images/              # Achievement certificates and project media
├── videos/              # Demo recordings and field footage
├── index.html           # Main single-page document and embedded styles
├── metadata.json        # Portfolio manifest and metadata
├── package.json         # Local dev scripts and dependencies
├── vite.config.ts       # Vite build configuration
└── README.md            # Project documentation
```

---

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/harithnabilf/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```

4. Build production preview:
   ```bash
   npm run build
   npm run preview
   ```
