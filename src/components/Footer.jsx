function Footer() {
  return (
    <footer className="border-t border-brandBlue/30 bg-brandBlueDark py-6 text-sm text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <p className="text-xs text-slate-100">
          {/* © 2025 Primordial Core. All rights reserved. Website for Amarachi P. Emeka-Eze. */}
          © 2026 Amarachi P. Emeka-Eze. All rights reserved. | Designed with intention.
        </p>
        <div className="flex items-center gap-3 text-sm">
          <a
            href="mailto:amaratheaeva01@gmail.com"
            className="inline-flex items-center gap-1.5 text-brandGold hover:text-slate-100"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
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
            <span>Email</span>
          </a>
          <span className="h-1 w-1 rounded-full bg-brandGold" />
          <a
            href="https://www.linkedin.com/in/amarachi-emeka-eze/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-brandGold hover:text-slate-100"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
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
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
