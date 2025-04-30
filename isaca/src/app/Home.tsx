import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* Intro */}
      <section className="grid md:grid-cols-2 items-end gap-8">
          <div>
            <h1 className="text-5xl font-semibold text-[#0C2A64]">
              Promoting Student Engagement in Information Security
            </h1>

            <div className="mt-3 flex items-center space-x-4">
              <p className="text-2xl text-[#0C2A64]">ISACA UW Chapter</p>
              
              <div className="inline-flex items-center bg-[#D4EAF1] rounded-full px-4 py-2">
                <img src="ischool.png" alt="iSchool Logo" className="w-6 h-6 mr-2" />
                
                <span className="text-lg font-medium text-[#0C2A64]">
                  iSchool affiliated RSO
                </span>
              </div>
            </div>
          </div>

          <img src="imgs/event1.jpeg" alt="Event 1" className="w-full h-auto rounded-lg shadow-lg object-cover" />
        </section>

        {/* About Us */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <img src="imgs/event2.jpeg" alt="Event 2" className="w-full h-auto rounded-lg shadow-lg object-cover"/>

          <div>
            <h2 className="text-3xl font-semibold text-[#0C2A64]">
              About Us
            </h2>

            <p className="mt-4 text-[#0C2A64]">
              ISACA is a global professional association focused on IT governance,
              risk management, cybersecurity, and assurance.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center px-4 py-2 border border-[#619DC5] text-[#0C2A64] font-medium rounded hover:bg-[#D4EAF1]"
            >
              learn more

              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#0C2A64]">
            Upcoming Events
          </h2>

          <Link
            href="/events"
            className="inline-flex items-center px-4 py-1 border border-[#619DC5] text-[#0C2A64] rounded hover:bg-[#D4EAF1]"
          >
            view all

            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 12h14m-7-7l7 7-7 7" 
              />
            </svg>
          </Link>

          <div className="flex space-x-6 overflow-x-auto pb-2">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="min-w-[260px] p-6 border border-[#0C2A64] rounded-lg flex-shrink-0 space-y-3"
              >
                <h3 className="font-mono text-lg text-[#0C2A64]">
                  Event Name, Event Name
                </h3>

                <p className="text-[#0C2A64]">Location</p>

                <p className="text-[#0C2A64]">XX/XX/XX at XX:XX</p>

                <button className="px-3 py-1 border border-[#619DC5] text-[#0C2A64] rounded hover:bg-[#D4EAF1] text-sm">
                  RSVP
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Follow Us */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#0C2A64]">Follow Us</h2>
            
            <p className="text-[#0C2A64]">
              Follow us on socials to keep up with our events and announcements.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/isacauw/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#619DC5] text-[#0C2A64] rounded hover:bg-[#D4EAF1]"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/isaca-university-of-washington-student-chapter/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#619DC5] text-[#0C2A64] rounded hover:bg-[#D4EAF1]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <img src="imgs/event3.jpeg" alt="Event 3" className="w-full h-auto rounded-lg shadow-lg object-cover" />
      </section>
    </main>
  );
}
