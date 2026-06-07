import { useEffect } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Timeline     from './components/Timeline'
import TechMarquee  from './components/TechMarquee'
import Skills       from './components/Skills'
import WhatIBring   from './components/WhatIBring'
import Projects     from './components/Projects'
import Education    from './components/Education'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import { ScrollProgress, BackToTop } from './components/UiExtras'

/* Staggered scroll-reveal using IntersectionObserver */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Global UX extras */}
      <ScrollProgress />
      <BackToTop />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <About />
        <Timeline />
        <TechMarquee />
        <Skills />
        <WhatIBring />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
