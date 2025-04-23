export default function Events() {
  return (
    <div className="flex flex-col items-center pt-10 min-h-screen">
      <h1 className="text-4xl font-bold-DM mono text-blue-900 mb-2">Events</h1>
        <p className="text-gray-500 text-md mt-2 pb-10 font-DM Sans">Check out upcoming events. We do about 3-4 events a quarter! ...</p>
          <hr className="w-5/6 border-t border-gray-700 my-4 pb-10" />
            <iframe frameBorder = "0" src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=OWNhYTNiYzYwNzUxMzZhODIyMWJhMTJiYzI4MmZhYTY2ZWVmYmQ1MTRkNTYzNGMxNmNjZWU4YWY2MTI5NWMyZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E"
            style= {{ border: '1px solid #777' }}
            width="1120" 
            height="450" 
            scrolling="no"
            title = "Events"
            ></iframe>
    </div>
  );
}
