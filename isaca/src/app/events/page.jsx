import React from 'react';

export default function Events() {
  return (
    <div className="flex flex-col items-center min-h-screen p-14">
      <section className="mb-4" style = {{padding: "10px 20px",textAlign: "center" }}>
        <h1 className="mb-2">Events</h1>
        <p style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
        }}>
          Check out our upcoming events.
          We usually host 3-4 events per quarter, focused on career development,
          professional networking, and industry panels.
        </p>
      </section>

      <div>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showCalendars=0&showNav=0&showPrint=0&title&src=OWNhYTNiYzYwNzUxMzZhODIyMWJhMTJiYzI4MmZhYTY2ZWVmYmQ1MTRkNTYzNGMxNmNjZWU4YWY2MTI5NWMyZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E"
          style={{borderWidth:'0.6px', borderColor:'#0C2A64'}}
          className = "shadow-md luminousity rounded-2xl"
          color='#005288'
          width="1000"
          height="550"
        >
        </iframe>
      </div>
    </div>
  );
}
