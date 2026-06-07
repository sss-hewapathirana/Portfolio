import { useState } from 'react'

/* ─── DATA ──────────────────────────────────────────────────────── */

const INVEZT_FEATURES = [
  { icon: '📊', title: 'Interactive Dashboard',   desc: 'Company valuation reports & live market overview' },
  { icon: '📈', title: '10 Financial Ratios',      desc: 'P/E, ROE, ROA, EPS, Debt-to-Equity & star ratings' },
  { icon: '⚖️',  title: 'Company Comparison',      desc: 'Side-by-side analysis of up to 3 companies' },
  { icon: '🧮', title: 'Valuation Models',         desc: 'DCF, CAPM & Gordon Growth calculators' },
  { icon: '💼', title: 'Portfolio Management',     desc: 'Track holdings with real-time profit / loss' },
  { icon: '👁️', title: 'Watchlist',                desc: 'Monitor stocks with price alerts' },
  { icon: '⚡', title: 'Real-time Data',           desc: 'Live CSE data refresh every 60 seconds' },
  { icon: '📰', title: 'Market News',              desc: 'Latest CSE news with category filters' },
  { icon: '🎓', title: 'Learning Module',          desc: 'Educational resources for beginner investors' },
]

const INVEZT_TEAM = [
  { name: 'Suvindu Hewapathirana', role: 'Frontend Developer',  id: '20240294', you: true,  github: 'https://github.com/sss-hewapathirana' },
  { name: 'Omisha Pasandul',       role: 'Backend Developer',   id: '20232456', you: false, github: 'https://github.com/Pasandul-pro' },
  { name: 'Sanuli Jayasinghe',     role: 'Team Member',         id: '20231908', you: false, github: 'https://github.com/sanuli20231908-wq' },
  { name: 'Bashi Peter',           role: 'Team Member',         id: '20231046', you: false, github: 'https://github.com/Bashipeter' },
  { name: 'Wenura Magnus',         role: 'Team Member',         id: '20230331', you: false, github: 'https://github.com/Wenura1' },
  { name: 'Chamath Weerasinghe',   role: 'Team Member',         id: '20230482', you: false, github: 'https://github.com/chamathdevinda' },
]

