function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Experience</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
      </div>
      <div className="relative border-l border-slate-200 pl-6">
        <div className="absolute -left-2 top-2 h-4 w-4 rounded-full border-2 border-white bg-brandBlue shadow-sm" />
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-brandBlue">Jan 2022 – Dec 2023</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900">Classroom Teacher & Teaching Assistant</h3>
          <p className="text-sm font-medium text-slate-700">Rosenik Private School, Nigeria</p>
          <ul className="mt-3 space-y-2 text-base text-slate-700">
            <li>Delivered English lessons for junior and senior classes.</li>
            <li>Maintained lesson plans, attendance records, and classroom files.</li>
            <li>Coordinated digital materials and backend administrative tasks.</li>
            <li>Liaised professionally with parents and staff.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
