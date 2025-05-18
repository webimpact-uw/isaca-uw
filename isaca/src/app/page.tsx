// src/app/page.tsx
import Home from './components/Home'
import { fetchCalendarEvents } from './lib/calendar'

export const revalidate = 3600 // seconds; rebuild once per hour

export default async function Page() {
  const events = await fetchCalendarEvents()
  return <Home events={events} />
}
