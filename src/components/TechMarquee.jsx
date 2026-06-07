const TECH_MARQUEE = [
  { label: 'React 19',         color: 'text-cyan-400',    icon: '⚛️'  },
  { label: 'Kotlin',           color: 'text-violet-400',  icon: '🎯'  },
  { label: 'Java 17',          color: 'text-amber-400',   icon: '☕'  },
  { label: 'Spring Boot 4',    color: 'text-green-400',   icon: '🍃'  },
  { label: 'PostgreSQL',       color: 'text-blue-400',    icon: '🐘'  },
  { label: 'MongoDB',          color: 'text-emerald-400', icon: '🍃'  },
  { label: 'Node.js',          color: 'text-lime-400',    icon: '🟢'  },
  { label: 'Docker',           color: 'text-sky-400',     icon: '🐳'  },
  { label: 'Git',              color: 'text-orange-400',  icon: '📦'  },
  { label: 'Postman',          color: 'text-orange-300',  icon: '🚀'  },
  { label: 'Jetpack Compose',  color: 'text-indigo-400',  icon: '🎨'  },
  { label: 'Tailwind CSS v4',  color: 'text-cyan-300',    icon: '🎨'  },
  { label: 'TypeScript',       color: 'text-blue-300',    icon: '📘'  },
  { label: 'Vite',             color: 'text-yellow-400',  icon: '⚡'  },
  { label: 'Drizzle ORM',      color: 'text-amber-300',   icon: '💧'  },
  { label: 'JWT Auth',         color: 'text-rose-400',    icon: '🔐'  },
]

/* Duplicate for seamless loop */
const DOUBLED = [...TECH_MARQUEE, ...TECH_MARQUEE]

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-5 bg-[#07080f]">
      {/* Left / Right fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#07080f] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#07080f] to-transparent" />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: 'marquee-scroll 30s linear infinite',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {DOUBLED.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
              bg-white/4 border border-white/8 shrink-0
              hover:border-indigo-400/40 hover:bg-indigo-500/8 transition-all duration-200 cursor-default"
          >
            <span className="text-base leading-none">{t.icon}</span>
            <span className={`text-sm font-mono font-medium ${t.color}`}>{t.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
