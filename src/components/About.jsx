function About() {
  return (
    <section id="about" className=" lg:items-center">
      {/* <div className="relative overflow-hidden rounded-2xl bg-brandBlue/5 p-4 shadow-sm ring-1 ring-brandBlue/10">
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-brandBlue/10 sm:h-80">
          <img
            src={aboutImg}
            alt="Amarachi working in a digital learning environment"
            className="h-full w-full object-cover"
          />
        </div>
      </div> */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">ABOUT Amarachi</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
        </div>
        <p className="text-base text-slate-700 sm:text-lg">
          I&apos;m Amarachi P. Emeka-Eze, an Administrative Virtual Assistant based in Lagos, Nigeria, 
          focused on helping founders and executives regain control of their time and operations.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
          With a background in academic administration, project coordination, and social media management, 
          I&apos;ve developed systems that keep workflows organized, communication clear, and priorities on track. 
          My training through TechCrush Academy and the BoostHer Executive VA Program strengthened not just my technical skills, 
          but my ability to think ahead, spot gaps, and take initiative without constant supervision.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
         I work with founders and startup teams who are overwhelmed with moving parts 
         and need someone they can rely on to bring structure, consistency, and calm into their daily operations.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
          Whether it&apos;s managing schedules, organizing data, or streamlining processes, 
          I focus on making work easier, faster, and more efficient behind the scenes.
        </p>
        <p className="text-base text-slate-700 sm:text-lg font-bold italic text-center">
          I don't just support your business. I help it breathe.
        </p>
        <dl className="text-sm sm:grid-cols-2">
          <div className="text-center">
            <button
            onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/amaratheaeva01/discovery-call' })}
            className="rounded-full bg-brandBlue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brandBlueDark"
            >
              Work With Me
            </button>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default About
