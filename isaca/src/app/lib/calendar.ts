// src/app/lib/calendar.ts
export async function fetchCalendarEvents() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID!
  const apiKey     = process.env.GOOGLE_API_KEY!
  const nowIso     = new Date().toISOString()

  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`
  )
  url.searchParams.set('key', apiKey)
  url.searchParams.set('timeMin', nowIso)
  url.searchParams.set('singleEvents', 'true')
  url.searchParams.set('orderBy', 'startTime')
  url.searchParams.set('maxResults', '5')

  const res  = await fetch(url.toString())
  const data = await res.json()

  return (data.items || []).map((item: any) => ({
    id:       item.id,
    title:    item.summary || 'No title',
    start:    item.start.dateTime ?? item.start.date,
    location: item.location || 'TBD',
    link:     item.htmlLink,
  }))
}
