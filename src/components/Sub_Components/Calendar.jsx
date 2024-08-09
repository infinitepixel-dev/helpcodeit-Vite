import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import events from './Events'
import EventCard from './EventCard'

function Calendar() {
    function convertDates() {
        let convertedEvents = []
        events.forEach((event) => {
            if (event.show) {
                event.start = event.ISOdate
                event.title
                event.url = event.link

                convertedEvents.push(event)
            }
        })
        return convertedEvents
    }

    const convertedEvents = convertDates()

    return (
        <div className="container z-30 mb-32">
            <h1 className="mt-10 text-center text-5xl font-bold">
                Upcoming Events
            </h1>
            <EventCard />

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={convertedEvents}
                //event click goes to schedule event link in the object
                eventClick={(info) => {
                    window.open(info.event.extendedProps.link, '_blank')
                }}
            />
        </div>
    )
}

export default Calendar
