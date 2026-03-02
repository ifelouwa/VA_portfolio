import aboutImg from '../img/Amarachi.jpg'

function About() {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-center">
      <div className="relative overflow-hidden rounded-2xl bg-brandBlue/5 p-4 shadow-sm ring-1 ring-brandBlue/10">
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-brandBlue/10 sm:h-80">
          <img
            src={aboutImg}
            alt="Amarachi working in a digital learning environment"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">About Amarachi</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-brandGold" />
        </div>
        <p className="text-base text-slate-700 sm:text-lg">
          I&apos;m Amarachi P. Emeka-Eze, a detail-driven Administrative Virtual Assistant based in Lagos, 
          Nigeria, with a passion for bringing order to the professional lives of busy founders and executives.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
          My background spans academic administration, social media and project management, 
          and formal VA training through TechCrush Academy (accredited by the American Council of Training and Development, USA) 
          and the She Leads Africa BoostHer Executive Virtual Assistance Program.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
          These experiences didn't just teach me tools, they taught me how to think strategically, 
          act proactively, and protect my client's time like it's my own.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
          I work with founders, startup teams, and CEOs who need more than someone to tick boxes. 
          They need a thinking partner who anticipates needs, solves problems quietly, 
          and keeps everything running smoothly behind the scenes.
        </p>
        <p className="text-base text-slate-700 sm:text-lg">
          When I'm not organizing inboxes or building workflows, 
          I'm sharpening my communication and analytical skills through my B.A. in English Language at Lagos State University of Education.
        </p>
        <p className="text-base text-slate-700 sm:text-lg font-bold italic">
          I don't just support your business. I help it breathe.
        </p>
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-brandBlue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brandBlueDark"
            >
              Work With Me
            </a>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default About
