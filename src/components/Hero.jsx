import { useEffect, useRef, useState } from 'react'

const ROLES = [
  'Software Engineer',
  'Full-Stack Developer',
  'QA & Testing Engineer',
  'Android Developer (Kotlin)',
  'React Frontend Developer',
]

/* ── Terminal lines that "type" one by one ── */
const TERMINAL_LINES = [
  { type: 'comment', text: '// InVezt — Stock Analysis Platform' },
  { type: 'keyword', text: 'const ', rest: 'analyseStock = async (ticker) => {' },
  { type: 'indent',  text: '  const ratios = await ', fn: 'fetchFinancials', args: '(ticker)' },
  { type: 'indent',  text: '  return ', fn: 'computeStarRating', args: '(ratios, 10)' },
  { type: 'bracket', text: '}' },
  { type: 'blank' },
  { type: 'comment', text: '// AdManager — JWT Auth endpoint' },
  { type: 'keyword', text: '@PostMapping', rest: '("/auth/login")' },
  { type: 'keyword', text: 'public ', rest: 'ResponseEntity<AuthResponse>' },
  { type: 'indent',  text: '  login', fn: '(@RequestBody', args: ' LoginDto dto)' },
  { type: 'blank' },
  { type: 'comment', text: '// CrossMath — Kotlin puzzle generator' },
  { type: 'keyword', text: 'fun ', rest: 'generateGrid(size: Int): PuzzleGrid {' },
  { type: 'indent',  text: '  return ', fn: 'PuzzleGenerator', args: '.create(size, seed)' },
  { type: 'bracket', text: '}' },
]

function useTyping(words, speed = 75, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let t
    if (!deleting && charIdx < current.length)
      t = setTimeout(() => setCharIdx(c => c + 1), speed)
    else if (!deleting && charIdx === current.length)
      t = setTimeout(() => setDeleting(true), pause)
    else if (deleting && charIdx > 0)
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    else { setDeleting(false); setWordIdx(i => (i + 1) % words.length) }
    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) {
      const t = setTimeout(() => setVisibleLines(0), 2500)
      return () => clearTimeout(t)
    }
    const delay = TERMINAL_LINES[visibleLines]?.type === 'blank' ? 150 : 500
    const t = setTimeout(() => setVisibleLines(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/8">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>
        <span className="ml-2 text-xs font-mono text-slate-500">portfolio.tsx</span>
      </div>

      {/* Code lines */}
      <div className="p-4 space-y-1 min-h-[220px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="font-mono text-xs leading-5 transition-all duration-200">
            {line.type === 'blank' && <div className="h-3" />}
            {line.type === 'comment' && (
              <span className="text-slate-600">{line.text}</span>
            )}
            {line.type === 'keyword' && (
              <>
                <span className="text-violet-400">{line.text}</span>
                <span className="text-slate-300">{line.rest}</span>
              </>
            )}
            {line.type === 'indent' && (
              <>
                <span className="text-slate-400">{line.text}</span>
                <span className="text-cyan-400">{line.fn}</span>
                <span className="text-slate-300">{line.args}</span>
              </>
            )}
            {line.type === 'bracket' && (
              <span className="text-slate-300">{line.text}</span>
            )}
          </div>
        ))}
        {/* Blinking cursor */}
        {visibleLines < TERMINAL_LINES.length && (
          <span className="inline-block w-1.5 h-3.5 bg-indigo-400 rounded-sm animate-blink align-middle" />
        )}
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-indigo-600/20 border-t border-indigo-500/20">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[10px] text-slate-500">React · Kotlin · Java · TypeScript</span>
      </div>
    </div>
  )
}

function CounterStat({ value, label, delay = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const numericValue = parseInt(value)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        let start = 0
        const step = Math.ceil(numericValue / 30)
        const t = setTimeout(() => {
          const interval = setInterval(() => {
            start = Math.min(start + step, numericValue)
            setCount(start)
            if (start >= numericValue) clearInterval(interval)
          }, 40)
        }, delay)
        return () => clearTimeout(t)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericValue, delay])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-2xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-none mb-1">
        {count}{value.replace(/[0-9]/g, '')}
      </div>
      <div className="text-slate-500 text-xs font-medium">{label}</div>
    </div>
  )
}

