function Services() {
  return (
    <section id="services" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">WHAT I DO BEST</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
        <p className="mt-3 max-w-2xl text-base text-slate-700 sm:text-lg">
          Every service I offer is designed around one goal: giving you back the hours you deserve, 
          while making sure nothing ever falls through the cracks.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Email & Calendar Management</h3>
          <p className="text-base text-slate-700">
            Your inbox is not a to-do list and it shouldn't feel like one. 
            I bring structure, priority, and clarity to your emails and calendar so you never miss what matters 
            and always show up to every meeting fully prepared.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>Lesson and resource organization</li>
            <li>Class and cohort coordination</li>
            <li>Deadline and session tracking</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Project & Task Management</h3>
          <p className="text-base text-slate-700">
            Using tools like Trello, ClickUp, and Notion, 
            I build and manage systems that keep your team aligned, 
            your deadlines met, and your projects moving forward without you having to chase anyone for updates.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>Attendance dashboards in Google Sheets</li>
            <li>Automated percentage calculations</li>
            <li>Notes for performance and feedback</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Automation & Workflow Setup</h3>
          <p className="text-base text-slate-700">
            I connect your tools Zapier, Airtable, 
            Tally, and more to eliminate the repetitive manual tasks eating your hours. 
            Your systems should work for you. I make sure they do.
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
