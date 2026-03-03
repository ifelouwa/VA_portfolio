function Contact() {
  return (
    <section id="contact" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">CONTACT</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
        <p className="mt-3 max-w-2xl text-base text-slate-700 sm:text-lg">
          Ready to hand off the backend work so you can focus on teaching? Share a bit about your classroom, program, or
          academy, and I&apos;ll follow up with next steps.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Direct contact</h3>
          <div className="space-y-3 text-base text-slate-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
              <a
                href="mailto:amaratheaeva01@gmail.com"
                className="mt-1 inline-flex items-center gap-2 text-brandBlueDark hover:text-brandBlue"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                  <rect
                    x="4.75"
                    y="6.75"
                    width="14.5"
                    height="10.5"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.5 8.5 12 12l5.5-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>amaratheaeva01@gmail.com</span>
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/amarachi-emeka-eze/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-brandBlueDark hover:text-brandBlue"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                  <rect
                    x="4.75"
                    y="4.75"
                    width="14.5"
                    height="14.5"
                    rx="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="9" cy="10" r="1" fill="currentColor" />
                  <path
                    d="M9 14.75v-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.5 14.75v-1.75a1.5 1.5 0 0 1 3 0v1.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            <p className="text-xs text-slate-600">
              I aim to respond within one business day to collaboration or support inquiries.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <form action="https://formsubmit.co/amaratheaeva01@gmail.com" method="POST" className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">Send Me a Message</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none ring-brandBlue/20 focus:border-brandBlue focus:ring-2"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none ring-brandBlue/20 focus:border-brandBlue focus:ring-2"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-medium text-slate-700">
                What do you need help with?
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none ring-brandBlue/20 focus:border-brandBlue focus:ring-2"
              >
                <option value="Email & Calendar Management">Email & Calendar Management</option>
                <option value="Project Management">Project Management</option>
                <option value="Automation">Automation</option>
                <option value="File Organization">File Organization</option>
                <option value="Design">Design</option>
                <option value="Scheduling">Scheduling</option>
                <option value="Itinerary Management">Itinerary Management</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-700">
                Tell me more about your needs
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full rounded-md border border-slate-200 px-3 py-0.5 text-sm outline-none ring-brandBlue/20 focus:border-brandBlue focus:ring-2"/>
            </div>
            <input type="hidden" name="_subject" value="New portfolio contact" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value={
                typeof window !== 'undefined'
                  ? `${window.location.origin}${window.location.pathname}?submitted=1#contact`
                  : ''
              }
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting Amarachi. Your message has been received and I will get back to you soon."
            />
            <input type="text" name="_honey" className="hidden" />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brandBlue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brandBlueDark sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
