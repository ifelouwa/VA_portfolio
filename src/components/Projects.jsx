import scheduleimg from '../img/schedule.png'
import dataentry from '../img/dataentry.jpg'
import pjm from '../img/pjm.jpg'

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
              src={scheduleimg}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Automated Scheduling System with Calendly
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              The client was losing hours managing back-and-forth emails to schedule discovery calls with potential clients.
            </p>
            <h3 className="text-base font-semibold text-slate-900">
              What I Did:
            </h3>
            <p className="text-base text-slate-700">
              I set up a branded Calendly page with 30-minute discovery slots, 
              added intake questions to qualify leads, included buffer times between meetings, 
              and configured automated confirmation emails.
            </p>
            <h3 className="text-base font-semibold text-slate-900">
              Tools Used:
            </h3>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium">
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Calendly</span>
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Time management</span>
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Video conferencing</span>
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Result:
            </h3>
            <p className="text-base text-slate-700">
              Scheduling became fully automated, eliminating manual coordination 
              and saving several hours per week while improving the client booking experience.
            </p>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={dataentry}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Startup Application Tracking & Data Management System
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              The client was receiving multiple startup applications but lacked a structured system to track 
              submissions, monitor progress, and manage decision-making efficiently..
            </p>
            <h3 className="text-base font-semibold text-slate-900">
              What I Did:
            </h3>
            <p className="text-base text-slate-700">
              I created a structured Google Sheets database to capture key startup 
              information including founder details, sector, funding stage, and funding requests.
            </p>
            <h3 className="text-base font-semibold text-slate-900">
              Tools Used:
            </h3>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium">
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Google Sheets</span>
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Database management</span>
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Result:
            </h3>
            <p className="text-base text-slate-700">
              The client could now track all applications in one centralized system, 
              quickly filter startups by sector or stage, and monitor application progress without confusion or manual errors.
            </p>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={pjm}
              alt="Project Management in Trello"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Project Management in Trello
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              The client was receiving multiple startup applications but lacked a structured system to track 
              submissions, monitor progress, and manage decision-making efficiently..
            </p>
            <h3 className="text-base font-semibold text-slate-900">
              What I Did:
            </h3>
            <p className="text-base text-slate-700">
              I created a structured Google Sheets database to capture key startup 
              information including founder details, sector, funding stage, and funding requests.
            </p>
            <h3 className="text-base font-semibold text-slate-900">
              Tools Used:
            </h3>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium">
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Google Sheets</span>
              <span className="rounded-full bg-brandBlue px-3 py-1 text-white">Database management</span>
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Result:
            </h3>
            <p className="text-base text-slate-700">
              The client could now track all applications in one centralized system, 
              quickly filter startups by sector or stage, and monitor application progress without confusion or manual errors.
            </p>
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
