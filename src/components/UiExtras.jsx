import { useEffect, useState } from 'react'

/** Thin gradient scroll-progress bar fixed at very top of viewport */
export function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement
      const tot = el.scrollHeight - el.clientHeight
      setPct(tot > 0 ? (window.scrollY / tot) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-none"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

/** Floating "back to top" button — appears after 500px scroll */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      id="back-to-top"
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full
        bg-gradient-to-br from-indigo-500 to-violet-500
        shadow-lg shadow-indigo-500/40 text-white
        flex items-center justify-center cursor-pointer border-none
        hover:shadow-indigo-500/60 hover:-translate-y-1
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  )
}
