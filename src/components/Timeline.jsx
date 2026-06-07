const TIMELINE = [
  {
    year: '2024',
    month: 'Sep',
    title: 'Started University',
    org: 'IIT / University of Westminster',
    type: 'education',
    color: 'indigo',
    icon: '🎓',
    desc: 'Began BSc (Hons) Computer Science at IIT Sri Lanka, affiliated with the University of Westminster, UK. Student ID: w2153380.',
    tags: ['Java', 'OOP', 'Algorithms', 'Web Tech'],
  },
  {
    year: '2024',
    month: 'Oct',
    title: 'Meal Recipe App',
    org: 'Personal Android Project',
    type: 'project',
    color: 'amber',
    icon: '🍽️',
    desc: 'Built first native Android app using Kotlin + Jetpack Compose integrating TheMealDB REST API with Room persistence for offline-first access.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'REST API'],
  },
  {
    year: '2024',
    month: 'Nov',
    title: 'CrossMath Puzzle Game',
    org: 'University Coursework',
    type: 'project',
    color: 'pink',
    icon: '🧩',
    desc: 'Delivered a native Android puzzle game generating 11×11–20×20 arithmetic grids with two difficulty modes, countdown timer, and full test coverage.',
    tags: ['Kotlin', 'Compose', 'JUnit', 'Espresso'],
  },
  {
    year: '2025',
    month: 'Jan',
    title: 'SDGP — InVezt',
    org: 'University of Westminster — Team of 6',
    type: 'project',
    color: 'violet',
    icon: '📈',
    desc: 'Joined a 6-member Agile SDGP team building InVezt — a full-stack CSE stock analysis & portfolio management platform. Served as Frontend Developer.',
    tags: ['React', 'Vite', 'Recharts', 'Node.js', 'MongoDB'],
  },
  {
    year: '2025',
    month: 'Mar',
    title: 'AdManager System',
    org: 'Personal Full-Stack Project',
    type: 'project',
    color: 'cyan',
    icon: '📢',
    desc: 'Built and QA-tested a full-stack ad management platform from scratch — 18 Vercel deployments, 20+ API endpoints tested, JWT auth + Spring Security.',
    tags: ['Spring Boot', 'React 19', 'PostgreSQL', 'Postman', 'Docker'],
  },
  {
    year: '2025',
    month: 'May',
    title: 'AgriConnect Marketplace',
    org: 'Collaborative Project',
    type: 'project',
    color: 'emerald',
    icon: '🌾',
    desc: 'Joined a collaborative team as Frontend Developer — built farmer discovery, product management, and order tracking UIs; API integration tested 15+ endpoints.',
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Clerk Auth', 'Drizzle ORM'],
  },
  {
    year: '2026',
    month: 'Now',
    title: 'Seeking Internship',
    org: 'Open to Opportunities',
    type: 'future',
    color: 'green',
    icon: '🚀',
    desc: 'Actively seeking a Software Engineering internship for 2025/2026 in Full-Stack Development, Android, or QA. Remote or on-site in Sri Lanka.',
    tags: ['Internship', 'Full-Stack', 'Android', 'QA'],
  },
]

