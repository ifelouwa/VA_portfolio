function Skills() {
  const getToolIcon = (tool) => {
    if (tool === 'Google Drive') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <path
            d="M9 4.75 5 11.75l2.25 3.5h4L15 11.75l-2.25-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    if (tool === 'Google Docs') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <path
            d="M9 4.75h5.25L18 8.5v9.75H9z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10.5 11h4M10.5 13.25h3M10.5 15.5h2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    }

    if (tool === 'Google Sheets') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <rect
            x="6"
            y="5.5"
            width="12"
            height="13"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 5.5v13M13 5.5v13M6 10h12M6 13.5h12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      )
    }

    if (tool === 'Zoom') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <rect
            x="4.75"
            y="7"
            width="9.5"
            height="8.5"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M14.25 10.25 19 8.5v7l-4.75-1.75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    if (tool === 'CapCut') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <rect
            x="5"
            y="7"
            width="14"
            height="10"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 9.5h6M7 12h4.5M7 14.5h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    }
    
    if (tool === 'Zappier') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <rect
            x="5"
            y="6"
            width="14"
            height="12"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 9.5 14 12l-4 2.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    if (tool === 'Slack') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <path
            d="M9 5.5v2.5M9 10.25v2.5M9 7.75h-2.5M9 12.5h-2.5M15 5.5v2.5M15 10.25v2.5M15 7.75h2.5M15 12.5h2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      )
    }

    if (tool === 'Telegram') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12.25 14.75 9.5 13 15l-2.25-1.75L11 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    if (tool === 'Google Calender') {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brandBlue" aria-hidden="true">
          <path
            d="M6 10h7.5M6 14h7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M13.5 9 16 10 13.5 11M13.5 13 16 14l-2.5 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-brandBlue" aria-hidden="true">
        <circle
          cx="12"
          cy="8.5"
          r="2.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7.75 17.25a4.25 4.25 0 0 1 8.5 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  const coreSkills = [
    'Administrative support',
    'File management',
    'Google Workspace',
    'Zoom session support',
    'CapCut and Clipchamp',
    'Time management',
    'Invoicing and reporting',
    'Team collaboration',
  ]

  const tools = [
    'Google Drive',
    'Google Docs',
    'Google Sheets',
    'Zoom',
    'CapCut',
    'Zappier',
    'Slack',
    'Telegram',
    'Google Calender',
  ]

  return (
    <section id="skills" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Skills and tools</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Core skills</h3>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((item) => (
              <span
                key={item}
                className="rounded-full bg-brandBlue px-3 py-1 text-sm font-medium text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Tools</h3>
          <div className="grid grid-cols-3 gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className="flex flex-col items-start gap-1 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <span className="h-1 w-6 rounded-full bg-brandBlue/60" />
                <span className="inline-flex items-center gap-2">
                  {getToolIcon(tool)}
                  <span>{tool}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
