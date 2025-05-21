import React from 'react';

export default function Events() {
  return (
    <div className="flex flex-col items-center min-h-screen p-14">
      <h1 className="text-4xl font-bold-DM mono text-[#0C2A64] mb-2">Events</h1>
      <p className="text-gray-500 text-md mt-2 pb-10 font-DM Sans">
        Check out upcoming events. We do about 3-4 events a quarter! ...
      </p>
      <hr className="w-5/6 border-t border-gray-700 my-4 " />
      <div>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showCalendars=0&showNav=0&showPrint=0&title&src=OWNhYTNiYzYwNzUxMzZhODIyMWJhMTJiYzI4MmZhYTY2ZWVmYmQ1MTRkNTYzNGMxNmNjZWU4YWY2MTI5NWMyZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E"
       style={{borderWidth:0}}
       className = "shadow-xl luminousity rounded-2xl"
       color='#f4511e'
        width="1100" 
        height="600"  
        scrolling="no"></iframe>
        </div>
    </div>
  );
}
