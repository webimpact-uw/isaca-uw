'use client'

import React from 'react';
import { useState, useEffect } from "react";

export default function Events() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth - 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      <div className="hidden md:block" id="large-calendar">
       <iframe src="https://calendar.google.com/calendar/embed?src=5d91a9f1ad306eb88105801f540046847dad65e98f846c436c71369258bbaeba%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          style={{borderWidth:'0.6px', borderColor:'#0C2A64'}}
          className = "shadow-md luminousity rounded-2xl"
          color='#005288'
          width="1000"
          height="550"
        ></iframe>
      </div>

      <div className="md:hidden" id="small-calendar">
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&mode=AGENDA&src=NWQ5MWE5ZjFhZDMwNmViODgxMDU4MDFmNTQwMDQ2ODQ3ZGFkNjVlOThmODQ2YzQzNmM3MTM2OTI1OGJiYWViYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23c0ca33"
          style={{borderWidth:'0.6px', borderColor:'#0C2A64'}}
          className = "shadow-md luminousity rounded-2xl"
          color='#005288'
          width="330"
          height="500"
        ></iframe>
      </div>
    </div>
  );
}
