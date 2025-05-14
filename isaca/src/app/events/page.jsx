import React from 'react';

export default function Events() {
  return (
    <div className='flex flex-col items-center'>
      <section className='flex flex-col items-center mt-10'>
        <h1 className="text-4xl text-[#0C2A64] mb-2">Events</h1>
        <p className="text-base mt-2 pb-4">
          Check out our upcoming events. We do about 3-4 events a quarter!
        </p>
        <hr className="w-5/6 border-t border-gray-700 pb-10"/>
      </section>

      {/* <div className="w-9/10 pb-2">
        <iframe
          className="font-dm-mono"
          id="open-web-calendar"
          style={{
            background: "url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat",
            width: "100%",
            height: "500px",
            border: "none"
          }}
          src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?controls=next&controls=previous&controls=date&skin=flat&tabs=&url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2F9caa3bc6075136a8221ba12bc282faa66eefbd514d5634c16ccee8af61295c2d%2540group.calendar.google.com%2Fpublic%2Fbasic.ics"
          sandbox="allow-scripts allow-same-origin allow-top-navigation allow-downloads"
        />
      </div> */}

      <div className="w-9/10 pb-2">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=c3Vubnl0aWFAdXcuZWR1&src=Y19mNDQ4MDBhMjgzNjY0MDM0MDA3ZWEwOWY5ZmE1ZTdmZWE2YTRlYTVjMzdlZGZhOWI1NTliM2FhYzc3NjZlOGIyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y190bWNrcG5yZmtuZ2wxOXFnY2Z1N2JjZXZmc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19lMThiNmU5NzQwZDIzNGNhMzQ0YzNhMmQ0ZDA1ZWRjM2ZjYTI5YTNlOGM0MTljYmVjY2VhNGNkMTNjNzkzZWYwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19hYjA5NjQzc2k3M2podnFsOTNhaGtoNWZyOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=YzhtcW4xajdwYnMyNDBoNzk0bHVuM3JxcXQ0bzdpaDlAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=c3Vubnl0aWFueGluQGdtYWlsLmNvbQ&color=%23a972b8&color=%239cc3be&color=%23cc4f9a&color=%23ccb9c1&color=%237CB342&color=%23A79B8E&color=%23ccb9c1&color=%23C0CA33"
          style={{
            border: "solid 1px #",
            width: "100%",
            height: "90vh",
            frameborder: 0
          }}
        >
        </iframe>
      </div>
    </div>
  );
}
