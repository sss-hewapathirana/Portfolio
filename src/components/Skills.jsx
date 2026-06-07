const SKILL_GROUPS = [
  {
    title: 'QA & Testing',
    icon: '🧪',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-400/40',
    pill: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
    items: ['Manual Testing', 'API Testing (Postman)', 'STLC', 'Black-box Testing', 'Test Case Design', 'Defect Reporting', 'Edge Case Analysis'],
  },
  {
    title: 'Languages',
    icon: '💻',
    color: 'from-indigo-500/20 to-blue-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-400/40',
    pill: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
    items: ['Java', 'JavaScript', 'Kotlin', 'Dart', 'Python', 'C', 'SQL', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    color: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/20 hover:border-violet-400/40',
    pill: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    items: ['React 19', 'Spring Boot 4', 'Jetpack Compose', 'Express.js', 'Flutter (basic)', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Mobile Dev',
    icon: '📱',
    color: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/20 hover:border-pink-400/40',
    pill: 'bg-pink-500/10 border-pink-500/25 text-pink-300',
    items: ['Native Android (Kotlin)', 'Jetpack Compose', 'Room DB', 'Coroutines', 'rememberSaveable', 'Material 3'],
  },
  {
    title: 'Backend & APIs',
    icon: '🔧',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20 hover:border-amber-400/40',
    pill: 'bg-amber-500/10 border-amber-500/25 text-amber-300',
    items: ['RESTful API Design', 'JWT Authentication', 'Spring Security', 'Node.js / Express.js', 'Swagger UI', 'Hibernate JPA'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-cyan-500/20 to-sky-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-400/40',
    pill: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300',
    items: ['PostgreSQL', 'MongoDB', 'SQLite / Room', 'Firebase (basic)', 'Neon Cloud', 'Drizzle ORM'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-slate-500/20 to-gray-500/10',
    border: 'border-slate-500/20 hover:border-slate-400/40',
    pill: 'bg-slate-500/10 border-slate-500/25 text-slate-300',
    items: ['Git', 'GitHub', 'Postman', 'Android Studio', 'IntelliJ IDEA', 'VS Code', 'Docker (basic)', 'Gradle'],
  },
  {
    title: 'Methodologies',
    icon: '📋',
    color: 'from-lime-500/20 to-green-500/10',
    border: 'border-lime-500/20 hover:border-lime-400/40',
    pill: 'bg-lime-500/10 border-lime-500/25 text-lime-300',
    items: ['Agile / Scrum', 'SDLC', 'STLC', 'Sprint-based Delivery', 'Code Review', 'Pair Testing'],
  },
]

const CORE_PROFICIENCY = [
  { label: 'Java / Spring Boot',  pct: 88, color: 'from-amber-400 to-orange-400'  },
  { label: 'React / JavaScript',  pct: 90, color: 'from-cyan-400 to-blue-400'     },
  { label: 'Kotlin / Android',    pct: 82, color: 'from-violet-400 to-purple-400' },
  { label: 'QA & API Testing',    pct: 85, color: 'from-emerald-400 to-teal-400'  },
  { label: 'PostgreSQL / MongoDB',pct: 75, color: 'from-indigo-400 to-blue-400'   },
  { label: 'Git & DevOps',        pct: 78, color: 'from-pink-400 to-rose-400'     },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-[#07080f]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-0.5 bg-indigo-500 rounded-full" />
          <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">Technical Skills</span>
        </div>

        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-5">
          My{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mb-16 leading-relaxed">
          A broad skill set spanning frontend, backend, mobile, QA, and DevOps — continuously growing through hands-on projects.
        </p>

        {/* Proficiency bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-16 p-8 rounded-2xl bg-white/3 border border-white/8">
          {CORE_PROFICIENCY.map((sk, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm font-medium">{sk.label}</span>
                <span className="font-mono text-xs text-slate-500">{sk.pct}%</span>
              </div>
              <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${sk.color} animate-progress`}
                  style={{ width: `${sk.pct}%`, animationDelay: `${i * 0.1}s` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_GROUPS.map((grp, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 bg-gradient-to-br ${grp.color} border ${grp.border}
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{grp.icon}</span>
                <h3 className="font-display font-semibold text-slate-200 text-sm">{grp.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {grp.items.map((item, j) => (
                  <span
                    key={j}
                    className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border ${grp.pill}
                      hover:opacity-100 opacity-85 transition-opacity cursor-default`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