const PROJECTS = [
  {
    id: 'admanager',
    title: 'AdManager',
    subtitle: 'Full-Stack Advertisement Management System',
    period: '2024 – 2026',
    type: 'Personal Full-Stack Project',
    category: 'web',
    badge: '18 Deployments on Vercel',
    badgeColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    icon: '📢',
    gradient: 'from-cyan-500/12 to-blue-500/6',
    border: 'border-cyan-500/20 hover:border-cyan-400/40',
    glow: 'hover:shadow-cyan-500/12',
    role: 'Full-Stack Developer & QA Engineer',
    github: 'https://github.com/sss-hewapathirana/Advertiser',
    liveUrl: 'https://advertiser-six.vercel.app',
    description: 'Full-stack CRUD advertisement platform with JWT authentication, role-based access control (ROLE_USER / ROLE_ADMIN), rate limiting, and a comprehensive RESTful API — deployed to Vercel with 18 releases.',
    highlights: [
      'Tested all 20+ API endpoints using Postman — validated request schemas, response codes (200/201/401/403/429), pagination & keyword search',
      'Implemented & validated Rate Limiting (100 req/min/IP), soft deletes, and audit fields across iterative release cycles',
      'Backend: Spring Boot 4 (Java 17), Spring Security 7, PostgreSQL (Neon Cloud), Hibernate JPA, Swagger UI',
      'Frontend: React 19, Vite 8, Tailwind CSS v4, Axios with full CRUD dashboard interface',
      'Documented defects, tracked fixes, and performed regression tests before each of 18 Vercel deployments',
    ],
    tech: ['Java 17', 'Spring Boot 4', 'React 19', 'PostgreSQL', 'JWT', 'Docker', 'Postman', 'Swagger UI', 'Tailwind v4'],
    techColors: ['amber','orange','cyan','blue','rose','sky','emerald','green','indigo'],
  },
  {
    id: 'agriconnect',
    title: 'AgriConnect',
    subtitle: 'Farm-to-Market Digital Marketplace',
    period: '2024 – 2026',
    type: 'Collaborative Project',
    category: 'web',
    badge: 'Frontend Developer',
    badgeColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    icon: '🌾',
    gradient: 'from-emerald-500/12 to-green-500/6',
    border: 'border-emerald-500/20 hover:border-emerald-400/40',
    glow: 'hover:shadow-emerald-500/12',
    role: 'Frontend Developer',
    github: 'https://github.com/sss-hewapathirana/Agriconnect-',
    description: 'Premium digital marketplace connecting farmers and wholesalers/retailers across Sri Lanka. Role-based dashboards, smart order lifecycle management, and a verified star-rating review system.',
    highlights: [
      'Built farmer discovery grid, product management dashboard (Bento card layout), and smart search/filter UI',
      'Implemented full order tracking flow: Pending → Accepted/Rejected with real-time status updates',
      'Performed API integration testing against 15+ endpoints (users, products, orders, reviews) using Postman',
      'Used Framer Motion for micro-interactions; Clerk Auth for role-based access (Farmer / Seller)',
      'Validated response payloads, HTTP status codes, and edge cases (empty state, auth failure)',
    ],
    tech: ['React 19', 'Vite 8', 'Tailwind CSS 4', 'TypeScript', 'Clerk Auth', 'Node.js', 'Express 5', 'PostgreSQL', 'Drizzle ORM', 'Zod'],
    techColors: ['cyan','indigo','sky','blue','violet','emerald','emerald','blue','amber','rose'],
  },
  {
    id: 'crossmath',
    title: 'CrossMath Puzzle',
    subtitle: 'Native Android Arithmetic Puzzle Game',
    period: '2024 – 2026',
    type: 'University Coursework — Personal Project',
    category: 'android',
    badge: 'University Coursework',
    badgeColor: 'bg-pink-500/15 border-pink-500/30 text-pink-300',
    icon: '🧩',
    gradient: 'from-pink-500/12 to-rose-500/6',
    border: 'border-pink-500/20 hover:border-pink-400/40',
    glow: 'hover:shadow-pink-500/12',
    role: 'Sole Developer',
    github: 'https://github.com/sss-hewapathirana/CorssMathPuzzle-Anroid-game-',
    description: 'Native Android puzzle game built with Kotlin + Jetpack Compose. Generates randomised arithmetic grids from 11×11 to 20×20 — zero third-party game frameworks. Submitted for University of Westminster coursework (w2153380).',
    highlights: [
      'Normal mode (1 blank/equation) and Advanced mode (2 blanks) with configurable equation count',
      'Countdown timer toggle, real-time scoring, and color-coded feedback (🟢 correct, 🔴 error, 🔵 unsolved)',
      'Rotation-safe: full puzzle state preserved across screen rotations via rememberSaveable',
      'Cross-device manual testing on Android API levels 24–36; exact division operator validation',
      'Unit stubs (JUnit) + instrumented test stubs (Espresso) for equation generation & UI input flows',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Kotlin Coroutines', 'JUnit', 'Espresso', 'Gradle Kotlin DSL'],
    techColors: ['violet','indigo','blue','emerald','amber','orange','slate'],
  },
  {
    id: 'mealapp',
    title: 'Meal Recipe App',
    subtitle: 'Android Recipe Browser with Offline Support',
    period: '2024 – 2026',
    type: 'Personal Android Project',
    category: 'android',
    badge: 'Android',
    badgeColor: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
    icon: '🍽️',
    gradient: 'from-amber-500/12 to-orange-500/6',
    border: 'border-amber-500/20 hover:border-amber-400/40',
    glow: 'hover:shadow-amber-500/12',
    role: 'Sole Developer',
    github: 'https://github.com/sss-hewapathirana/meal-recipy-app',
    description: 'Android recipe browser integrating TheMealDB REST API with full offline-first access via Room (SQLite) persistence. Includes 4 hardcoded preloaded recipes as fallback data.',
    highlights: [
      'Room 2.6.1 (SQLite) local database for offline-first recipe saving & browsing',
      '4 hardcoded preloaded recipes tested against API failure, network unavailable & empty response scenarios',
      'Manual UI testing: navigation flows, API rendering, and Room read/write operations',
      'HttpURLConnection networking without Retrofit — demonstrates raw API integration',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Room 2.6.1', 'Kotlin Coroutines', 'HttpURLConnection', 'Gradle 9.4.1'],
    techColors: ['violet','indigo','cyan','emerald','amber','slate'],
  },
]

const PILL_COLORS = {
  indigo:  'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
  violet:  'bg-violet-500/10 border-violet-500/25 text-violet-300',
  cyan:    'bg-cyan-500/10   border-cyan-500/25   text-cyan-300',
  emerald: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
  amber:   'bg-amber-500/10  border-amber-500/25  text-amber-300',
  orange:  'bg-orange-500/10 border-orange-500/25 text-orange-300',
  blue:    'bg-blue-500/10   border-blue-500/25   text-blue-300',
  rose:    'bg-rose-500/10   border-rose-500/25   text-rose-300',
  pink:    'bg-pink-500/10   border-pink-500/25   text-pink-300',
  sky:     'bg-sky-500/10    border-sky-500/25    text-sky-300',
  green:   'bg-green-500/10  border-green-500/25  text-green-300',
  slate:   'bg-slate-500/10  border-slate-500/25  text-slate-300',
}

const TABS = [
  { id: 'all',     label: 'All Projects', icon: '🗂️' },
  { id: 'web',     label: 'Web',          icon: '🌐' },
  { id: 'android', label: 'Android',      icon: '📱' },
  { id: 'qa',      label: 'QA / Testing', icon: '🧪' },
]

/* QA projects = admanager + crossmath (both have significant QA highlights) */
const matchesTab = (proj, tab) => {
  if (tab === 'all') return true
  if (tab === 'qa')  return proj.id === 'admanager' || proj.id === 'crossmath' || proj.id === 'agriconnect'
  return proj.category === tab
}

/* ─── InVezt Mega Card ───────────────────────────────────────────── */
function InveztMegaCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative rounded-3xl overflow-hidden border border-violet-500/25 hover:border-violet-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/15 mb-6">
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />

      {/* Header area */}
      <div className="relative bg-gradient-to-br from-violet-500/12 via-indigo-500/8 to-transparent p-6 md:p-8">
        {/* SDGP crown badge */}
        <div className="absolute top-5 right-5 md:top-6 md:right-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
            bg-yellow-500/15 border border-yellow-500/30 text-yellow-300 text-xs font-mono font-semibold">
            🏆 SDGP Capstone
          </span>
        </div>

        <div className="flex items-start gap-5">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-3xl shadow-xl shadow-violet-500/30 shrink-0">
            📈
          </div>

          <div className="flex-1 min-w-0 pr-24">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-2xl text-slate-100">InVezt</h3>
              <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold
                bg-violet-500/20 border border-violet-400/40 text-violet-300">
                Team of 6
              </span>
              <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold
                bg-indigo-500/20 border border-indigo-400/40 text-indigo-300">
                University of Westminster
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-1">Stock Analysis & Portfolio Management Platform</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-mono">
              <span>📅 2024 – 2026</span>
              <span>👤 Frontend Developer</span>
              <span>🏷️ SDGP Group Project</span>
            </div>
          </div>
        </div>

        {/* GitHub + expand buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-5">
          <a
            href="https://github.com/Pasandul-pro/invezt-application"
            target="_blank" rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 px-4 py-2 rounded-xl
              bg-white/6 border border-white/12 text-slate-300 text-sm font-medium
              hover:bg-indigo-500/12 hover:border-indigo-400/40 hover:text-indigo-300
              hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
              border cursor-pointer bg-transparent transition-all duration-200
              ${open
                ? 'bg-violet-500/15 border-violet-400/40 text-violet-300'
                : 'border-white/12 text-slate-400 hover:bg-violet-500/10 hover:border-violet-400/30 hover:text-violet-300'
              }`}
          >
            <span>{open ? 'Show Less' : 'Full Details'}</span>
            <svg className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {['React (Vite)','JavaScript','Node.js','Express.js','MongoDB','JWT','Recharts','Tailwind CSS'].map((t, i) => (
            <span key={i} className="inline-block px-2 py-0.5 rounded-md text-[11px] font-mono border bg-violet-500/10 border-violet-500/25 text-violet-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Expanded: Features + Team ── */}
      {open && (
        <div className="border-t border-white/6 bg-gradient-to-b from-slate-900/60 to-slate-950/80">
          {/* 9 Features Grid */}
          <div className="p-6 md:p-8">
            <h4 className="font-display font-semibold text-slate-200 text-base mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-violet-500 rounded-full" />
              9 Core Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {INVEZT_FEATURES.map((f, i) => (
                <div key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/3 border border-white/6
                    hover:border-violet-400/25 hover:bg-violet-500/6 transition-all duration-200"
                >
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <p className="text-slate-200 text-sm font-semibold leading-tight mb-0.5">{f.title}</p>
                    <p className="text-slate-500 text-xs leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div className="px-6 md:px-8 pb-6">
            <h4 className="font-display font-semibold text-slate-200 text-base mb-4 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-indigo-500 rounded-full" />
              My Contributions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {[
                'Built interactive stock comparison dashboards (up to 3 companies side-by-side) using React + Recharts',
                'Implemented all 10 financial ratio displays with star-rating overlays and visual score bars',
                'Built DCF, CAPM & Gordon Growth valuation model calculators with input validation',
                'Participated in Agile sprints: test planning, manual test case execution & defect logging',
              ].map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            {/* Team members */}
            <h4 className="font-display font-semibold text-slate-200 text-base mb-4 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-cyan-500 rounded-full" />
              The Team — 6 Members
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {INVEZT_TEAM.map((m, i) => (
                <a
                  key={i}
                  href={m.github}
                  target="_blank" rel="noopener noreferrer"
                  className={`no-underline flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200
                    hover:-translate-y-0.5 group
                    ${m.you
                      ? 'bg-indigo-500/12 border-indigo-500/30 hover:border-indigo-400/50'
                      : 'bg-white/3 border-white/8 hover:border-white/20 hover:bg-white/6'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0
                    ${m.you
                      ? 'bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/30'
                      : 'bg-white/8 text-slate-300'
                    }`}>
                    {m.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold truncate leading-tight ${m.you ? 'text-indigo-300' : 'text-slate-300'}`}>
                      {m.name} {m.you && <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded ml-1">You</span>}
                    </p>
                    <p className="text-xs text-slate-500 truncate">{m.role} · {m.id}</p>
                  </div>
                  <svg className="ml-auto shrink-0 text-slate-700 group-hover:text-slate-400 transition-colors" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Regular Project Card ──────────────────────────────────────── */
function ProjectCard({ proj }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl bg-gradient-to-br border transition-all duration-300 hover:shadow-2xl
      ${proj.gradient} ${proj.border} ${proj.glow}`}>
      <button
        id={`project-btn-${proj.id}`}
        onClick={() => setOpen(o => !o)}
        className="w-full text-left p-6 md:p-7 cursor-pointer bg-transparent border-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="text-3xl shrink-0">{proj.icon}</div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-lg text-slate-100">{proj.title}</h3>
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${proj.badgeColor}`}>
                {proj.badge}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-2">{proj.subtitle}</p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-500 font-mono">
              <span>📅 {proj.period}</span>
              <span>👤 {proj.role}</span>
            </div>
          </div>

          {/* Action buttons + chevron */}
          <div className="flex items-center gap-2 shrink-0 self-start">
            {proj.liveUrl && (
              <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="no-underline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium
                  hover:bg-emerald-500/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live
              </a>
            )}
            {proj.github && (
              <a href={proj.github} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="no-underline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  bg-white/5 border border-white/10 text-slate-400 text-xs font-medium
                  hover:bg-indigo-500/10 hover:border-indigo-400/30 hover:text-indigo-300
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Code
              </a>
            )}
            <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300
              ${open ? 'rotate-180 border-indigo-400/40 text-indigo-400 bg-indigo-500/10' : ''}`}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {proj.tech.map((t, j) => (
            <span key={j} className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-mono border
              ${PILL_COLORS[proj.techColors[j]] || PILL_COLORS.slate}`}>
              {t}
            </span>
          ))}
        </div>
      </button>

      {/* Expanded */}
      {open && (
        <div className="px-6 md:px-7 pb-7 border-t border-white/6 pt-5">
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{proj.description}</p>
          <h4 className="font-display font-semibold text-slate-300 text-sm mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-indigo-400 rounded-full" />Key Highlights
          </h4>
          <ul className="space-y-2.5 mb-6">
            {proj.highlights.map((h, j) => (
              <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {proj.github && (
              <a href={proj.github} target="_blank" rel="noopener noreferrer"
                className="no-underline inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  bg-white/5 border border-white/10 text-slate-300 text-sm font-medium
                  hover:bg-indigo-500/10 hover:border-indigo-400/35 hover:text-indigo-300
                  hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/12 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            )}
            {proj.liveUrl && (
              <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                className="no-underline inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-sm font-medium
                  hover:bg-emerald-500/18 hover:border-emerald-400/45
                  hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/12 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Section ───────────────────────────────────────────────────── */
export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const filtered = PROJECTS.filter(p => matchesTab(p, activeTab))

  return (
    <section id="projects" className="relative py-28 px-6 bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-0.5 bg-indigo-500 rounded-full" />
          <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">Projects</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
          Things I&apos;ve{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Built</span>
        </h2>
        <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
          Five shipped projects — from a 6-member SDGP capstone to solo Android apps — each tested, documented, and deployed.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-white/3 border border-white/8 rounded-2xl w-fit">
          {TABS.map(tab => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium cursor-pointer border-none
                transition-all duration-200
                ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* InVezt Mega Card — show in All & Web tabs */}
        {(activeTab === 'all' || activeTab === 'web') && <InveztMegaCard />}

        {/* Other project cards */}
        <div className="space-y-5">
          {filtered.map(proj => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-mono text-sm">No projects match this filter</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
