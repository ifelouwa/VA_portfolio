function Navbar() {
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
        <a
          href="#contact"
          className="hidden rounded-full bg-brandBlue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brandBlueDark md:inline-flex"
        >
          Contact Me
        </a>
      </nav>
    </header>
  )
}

export default Navbar
