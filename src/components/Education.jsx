const COURSES = [
  'Software Engineering', 'Database Systems', 'Mobile Application Development',
  'Web Technologies', 'Algorithms & Data Structures', 'SDGP (Group Project)',
  'Computer Networks', 'Object-Oriented Programming',
]

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 bg-[#07080f]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-0.5 bg-indigo-500 rounded-full" />
          <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">Education</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-16">
          Academic{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Background
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── Main Education Card ── */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-violet-500/5 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />

              <div className="p-8">
                {/* Institution logo placeholder */}
                <div className="flex items-start gap-5 mb-7">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/30 shrink-0">
                    🎓
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-xs font-mono mb-2">
                      September 2024 – Present
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-100 leading-tight">
                      BSc (Hons) Computer Science
                    </h3>
                    <p className="text-indigo-400 font-medium text-sm mt-1">
                      University of Westminster, UK
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Delivered through Informatics Institute of Technology (IIT), Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Student ID */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { label: 'Student ID (IIT)', value: '20240294' },
                    { label: 'Student ID (UoW)', value: 'w2153380' },
                  ].map((id, i) => (
                    <div key={i} className="px-4 py-2 rounded-xl bg-white/4 border border-white/8">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide mb-0.5">{id.label}</p>
                      <p className="font-mono font-semibold text-indigo-300 text-sm">{id.value}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {[
                    { icon: '🏆', text: 'Completed Software Development Group Project (SDGP) — Agile team of 6, full product lifecycle' },
                    { icon: '🌍', text: 'UK-affiliated degree program at IIT, one of Sri Lanka\'s leading tech institutions' },
                    { icon: '💡', text: 'Hands-on learning through 5+ projects covering full-stack, mobile, QA, and Agile practices' },
                    { icon: '📚', text: 'Strong foundation in CS fundamentals: Algorithms, OOP, Databases, Networks, and Systems' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-base shrink-0">{item.icon}</span>
                      <span className="text-slate-400 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Relevant Coursework */}
            <div className="rounded-2xl p-6 bg-white/3 border border-white/8 hover:border-indigo-400/25 transition-all duration-300">
              <h3 className="font-display font-semibold text-slate-200 text-base mb-4 flex items-center gap-2">
                <span className="text-indigo-400">📘</span>
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {COURSES.map((c, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 rounded-lg text-xs font-medium
                      bg-indigo-500/10 border border-indigo-500/20 text-indigo-300
                      hover:bg-indigo-500/20 hover:border-indigo-400/40 cursor-default transition-all duration-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* SDGP Highlight */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-500/12 to-indigo-500/6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
              <h3 className="font-display font-semibold text-slate-200 text-base mb-3 flex items-center gap-2">
                <span>🚀</span> SDGP — InVezt
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                6-member Agile team project delivering a full-stack CSE investment analysis platform from ideation through deployment.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Team of 6', 'Full Lifecycle', 'Agile / Scrum', 'React', 'Node.js', 'MongoDB'].map((t, i) => (
                  <span key={i} className="inline-block px-2 py-0.5 rounded-md text-[11px] font-mono border bg-violet-500/10 border-violet-500/25 text-violet-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="rounded-2xl p-6 bg-white/3 border border-white/8">
              <h3 className="font-display font-semibold text-slate-200 text-base mb-4 flex items-center gap-2">
                <span>📍</span> Location
              </h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>🏡 Nakiyadeniya, Galle, Sri Lanka</p>
                <p>🌐 UTC +5:30 (IST)</p>
                <p>✈️ Open to remote / hybrid opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
