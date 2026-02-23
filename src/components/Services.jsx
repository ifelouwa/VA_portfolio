function Services() {
  return (
    <section id="services" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">How I support you</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
        <p className="mt-3 max-w-2xl text-base text-slate-700 sm:text-lg">
          Done-for-you backend support so your lessons, programs, and cohorts run smoothly without you chasing files,
          attendance, and admin.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Academic operations</h3>
          <p className="text-base text-slate-700">
            Set up and maintain systems for lesson materials, assessments, and cohort tracking in Google Workspace.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>Lesson and resource organization</li>
            <li>Class and cohort coordination</li>
            <li>Deadline and session tracking</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Data and attendance</h3>
          <p className="text-base text-slate-700">
            Clean, structured trackers that show at a glance who&apos;s engaging, where support is needed, and how your
            program is performing.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>Attendance dashboards in Google Sheets</li>
            <li>Automated percentage calculations</li>
            <li>Notes for performance and feedback</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Program support</h3>
          <p className="text-base text-slate-700">
            Behind-the-scenes coordination for live sessions, bootcamps, and learning communities, so participants feel
            guided and supported.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>Session coordination and reminders</li>
            <li>Documentation and recap support</li>
            <li>Simple reporting for stakeholders</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
