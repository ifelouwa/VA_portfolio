import { useState, useRef, useEffect } from 'react'

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-semibold tracking-tight text-slate-900">
          Amarachi<span className="text-brandBlue">.</span>
        </a>
        <div className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#home" className="hover:text-brandBlue">
            Home
          </a>
          <a href="#about" className="hover:text-brandBlue">
            About
          </a>
          <a href="#experience" className="hover:text-brandBlue">
            Experience
          </a>
          <a href="#education" className="hover:text-brandBlue">
            Education
          </a>
          <a href="#skills" className="hover:text-brandBlue">
            Skills
          </a>
          <a href="#projects" className="hover:text-brandBlue">
            Projects
          </a>
          <a href="#contact" className="hover:text-brandBlue">
            Contact
          </a>
        </div>
        <div className="relative hidden md:block" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="rounded-full bg-brandBlue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brandBlueDark inline-flex items-center gap-2"
          >
            Contact Me
            <svg
              className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white p-2 shadow-lg ring-1 ring-slate-900/5 focus:outline-none">
              <a
                href="mailto:amaratheaeva01@gmail.com"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brandBlue"
                onClick={() => setIsDropdownOpen(false)}
              >
                <svg className="h-8 w-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/amarachi-emeka-eze/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brandBlue"
                onClick={() => setIsDropdownOpen(false)}
              >
                <svg className="h-8 w-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                LinkedIn
              </a>
              <button
                onClick={() => {
                  window.Calendly.initPopupWidget({ url: 'https://calendly.com/amaratheaeva01/discovery-call' });
                  setIsDropdownOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brandBlue"
              >
                <svg className="h-8 w-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Book a Meeting
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
