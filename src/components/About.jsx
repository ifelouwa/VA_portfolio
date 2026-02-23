import aboutImg from '../img/Amarachi.jpg'

function About() {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-center">
      <div className="relative overflow-hidden rounded-2xl bg-brandBlue/5 p-4 shadow-sm ring-1 ring-brandBlue/10">
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-brandBlue/10 sm:h-80">
          <img
            src={aboutImg}
            alt="Amarachi working in a digital learning environment"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">About Amarachi</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
        </div>
        <p className="text-base text-slate-700 sm:text-lg">
          I&apos;m an English Language undergraduate turned Virtual Assistant with a passion for education. Having seen
          how educators juggle endless backend tasks alongside teaching, I specialize in building streamlined systems
          that make learning smoother.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
          I support coaches, educators, online academies, and EdTech startups by handling the operations behind the
          scenes, so you can focus on what you do best: teaching and transforming lives.
        </p>
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Name</dt>
            <dd className="text-slate-800">Amarachi Emeka-Eze</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Location</dt>
            <dd className="text-slate-800">Lagos, Nigeria</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</dt>
            <dd>
              <a href="mailto:amiableamara004@gmail.com" className="text-brandBlueDark hover:text-brandBlue">
                amiableamara004@gmail.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Languages</dt>
            <dd className="text-slate-800">English (Fluent), Yoruba (Fluent)</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Availability</dt>
            <dd className="text-slate-800">Full-time, Hybrid, Contract</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default About