export default function Hero() {
  const typed     = useTyping(ROLES)
  const canvasRef = useRef(null)
  const heroRef   = useRef(null)
  const [mouse, setMouse] = useState({ x: -999, y: -999 })

  /* particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let id
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3, dx: (Math.random() - .5) * .35, dy: (Math.random() - .5) * .35,
      a: Math.random() * .45 + .08,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.a})`; ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])

  /* cursor spotlight */
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = e => {
      const rect = hero.getBoundingClientRect()
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const onLeave = () => setMouse({ x: -999, y: -999 })
    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => { hero.removeEventListener('mousemove', onMove); hero.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-28 pb-20 px-6"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute z-0 w-[400px] h-[400px] rounded-full transition-opacity duration-300"
        style={{
          left: mouse.x - 200,
          top:  mouse.y - 200,
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          opacity: mouse.x === -999 ? 0 : 1,
        }}
      />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-48 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-500/12 blur-[140px] animate-float-orb" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[130px] animate-float-orb [animation-delay:-4s]" />
      <div className="pointer-events-none absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/6 blur-[100px] animate-float-orb [animation-delay:-8s]" />

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-25"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(99,102,241,.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-7 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-emerald-400 text-xs font-mono font-medium tracking-wide">
                Open to Internship — 2025 / 2026
              </span>
            </div>

            {/* Greeting */}
            <p className="font-mono text-indigo-400 text-sm mb-3 animate-fade-up [animation-delay:0.1s]">
              &gt;&gt; Hello, world! I&apos;m
            </p>

            {/* Name */}
            <h1 className="font-display font-extrabold leading-tight mb-3 animate-fade-up [animation-delay:0.2s]"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}
            >
              <span className="text-slate-100">Suvindu</span>{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Hewapathirana
                </span>
                {/* Underline glow */}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-400/50 via-violet-400/50 to-transparent rounded-full" />
              </span>
            </h1>

            {/* Typed role */}
            <div className="flex items-center gap-1 font-semibold text-slate-400 mb-6 min-h-10 animate-fade-up [animation-delay:0.3s]"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
            >
              <span className="text-violet-400">{typed}</span>
              <span className="inline-block w-0.5 h-6 bg-indigo-400 rounded-sm animate-blink ml-0.5" />
            </div>

            {/* Summary */}
            <p className="text-slate-400 max-w-[540px] leading-relaxed mb-8 animate-fade-up [animation-delay:0.4s] text-[0.95rem]">
              BSc Computer Science undergraduate at{' '}
              <span className="text-slate-200 font-semibold">IIT / University of Westminster</span> — shipping
              full-stack systems, native Android apps, and well-tested APIs.
              Student ID:{' '}
              <code className="font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded text-sm">
                w2153380
              </code>
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up [animation-delay:0.5s]">
              <a
                href="#projects"
                className="no-underline inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                  bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm
                  shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/55 hover:-translate-y-0.5
                  transition-all duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10">🚀 View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="no-underline inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                  border border-indigo-500/40 text-indigo-300 font-semibold text-sm
                  hover:bg-indigo-500/10 hover:border-indigo-400 hover:-translate-y-0.5
                  transition-all duration-200"
              >
                📩 Get In Touch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mb-10 animate-fade-up [animation-delay:0.6s]">
              {[
                { href: 'https://github.com/sss-hewapathirana', title: 'GitHub',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                { href: 'https://www.linkedin.com/in/suvindu-supun-hewapathirana-1879a4345/', title: 'LinkedIn',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: 'mailto:s.s.s.hewapathirana@gmail.com', title: 'Email',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> },
                { href: 'tel:+94784861489', title: 'Phone',
                  icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> },
              ].map(s => (
                <a key={s.href} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" title={s.title}
                  className="no-underline inline-flex items-center justify-center w-11 h-11 rounded-xl
                    bg-white/5 border border-white/10 text-slate-500
                    hover:bg-indigo-500/15 hover:border-indigo-400/50 hover:text-indigo-400
                    hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20
                    transition-all duration-200"
                >{s.icon}</a>
              ))}
            </div>

            {/* Counter stats */}
            <div className="flex flex-wrap gap-8 animate-fade-up [animation-delay:0.7s]">
              <CounterStat value="5+"  label="Projects Shipped"    delay={0}   />
              <CounterStat value="20+" label="APIs Tested"         delay={100} />
              <CounterStat value="6"   label="SDGP Team Members"   delay={200} />
              <CounterStat value="3"   label="Tech Stacks"         delay={300} />
            </div>
          </div>

          {/* ── RIGHT — Terminal + info cards ── */}
          <div className="hidden lg:flex flex-col items-center gap-5 animate-fade-right">
            <TerminalWidget />

            {/* Mini info pills */}
            <div className="flex flex-col gap-3 w-full">
              {[
                { icon: '🎓', text: 'BSc Computer Science',  sub: 'Univ. of Westminster · w2153380' },
                { icon: '📍', text: 'Galle, Sri Lanka',       sub: 'UTC +5:30 · Open to remote' },
              ].map((c, i) => (
                <div key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl
                    bg-white/4 border border-white/8
                    hover:border-indigo-400/30 hover:bg-indigo-500/6 transition-all duration-200"
                >
                  <span className="text-lg">{c.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-200 leading-tight">{c.text}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-[11px] font-mono animate-bounce-arr z-10">
        <span>scroll</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}
