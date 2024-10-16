import propTypes from 'prop-types'
import {
    parseISO,
    formatDistanceToNow,
    differenceInDays,
    //  isAfter
} from 'date-fns'

import { CalendarDays, ArrowUpRight, Clock, CalendarCheck2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import events from '@subComponents/Events'

const eventsData = events

function provideRelativeTime(date) {
    const now = new Date()
    const eventDate = parseISO(date)
    const relativeTime = formatDistanceToNow(eventDate, { addSuffix: true })
    const daysUntilEvent = differenceInDays(eventDate, now)
    return { relativeTime, daysUntilEvent }
}

const EventCard = ({ event }) => (
    <div className="border-1 mx-5 mb-4 h-fit rounded-lg border border-gray-300 bg-white p-6 shadow-md dark:border-none dark:text-black">
        <h2 className="mb-2 text-2xl text-balance text-center barlow-semi-condensed-regular">{event.title}</h2>

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
            <span className={'mr-1 text-sm barlow-semi-condensed-bold'}>
                <span className="text-sm barlow-semi-condensed-bold">
                    Event is {provideRelativeTime(event.ISOdate).relativeTime}
                </span>{' '}
                on {event.date}
            </span>
        </div>
        <div className="mb-2 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-gray-600" />
            <span className='barlow-semi-condensed-bold text-sm'>{event.time}</span>
        </div>
        <p className="mb-4 text-gray-700 text-base barlow-semi-condensed-regular">{event.description}</p>
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <span className="barlow-semi-condensed-bold text-green-600">
                    ${event.cost} registration fee
                </span>
            </div>
            <button
                className="barlow-semi-condensed-semibold text-xl flex items-center  text-blue-500 hover:text-blue-800 "
                aria-label="Register Now button"
            >
                <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    Register Now
                    <CalendarCheck2 size={24} className="ml-1" />
                </a>
            </button>
        </div>
    </div>
)

const UpcomingEvents = ({
    limit = Infinity,
    // title = 'Upcoming Events'
}) => {
    // console.log('Title: ', title)

    // Sort events by date
    let sortedEvents = [...eventsData].sort(
        (a, b) => new Date(a.ISOdate) - new Date(b.ISOdate)
    )
    sortedEvents = sortedEvents.filter(
        (event) => event.show && event.ISOdate >= new Date().toISOString()
    )
    // console.log('Sorted Events: ', sortedEvents)
    // Limit the number of events
    const limitedEvents = sortedEvents.slice(0, limit)

    // console.log('Limited Events: ', limitedEvents)
    return (
        <div className="mt-8">
            <div
                className={
                    limit > 1
                        ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
                        : 'grid grid-cols-1'
                }
            >
                {limitedEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            {limitedEvents.length === 1 && (
                <div className="flex items-center justify-center">
                    <Link
                                to="/calendar"
                                className="barlow-semi-condensed-semibold mb-8 flex items-center text-lg text-blue-500 hover:text-blue-800 dark:text-blue-400 hover:dark:text-blue-600"
                            >
                                See More Events{' '}
                                <ArrowUpRight className="ml-1" />
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
