import propTypes from 'prop-types'

import { CalendarDays, Calendar, Clock, CalendarCheck2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import events from '@subComponents/Events'

const eventsData = events

const EventCard = ({ event }) => (
    <div className="border-1 mx-5 mb-4 h-fit rounded-lg border border-gray-300 bg-white p-6 shadow-md dark:border-none dark:text-black">
        <h2 className="mb-2 text-xl font-semibold">{event.title}</h2>

        {event.youtubeEmbed && (
            <div className="mb-4">
                <div
                    dangerouslySetInnerHTML={{
                        __html: event.youtubeEmbed,
                    }}
                />
            </div>
        )}

        <div className="mb-2 flex items-center">
            <CalendarDays className="mr-2 h-5 w-5 text-gray-600" />
            <span>{event.date}</span>
        </div>
        <div className="mb-2 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-gray-600" />
            <span>{event.time}</span>
        </div>
        <p className="mb-4 text-gray-700">{event.description}</p>
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <span className="font-semibold text-green-600">
                    ${event.cost} registration fee
                </span>
            </div>
            <button
                className="w-fit rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition duration-300 hover:bg-red-700"
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

    // Limit the number of events
    const limitedEvents = sortedEvents.slice(0, limit)

    return (
        <div className="mt-8">
            <div className="flex justify-between">
                {limitedEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            {limitedEvents.length === 1 && (
                <div className="flex items-center justify-center">
                    <Link
                        to="/calendar"
                        className="border-1 mb-5 inline-flex items-center rounded-3xl border border-gray-300 bg-blue-700 px-6 py-3 text-base font-bold text-white shadow-md dark:border-none"
                    >
                        <Calendar className="mr-2 h-5 w-5" />
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
