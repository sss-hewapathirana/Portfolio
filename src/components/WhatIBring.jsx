const VALUE_CARDS = [
  {
    icon: '🔨',
    title: 'Builder',
    subtitle: 'End-to-End Engineer',
    color: 'from-indigo-500/15 to-blue-500/8 border-indigo-500/20 hover:border-indigo-400/40',
    glow: 'hover:shadow-indigo-500/12',
    points: [
      'Ships features from DB schema design to polished UI component',
      'Delivers RESTful APIs with full CRUD, auth, and rate limiting',
      'Native Android apps with Jetpack Compose — zero third-party game engines',
      'Full-stack web systems deployed to production (Vercel, Neon Cloud)',
    ],
  },
  {
    icon: '🧪',
    title: 'Tester',
    subtitle: 'QA-First Mindset',
    color: 'from-emerald-500/15 to-teal-500/8 border-emerald-500/20 hover:border-emerald-400/40',
    glow: 'hover:shadow-emerald-500/12',
    points: [
      'Tests every API endpoint manually with Postman before shipping',
      'Follows full STLC: test planning → execution → defect logging → retest',
      'Black-box & edge-case testing across multiple API levels (Android 24–36)',
      'Validates auth flows: 200, 201, 401, 403, 429 response codes',
    ],
  },
  {
    icon: '🤝',
    title: 'Collaborator',
    subtitle: 'Agile Team Player',
    color: 'from-violet-500/15 to-purple-500/8 border-violet-500/20 hover:border-violet-400/40',
    glow: 'hover:shadow-violet-500/12',
    points: [
      'Delivered SDGP capstone in a 6-member cross-functional Agile team',
      'Sprint planning, daily standups, retrospectives, and demo presentations',
      'Frontend–Backend API contract negotiation and integration testing',
      'Code reviews, Git branching strategy, and iterative release cycles',
    ],
  },
]

export default function WhatIBring() {
  return (
    <section className="relative py-24 px-6 bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-0.5 bg-violet-500 rounded-full" />
          <span className="font-mono text-violet-400 text-xs uppercase tracking-widest">What I Bring</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
          The value I add{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            to your team
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mb-14 leading-relaxed">
          Whether shipping features, breaking things safely in testing, or collaborating across a sprint — here&apos;s what you get with me on the team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_CARDS.map((c, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 bg-gradient-to-br border
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group
                ${c.color} ${c.glow}`}
            >
              {/* Icon badge */}
              <div className="w-14 h-14 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {c.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-slate-100 mb-0.5">{c.title}</h3>
              <p className="text-xs font-mono text-slate-500 mb-5 uppercase tracking-wide">{c.subtitle}</p>

              <ul className="space-y-3">
                {c.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
