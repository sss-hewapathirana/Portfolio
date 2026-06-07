export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: 'About',     href: '#about'     },
    { label: 'Skills',    href: '#skills'    },
    { label: 'Projects',  href: '#projects'  },
    { label: 'Education', href: '#education' },
    { label: 'Contact',   href: '#contact'   },
  ]

  return (
    <footer className="relative bg-[#03040a] border-t border-white/6 px-6 py-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#home" className="no-underline flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow font-display">
              SSH
            </div>
            <div>
              <p className="font-display font-semibold text-slate-200 leading-tight text-sm">
                Suvindu Hewapathirana
              </p>
              <p className="text-slate-500 text-xs">Software Engineering Undergraduate</p>
            </div>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-5">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="no-underline text-slate-500 text-sm hover:text-slate-300 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { href: 'https://github.com/sss-hewapathirana', label: 'GitHub',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
              { href: 'https://www.linkedin.com/in/suvindu-supun-hewapathirana-1879a4345/', label: 'LinkedIn',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: 'mailto:s.s.s.hewapathirana@gmail.com', label: 'Email',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> },
            ].map(s => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="no-underline inline-flex items-center justify-center w-9 h-9 rounded-lg
                  bg-white/4 border border-white/8 text-slate-500
                  hover:bg-indigo-500/15 hover:border-indigo-400/40 hover:text-indigo-400
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs font-mono">
            © {year} Suvindu Supun Sri Hewapathirana. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs font-mono">
            Built with <span className="text-indigo-500">React</span> + <span className="text-cyan-500">Tailwind CSS v4</span> + <span className="text-violet-500">Vite</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
