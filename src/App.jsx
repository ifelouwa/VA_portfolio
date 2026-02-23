import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showToast, setShowToast] = useState(() => {
    if (typeof window === 'undefined') return false
    const url = new URL(window.location.href)
    const submitted = url.searchParams.get('submitted')
    return submitted === '1'
  })

  useEffect(() => {
    if (!showToast) return
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.delete('submitted')
    const searchString = url.searchParams.toString()
    const newUrl = `${url.pathname}${searchString ? `?${searchString}` : ''}${url.hash}`
    window.history.replaceState(null, '', newUrl || '/')
  }, [showToast])

  return (
    <div className="relative min-h-screen bg-white text-slate-900 text-[15px] sm:text-base">
      {showToast && (
        <div className="fixed right-4 top-20 z-30">
          <div className="flex items-start gap-3 rounded-lg bg-emerald-600 px-4 py-3 text-sm text-white shadow-lg">
            <div className="mt-[3px] h-2 w-2 rounded-full bg-white" />
            <div>
              <p className="font-semibold">Message sent</p>
              <p className="text-xs text-emerald-100">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
            <button
              type="button"
              className="ml-2 text-emerald-100 hover:text-white"
              onClick={() => setShowToast(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-20 space-y-24">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
