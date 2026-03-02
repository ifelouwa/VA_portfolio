import heroImg from '../img/presen.jpeg'

function Hero() {
  return (
    <section id="home" className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
      <div className="space-y-6">
        <p className="inline-flex flex-col items-start gap-1 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-brandBlue">
          <span>Administrative Virtual Assistant | Executive Support Specialist</span>
          <span className="h-1 w-16 rounded-full bg-brandGold" />
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Hello, I&apos;m <span className="text-brandBlue">Amarachi P. Emeka-Eze</span>
        </h1>
        <p className="max-w-xl text-lg text-slate-700 sm:text-xl">
          Your Inbox Is Overflowing. <br />
          Your Calendar Is Chaos. <br />
          Let's Fix That.
        </p>
        <p className="max-w-xl text-base text-slate-600 sm:text-lg">
          I'm Amarachi, an Administrative Virtual Assistant who helps founders, startups, and CEOs reclaim their time, organize their operations, and show up fully to what matters most.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-brandBlue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brandBlueDark"
          >
            Work With Me
          </a>
          <a
            href="#services"
            className="rounded-full border border-brandBlue px-5 py-2.5 text-sm font-semibold text-brandBlue hover:bg-brandBlue/5"
          >
            See My Work
          </a>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brandGold" />
            Based in Lagos, Nigeria
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brandGold" />
            Available: Full-time, Hybrid, Contract
          </span>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-brandGold/70 bg-brandBlue/5 shadow-lg sm:h-72 sm:w-72">
          <img src={heroImg} alt="Amarachi P. Emeka-Eze" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
