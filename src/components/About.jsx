const STATS = [
  { value: '5+',  label: 'Projects Shipped'  },
  { value: '20+', label: 'APIs Tested'        },
  { value: '1',   label: 'SDGP Team Project'  },
  { value: '2',   label: 'Tech Stacks'        },
]

const SOFT_SKILLS = [
  '🤝 Teamwork', '🗣️ Communication', '🧠 Critical Thinking',
  '🔍 Problem Solving', '⏰ Time Management', '💡 Creativity',
  '😊 Approachable', '📐 Analytical',
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-slate-950">
      {/* subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-0.5 bg-indigo-500 rounded-full" />
          <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">About Me</span>
        </div>

        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-16">
          A glimpse{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            into who I am
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left – Bio ── */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a passionate{' '}
              <span className="text-slate-200 font-medium">Software Engineering undergraduate</span>{' '}
              at the Informatics Institute of Technology (IIT), affiliated with the{' '}
              <span className="text-indigo-400 font-medium">University of Westminster, UK</span>.
              I thrive at the intersection of clean code and user experience.
            </p>
            <p>
              Over the past year I&apos;ve delivered five personal and academic projects spanning
              native Android apps (Kotlin + Jetpack Compose), full-stack web platforms
              (React + Spring Boot / Node.js), and a 6-member Agile group project (SDGP)
              building an investment analysis platform for the Colombo Stock Exchange.
            </p>
            <p>
              I&apos;m equally comfortable writing{' '}
              <span className="text-violet-400 font-medium">production-ready features</span> and
              hunting edge-case bugs — my QA background means I test what I build:
              Postman API testing, manual STLC, black-box test cases, and defect logging
              across iterative release cycles.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: '📧', text: 's.s.s.hewapathirana@gmail.com', href: 'mailto:s.s.s.hewapathirana@gmail.com' },
                { icon: '📞', text: '+94 78 486 1489',               href: 'tel:+94784861489' },
                { icon: '📍', text: 'Nakiyadeniya, Galle, Sri Lanka', href: null },
              ].map((c, i) => (
                c.href
                  ? (
                    <a
                      key={i}
                      href={c.href}
                      className="no-underline inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                        bg-white/4 border border-white/8 text-slate-300 text-sm
                        hover:border-indigo-400/50 hover:text-indigo-300 transition-all duration-200"
                    >
                      <span>{c.icon}</span><span>{c.text}</span>
                    </a>
                  ) : (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                        bg-white/4 border border-white/8 text-slate-300 text-sm"
                    >
                      <span>{c.icon}</span><span>{c.text}</span>
                    </span>
                  )
              ))}
            </div>
          </div>

          {/* ── Right – Stats + Soft Skills ── */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl p-6 text-center
                    bg-gradient-to-br from-indigo-500/10 to-violet-500/5
                    border border-indigo-500/15
                    hover:border-indigo-400/35 hover:-translate-y-1
                    transition-all duration-300 group"
                >
                  <div className="font-display font-bold text-4xl bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1 leading-none">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{s.label}</div>
                  {/* subtle hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-500/5 rounded-2xl" />
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="rounded-2xl p-6 bg-white/3 border border-white/8">
              <h3 className="font-display font-semibold text-slate-200 text-lg mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((sk, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                      bg-indigo-500/12 border border-indigo-500/25 text-indigo-300
                      hover:bg-indigo-500/22 hover:border-indigo-400/50 transition-all duration-200 cursor-default"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-2xl p-6 bg-white/3 border border-white/8">
              <h3 className="font-display font-semibold text-slate-200 text-lg mb-4">Languages</h3>
              <div className="space-y-3">
                {[
                  { lang: 'Sinhala', level: 'Native',                     pct: 100, color: 'from-emerald-500 to-cyan-500' },
                  { lang: 'English', level: 'Professional Working Proficiency', pct: 80, color: 'from-indigo-500 to-violet-500' },
                ].map((l, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-300 text-sm font-medium">{l.lang}</span>
                      <span className="text-slate-500 text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${l.color} animate-progress`}
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
