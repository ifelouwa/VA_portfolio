import email from '../img/email.jpg'
import dataentry from '../img/dataentry.jpg'
import file from '../img/file.jpg'
import trello from '../img/trello.jpg'
import schedule from '../img/schedule.png'
import airtable from '../img/airtable.png'
import itinerary from '../img/itinerary.jpg'


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
              src={email}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Calendar & Inbox Management System
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              A startup foundry CEO was missing investor emails and double-booking founder sessions. <br />
              I built a full Gmail label system, set up priority filters, and 
              designed a structured 1-week executive calendar with protected focus 
              time turning inbox chaos into a system that runs itself.
            </p>
             <a
              href="https://drive.google.com/drive/folders/1_lM6UFyuQsF1Hgirnxjh5wmSneLlNWsS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
            >
              <span>View Project Samples</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
              Data Entry & Dashboard Summary
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              Startup applications were coming in with no organized system to track them. <br />
              I built a Google Sheets tracker with dropdown validation and color-coded statuses.
            </p>
             <a
              href="https://drive.google.com/drive/folders/1xbVsN-K6vS08bl-mzpRC5Jamezi7lZeL?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
            >
              <span>View Project Samples</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={file}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              File Organization with Google Drive
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
               The client's Google Drive was a scattered mess of pitch decks, 
               contracts, and founder documents with no naming system. <br />
               I built a structured folder architecture for 10 startup clients, 
               created a consistent file naming convention, and produced a 
               Master File Index document for instant navigation
            </p>
             <a
              href="https://drive.google.com/drive/folders/1BBw1u2TlLQiv4Hq3NC-Iu1f4CD2IvHKX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
            >
              <span>View Project Samples</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={trello}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Project Management with Trello
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              The foundry was managing 10 African startups had no way to track each company's progress. <br />
              I built a Trello pipeline board with 7 stages, sector-coded labels, milestone checklists, 
              and due dates so the client could see exactly where every startup stood at any given moment.
            </p>
             <a
              href="https://drive.google.com/drive/folders/1rCnrgCLcCSvyUGKdmRN50Atrn9sdo352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
            >
              <span>View Project Samples</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={schedule}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Scheduling with Calendly
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              The client was losing hours to back-and-forth emails just to schedule founder calls. <br />
              I set up a branded Calendly page with 30-minute discovery call slots, intake questions, 
              buffer time, and automated confirmation emails  eliminating scheduling friction entirely.
            </p>
             <a
              href="https://drive.google.com/drive/folders/1wIYefsMIwzFescstvIKd6iDom-mCWeTL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
            >
              <span>View Project Samples</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={airtable}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Automation with Tally & Airtable
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              Every new startup application was being manually copied into a spreadsheet, 
              a slow, error-prone process. <br /> I connected a 
              <a
              href="https://tally.so/r/obAAGN"
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 font-semibold text-brandBlue hover:brandBlueDark"
              >Tally</a>
              application form directly to an 
              Airtable database so that every submission automatically populates 
              a live record with zero manual input required.
            </p>
             <a
              href="https://drive.google.com/drive/folders/1AH1vJ6S6V2c61IrhIuUbkZxS8xY3x-H8?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
            >
              <span>View Project Samples</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="h-48 w-full bg-slate-200">
            <img
              src={itinerary}
              alt="Attendance tracker in Google Sheets"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-brandBlue">
              Itinerary Management
              <span className="h-1 w-8 rounded-full bg-brandGold" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Scenario:
            </h3>
            <p className="text-base text-slate-700">
              The client needed to travel across Lagos and Nairobi for investor meetings 
              and a founder summit with no plan in place. <br /> I built a complete 5-day travel 
              itinerary covering flights, hotel, a day-by-day schedule, local transport, 
              and emergency contacts in both a clean Google Doc and a branded Canva visual document.
            </p>
             <a
              href="https://drive.google.com/drive/folders/16PtcqSFHHFsDYIUKFcZkNRtk9GMa6N9C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
            >
              <span>View Project Samples</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
        {/* <article className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-brandBlue/30 bg-brandBlue/5 p-8 text-center transition-all hover:border-brandBlue/50 hover:bg-brandBlue/[0.08]">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brandBlue text-white shadow-md">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Want to see more?</h3>
            <p className="max-w-xs text-sm text-slate-600">
              I have a collection of project samples, templates, and case studies available for review.
            </p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-brandBlueDark"
          >
            <span>View Project Samples</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
            Google Drive Samples
          </p>
        </article> */}
      </div>
    </section>
  )
}

export default Projects
