import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import events from './Events'
import EventCard from './EventCard'

function Calendar() {
    function convertDates() {
        let convertedEvents = [];
        events.forEach((event) => {
            if (event.show) {
                event.start = event.ISOdate;
                event.title = event.title;
                event.url = event.link;


                convertedEvents.push(event);
            }
        });
        return convertedEvents;
    }

    const convertedEvents = convertDates();

    return (
        <div className="container mb-32 z-30">
            <h1 className="text-5xl font-bold text-center mt-10">Upcoming Events</h1>
            <EventCard />

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={convertedEvents}
                // event click goes to schedule event link in the object
                // eventClick={(info) => {
                //     window.open(info.event.extendedProps.link, '_blank');
                // }
            // }
            />
        </div>
    );
}

export default Calendar;