import propTypes from 'prop-types'

import { CalendarDays, Calendar, Clock, CalendarCheck2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import events from '@subComponents/Events'

const eventsData = events

const EventCard = ({ event }) => (
    <div className="border-1 border-gray-300 bg-white shadow-md mx-5 mb-4 p-6 border dark:border-none rounded-lg h-fit dark:text-black">
        <h2 className="mb-2 font-semibold text-xl">{event.title}</h2>

        {event.youtubeEmbed && (
            <div className="mb-4">
                <div
                    dangerouslySetInnerHTML={{
                        __html: event.youtubeEmbed,
                    }}
                />
            </div>
        )}

        <div className="flex items-center mb-2">
            <CalendarDays className="mr-2 w-5 h-5 text-gray-600" />
            <span>{event.date}</span>
        </div>
        <div className="flex items-center mb-2">
            <Clock className="mr-2 w-5 h-5 text-gray-600" />
            <span>{event.time}</span>
        </div>
        <p className="mb-4 text-gray-700">{event.description}</p>
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <span className="font-semibold text-green-600">
                    ${event.cost} registration fee
                </span>
            </div>
            <button
                className="bg-blue-700 hover:bg-red-700 px-6 py-3 rounded-full w-fit font-bold text-white transition duration-300"
                aria-label="Register Now button"
            >
                <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    Register
                    <CalendarCheck2 size={24} className="ml-1" />
                </a>
            </button>
        </div>
    </div>
)

const UpcomingEvents = ({ limit = Infinity, title = 'Upcoming Events' }) => {
    console.log('Title: ', title)

    // Sort events by date
    let sortedEvents = [...eventsData].sort(
        (a, b) => new Date(a.ISOdate) - new Date(b.ISOdate)
    )
    sortedEvents = sortedEvents.filter(
        (event) => event.show && event.ISOdate >= new Date().toISOString()
    )
console.log('Sorted Events: ', sortedEvents)
    // Limit the number of events
    const limitedEvents = sortedEvents.slice(0, limit)
    
   console.log('Limited Events: ', limitedEvents)
    return (
        <div className="mt-8">
            <div className={limit > 1 ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3": "grid grid-cols-1" }>
                {limitedEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            {limitedEvents.length === 1 && (
                <div className="flex justify-center items-center">
                    <Link
                        to="/calendar"
                        className="inline-flex items-center border-1 border-gray-300 bg-blue-700 shadow-md mb-5 px-6 py-3 border dark:border-none rounded-3xl font-bold text-base text-white"
                    >
                        <Calendar className="mr-2 w-5 h-5" />
                        More Events...
                    </Link>
                </div>
            )}
        </div>
    )
}

EventCard.propTypes = {
    event: propTypes.object,
}

UpcomingEvents.propTypes = {
    limit: propTypes.number,
    title: propTypes.string,
}

export default UpcomingEvents
