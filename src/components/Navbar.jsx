import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Journey',   href: '#timeline'  },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(sections[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-xl border-b border-indigo-500/15 shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-3 no-underline group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-500/40 font-display group-hover:shadow-indigo-500/60 transition-shadow">
            SSH
          </div>
          <span className="font-display font-semibold text-slate-200 text-base">
            Suvindu<span className="text-indigo-400">.</span>
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={id}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 no-underline
                  after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:rounded-full after:bg-indigo-400
                  after:transition-all after:duration-300
                  ${isActive
                    ? 'text-slate-100 after:w-full'
                    : 'text-slate-400 hover:text-slate-200 after:w-0 hover:after:w-full'
                  }`}
              >
                {link.label}
              </a>
            )
          })}

          <a
            href="mailto:s.s.s.hewapathirana@gmail.com"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold shadow-md shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            ✉ Hire Me
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden text-slate-300 text-2xl bg-transparent border-none cursor-pointer p-1"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/97 backdrop-blur-xl border-b border-indigo-500/20 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 no-underline text-base font-medium py-2 border-b border-indigo-500/10 hover:text-slate-200 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:s.s.s.hewapathirana@gmail.com"
            className="mt-2 flex justify-center items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold no-underline"
          >
            ✉ Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