const COLOR_MAP = {
  indigo:  { dot: 'bg-indigo-500',  line: 'border-indigo-500/30', card: 'border-indigo-500/20 hover:border-indigo-400/50 from-indigo-500/10',  pill: 'bg-indigo-500/12 border-indigo-500/25 text-indigo-300', icon: 'bg-indigo-500/15 border-indigo-500/25' },
  amber:   { dot: 'bg-amber-400',   line: 'border-amber-500/30',  card: 'border-amber-500/20  hover:border-amber-400/50  from-amber-500/10',   pill: 'bg-amber-500/12  border-amber-500/25  text-amber-300',  icon: 'bg-amber-500/15  border-amber-500/25'  },
  pink:    { dot: 'bg-pink-500',    line: 'border-pink-500/30',   card: 'border-pink-500/20   hover:border-pink-400/50   from-pink-500/10',    pill: 'bg-pink-500/12   border-pink-500/25   text-pink-300',   icon: 'bg-pink-500/15   border-pink-500/25'   },
  violet:  { dot: 'bg-violet-500',  line: 'border-violet-500/30', card: 'border-violet-500/20 hover:border-violet-400/50 from-violet-500/10',  pill: 'bg-violet-500/12 border-violet-500/25 text-violet-300', icon: 'bg-violet-500/15 border-violet-500/25' },
  cyan:    { dot: 'bg-cyan-400',    line: 'border-cyan-500/30',   card: 'border-cyan-500/20   hover:border-cyan-400/50   from-cyan-500/10',    pill: 'bg-cyan-500/12   border-cyan-500/25   text-cyan-300',   icon: 'bg-cyan-500/15   border-cyan-500/25'   },
  emerald: { dot: 'bg-emerald-400', line: 'border-emerald-500/30',card: 'border-emerald-500/20 hover:border-emerald-400/50 from-emerald-500/10',pill: 'bg-emerald-500/12 border-emerald-500/25 text-emerald-300',icon: 'bg-emerald-500/15 border-emerald-500/25'},
  green:   { dot: 'bg-green-400 animate-pulse',   line: 'border-green-500/30',  card: 'border-green-500/20  hover:border-green-400/50  from-green-500/10',   pill: 'bg-green-500/12  border-green-500/25  text-green-300',  icon: 'bg-green-500/15  border-green-500/25'  },
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-0.5 bg-indigo-500 rounded-full" />
          <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">My Journey</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
          The story{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            so far
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mb-16 leading-relaxed">
          From first lecture to shipping production software — the milestones that shaped me as a developer.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/30 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => {
              const c = COLOR_MAP[item.color]
              const isRight = i % 2 === 0

              return (
                <div
                  key={i}
                  className="relative flex md:grid md:grid-cols-2 items-start gap-6 md:gap-0 reveal"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* ── Desktop left column ── */}
                  <div className="hidden md:block">
                    {isRight ? (
                      <div className={`inline-flex flex-col items-end p-5 rounded-2xl bg-gradient-to-br to-transparent border
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-right w-full
                        ${c.card}`}
                      >
                        <CardContent item={item} c={c} align="right" />
                      </div>
                    ) : (
                      <div className="p-5 invisible" />
                    )}
                  </div>

                  {/* ── Centre dot ── */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-10">
                    <div className={`w-4 h-4 rounded-full border-2 border-[#04050a] shadow-lg ${c.dot}`} />
                  </div>

                  {/* ── Desktop right column ── */}
                  <div className="hidden md:block">
                    {!isRight ? (
                      <div className={`inline-flex flex-col items-start p-5 rounded-2xl bg-gradient-to-br to-transparent border
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full
                        ${c.card}`}
                      >
                        <CardContent item={item} c={c} align="left" />
                      </div>
                    ) : (
                      <div className="p-5 invisible" />
                    )}
                  </div>

                  {/* ── Mobile card ── */}
                  <div className="md:hidden pl-16">
                    <div className={`p-5 rounded-2xl bg-gradient-to-br to-transparent border
                      hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                      ${c.card}`}
                    >
                      <CardContent item={item} c={c} align="left" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CardContent({ item, c, align }) {
  return (
    <>
      {/* Date + icon */}
      <div className={`flex items-center gap-2 mb-3 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-base ${c.icon}`}>
          {item.icon}
        </div>
        <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
          {item.month} {item.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-base text-slate-100 mb-0.5">{item.title}</h3>
      <p className="text-xs text-slate-500 mb-3">{item.org}</p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>

      {/* Tech tags */}
      <div className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'justify-end' : ''}`}>
        {item.tags.map((t, k) => (
          <span key={k} className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-mono border ${c.pill}`}>
            {t}
          </span>
        ))}
      </div>
    </>
  )
}
