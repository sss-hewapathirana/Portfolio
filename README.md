<div align="center">

# 🌐 Suvindu Hewapathirana — Personal Portfolio

**BSc Computer Science Undergraduate | IIT / University of Westminster**

[![Live Portfolio](https://img.shields.io/badge/🚀_Live_Portfolio-Visit_Site-6366f1?style=for-the-badge&logoColor=white)](https://sss-hewapathirana.github.io/Personal-Portfolio)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## 👨‍💻 About This Portfolio

A **premium, fully responsive personal portfolio website** built from scratch for Suvindu Supun Sri Hewapathirana — a Software Engineering undergraduate at the Informatics Institute of Technology (IIT), affiliated with the University of Westminster, UK.

Designed to wow recruiters at first glance with:
- 🌑 **Dark glassmorphism** UI with animated ambient orbs
- ⌨️ **Live terminal widget** with syntax-highlighted code snippets from real projects
- 🖱️ **Cursor spotlight** radial glow effect in the hero section
- 📜 **Scroll progress bar** and floating back-to-top button
- 🔢 **Count-up stats** animated on first scroll into view
- 🏷️ **Infinite tech marquee** strip with hover-to-pause
- 🗂️ **Project filter tabs** (All / Web / Android / QA)
- 📈 **InVezt mega card** with 9-feature grid and 6-member team roster
- 🕐 **Alternating timeline** showing the full developer journey
- 📬 **Interactive contact form** with success state animation

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| **Fonts** | Inter · Space Grotesk · Fira Code (Google Fonts) |
| **Animations** | CSS keyframes + IntersectionObserver |
| **Language** | JavaScript (JSX) |

---

## 📁 Project Structure

```
personalPortfolio/
├── public/
│   └── favicon.svg              # Custom SSH gradient favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky nav with scroll-aware glass effect
│   │   ├── Hero.jsx              # Typing animation, terminal widget, particle canvas
│   │   ├── About.jsx             # Bio, stats grid, language bars, soft skills
│   │   ├── Timeline.jsx          # Alternating journey timeline (7 milestones)
│   │   ├── TechMarquee.jsx       # Infinite scrolling tech stack strip
│   │   ├── Skills.jsx            # Proficiency bars + 8-category skill cards
│   │   ├── WhatIBring.jsx        # Builder / Tester / Collaborator value cards
│   │   ├── Projects.jsx          # InVezt mega card + 4 accordion project cards
│   │   ├── Education.jsx         # Degree card, coursework, SDGP highlight
│   │   ├── Contact.jsx           # Contact form with links and availability badge
│   │   ├── Footer.jsx            # Logo, nav, socials, attribution
│   │   └── UiExtras.jsx          # ScrollProgress bar + BackToTop button
│   ├── App.jsx                   # Root layout with all sections
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind v4 import + @theme tokens + keyframes
├── index.html                    # SEO meta tags, OG, Twitter Card
├── vite.config.js                # Vite + React + Tailwind v4 plugins
└── package.json
```

---

## 🚀 Featured Projects

### 📈 InVezt — SDGP Capstone (Team of 6)
Full-stack CSE stock analysis & portfolio management platform — University of Westminster SDGP module.
- **Role:** Frontend Developer  
- **Stack:** React (Vite), JavaScript, Node.js, Express.js, MongoDB, JWT, Recharts, Tailwind CSS  
- **Repo:** [github.com/Pasandul-pro/invezt-application](https://github.com/Pasandul-pro/invezt-application)

### 📢 AdManager — Advertisement Management System
Full-stack CRUD ad platform with Spring Boot 4 backend, JWT auth, rate limiting & 18 Vercel deployments.
- **Role:** Full-Stack Developer & QA Engineer  
- **Stack:** Java 17, Spring Boot 4, React 19, PostgreSQL, Docker, Postman  
- **Repo:** [github.com/sss-hewapathirana/Advertiser](https://github.com/sss-hewapathirana/Advertiser) · **Live:** [advertiser-six.vercel.app](https://advertiser-six.vercel.app)

### 🌾 AgriConnect — Farm-to-Market Marketplace
Digital marketplace for Sri Lankan farmers & wholesalers. Role-based dashboards + verified reviews.
- **Role:** Frontend Developer  
- **Stack:** React 19, Vite 8, Tailwind CSS 4, TypeScript, Clerk Auth, PostgreSQL, Drizzle ORM  
- **Repo:** [github.com/sss-hewapathirana/Agriconnect-](https://github.com/sss-hewapathirana/Agriconnect-)

### 🧩 CrossMath Puzzle — Native Android Game
Kotlin + Jetpack Compose puzzle game generating randomised 11×11–20×20 arithmetic grids. Uni coursework.
- **Role:** Sole Developer  
- **Stack:** Kotlin, Jetpack Compose, Material 3, JUnit, Espresso  
- **Repo:** [github.com/sss-hewapathirana/CorssMathPuzzle-Anroid-game-](https://github.com/sss-hewapathirana/CorssMathPuzzle-Anroid-game-)

### 🍽️ Meal Recipe App — Android Recipe Browser
TheMealDB REST API integration with Room (SQLite) offline-first persistence.
- **Role:** Sole Developer  
- **Stack:** Kotlin, Jetpack Compose, Room 2.6.1, Kotlin Coroutines  
- **Repo:** [github.com/sss-hewapathirana/meal-recipy-app](https://github.com/sss-hewapathirana/meal-recipy-app)

---

## ⚡ Getting Started (Local Development)

```bash
# 1. Clone the repo
git clone https://github.com/sss-hewapathirana/Personal-Portfolio.git
cd Personal-Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → Opens at http://localhost:5173
```

> **Requirements:** Node.js 18+ and npm 9+

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 📐 Design System

| Token | Value |
|---|---|
| **Primary** | `#6366f1` (Indigo 500) |
| **Accent** | `#a78bfa` (Violet 400) |
| **Glow** | `#22d3ee` (Cyan 400) |
| **Background** | `#04050a` (Near black) |
| **Surface** | `#0d0f1a` |
| **Card** | `#111523` |
| **Text** | `#e2e8f0` (Slate 200) |
| **Muted** | `#64748b` (Slate 500) |

Fonts: **Space Grotesk** (headings) · **Inter** (body) · **Fira Code** (mono/code)

---

## 📬 Contact

| Channel | Details |
|---|---|
| **Email** | [s.s.s.hewapathirana@gmail.com](mailto:s.s.s.hewapathirana@gmail.com) |
| **Phone** | +94 78 486 1489 |
| **LinkedIn** | [linkedin.com/in/suvindu-supun-hewapathirana-1879a4345](https://www.linkedin.com/in/suvindu-supun-hewapathirana-1879a4345/) |
| **GitHub** | [github.com/sss-hewapathirana](https://github.com/sss-hewapathirana) |
| **Location** | Nakiyadeniya, Galle, Sri Lanka |

---

## 📄 Licence

This portfolio is open source under the **MIT Licence** — feel free to use it as a template and give it a ⭐ if it helped!

---

<div align="center">
  <sub>Built with ❤️ using React 19 + Tailwind CSS v4 + Vite 8 &nbsp;·&nbsp; © 2026 Suvindu Supun Sri Hewapathirana</sub>
</div>
