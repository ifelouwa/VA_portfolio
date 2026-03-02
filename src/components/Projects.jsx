import sheetsImg from '../img/Sheets.jpg'

function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">MY WORK</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={sheetsImg}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Attendance and engagement
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Attendance tracker for a content writing bootcamp
            </h3>
            <p className="text-base text-slate-700">
              Google Sheets tracker designed to monitor participation and engagement across multiple streams in a
              content writing bootcamp.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium">
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Google Sheets</span>
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Data management</span>
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Reporting</span>
            </div>
            <ul className="mt-1 space-y-1 text-base text-slate-700">
              <li>Tracks daily attendance across multiple streams.</li>
              <li>Automatically calculates attendance percentages.</li>
              <li>Includes notes for feedback and performance.</li>
              <li>Color-coded view for quick visual review.</li>
            </ul>
          </div>
        </article>
        <article className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brandBlue text-white">
            +
          </div>
          <h3 className="text-base font-semibold text-slate-900">More projects coming soon</h3>
          <p className="max-w-sm text-base text-slate-700">
            I&apos;m constantly building new systems and resources for educators and learning teams. Check back for
            updated case studies and templates.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Projects
