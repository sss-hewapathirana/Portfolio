import { useState } from 'react'

const CONTACT_INFO = [
  {
    icon: '📧',
    label: 'Email',
    value: 's.s.s.hewapathirana@gmail.com',
    href: 'mailto:s.s.s.hewapathirana@gmail.com',
    color: 'from-indigo-500/15 to-violet-500/8 border-indigo-500/20 hover:border-indigo-400/40',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+94 78 486 1489',
    href: 'tel:+94784861489',
    color: 'from-emerald-500/15 to-teal-500/8 border-emerald-500/20 hover:border-emerald-400/40',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/suvindu-hewapathirana',
    href: 'https://www.linkedin.com/in/suvindu-supun-hewapathirana-1879a4345/',
    color: 'from-blue-500/15 to-sky-500/8 border-blue-500/20 hover:border-blue-400/40',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/sss-hewapathirana',
    href: 'https://github.com/sss-hewapathirana',
    color: 'from-slate-500/15 to-gray-500/8 border-slate-500/20 hover:border-slate-400/40',
  },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send (replace with your real API / EmailJS / etc.)
    setTimeout(() => setStatus('sent'), 1500)
  }

  return (
    <section id="contact" className="relative py-28 px-6 bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      {/* Bottom ambient orbs */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/8 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-0.5 bg-indigo-500 rounded-full" />
          <span className="font-mono text-indigo-400 text-xs uppercase tracking-widest">Contact</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
          Let&apos;s{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-slate-400 max-w-lg mb-14 leading-relaxed">
          I&apos;m actively seeking internship opportunities for 2025 / 2026.
          Whether you have a role, a project, or just want to chat about tech — reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Contact Info ── */}
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`no-underline flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br border
                  hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group ${c.color}`}
              >
                <div className="w-11 h-11 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">{c.label}</p>
                  <p className="text-slate-300 text-sm font-medium truncate">{c.value}</p>
                </div>
                <svg className="ml-auto shrink-0 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}

            {/* Availability note */}
            <div className="p-5 rounded-2xl bg-emerald-500/8 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wide">Available</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to internship opportunities in <span className="text-slate-200 font-medium">Software Engineering, Full-Stack Dev, or QA</span> — remote or on-site in Sri Lanka.
              </p>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-8 bg-white/3 border border-white/8 hover:border-indigo-400/20 transition-all duration-300">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-100">Message Sent!</h3>
                  <p className="text-slate-400 max-w-xs">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => { setStatus(null); setForm({ name:'', email:'', subject:'', message:'' }) }}
                    className="mt-2 px-6 py-2 rounded-lg border border-indigo-500/40 text-indigo-400 text-sm font-medium hover:bg-indigo-500/10 transition-colors cursor-pointer bg-transparent"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">Name</label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Suvindu Hewapathirana"
                        value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-slate-200 text-sm placeholder-slate-600
                          outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 font-sans"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">Email</label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="you@example.com"
                        value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-slate-200 text-sm placeholder-slate-600
                          outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">Subject</label>
                    <input
                      id="subject" name="subject" type="text" required
                      placeholder="Internship Opportunity / Collaboration"
                      value={form.subject} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-slate-200 text-sm placeholder-slate-600
                        outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">Message</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      placeholder="Hi Suvindu, I'd love to discuss..."
                      value={form.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-slate-200 text-sm placeholder-slate-600
                        outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 font-sans resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm
                      shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5
                      disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-200 cursor-pointer border-none"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"/>
                        </svg>
                        Sending…
                      </span>
                    ) : '🚀 Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
