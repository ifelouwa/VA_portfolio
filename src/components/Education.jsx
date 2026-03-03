function Education() {
  return (
    <section id="education" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">EDUCATION AND CERTIFICATION</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brandBlue text-white text-sm font-semibold">
            BA
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">B.A. English Language (In View)</h3>
            <p className="text-sm text-slate-700">Lagos State University of Education (LASUED) — Lagos, Nigeria</p>
            <p className="mt-2 text-sm text-slate-700">
              October 2024 – Present
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brandGold text-xs font-semibold text-slate-900">
            VA
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Virtual Assistant Training Scholarship</h3>
            <p className="text-sm text-slate-700">TechCrush Academy Accredited by the American Council of Training and Development, USA</p>
            <p className="mt-2 text-sm text-slate-700">
              TechCrush, 2025 
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brandBlue text-white text-sm font-semibold">
            EV
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900"> Executive Virtual Assistance Certification</h3>
            <p className="text-sm text-slate-700">She Leads Africa (SLA) BoostHer Program</p>
            <p className="mt-2 text-sm text-slate-700">
              October 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
