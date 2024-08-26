import { useState, useEffect, useRef } from 'react'
import propTypes from 'prop-types'
import axios from 'axios'
import { gsap } from 'gsap'

const BandsInTownEvents = ({ artistName }) => {
    const [events, setEvents] = useState([])
    const [eventDates, setEventDates] = useState([])
    const eventListRef = useRef(null)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const appId = 'YOUR_APP_ID' // Replace with your Bandsintown App ID
                const response = await axios.get(
                    `https://rest.bandsintown.com/artists/${artistName}/events?app_id=${appId}`
                )

                setEvents(response.data)
                const dates = response.data.map(
                    (event) => new Date(event.datetime)
                )
                setEventDates(dates)
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        }

        fetchEvents()
    }, [artistName])

    useEffect(() => {
        // GSAP animation when events load
        if (events.length > 0) {
            gsap.fromTo(
                eventListRef.current.children,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
            )
        }
    }, [events])

    return (
        <div className="mt-4 min-h-screen rounded-lg bg-gray-900 px-4 py-10 text-white">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Events for {artistName}
            </h1>
            <div className="mx-auto max-w-4xl">
                <ul ref={eventListRef}>
                    {events.length > 0 ? (
                        events.map((event) => (
                            <li
                                key={event.id}
                                className="relative mb-6 rounded-lg bg-gray-800 p-6 shadow-lg"
                            >
                                <p className="text-xl font-semibold">
                                    {event.venue.name} -{' '}
                                    {new Date(
                                        event.datetime
                                    ).toLocaleDateString()}
                                </p>
                                <p className="text-lg">
                                    {event.venue.city}, {event.venue.country}
                                </p>
                                {/* RSVP Button */}
                                <a
                                    href={event.url} // RSVP link provided by the event object
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rsvp-button absolute right-6 top-6 inline-block transform rounded-lg bg-green-500 px-4 py-2 font-bold text-white transition duration-300 hover:scale-105 hover:bg-green-600"
                                >
                                    RSVP
                                </a>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-xl">
                            No upcoming events found.
                        </p>
                    )}
                </ul>

                <h2 className="mb-4 mt-10 text-center text-2xl font-semibold">
                    Event Dates
                </h2>
                <ul className="flex flex-wrap justify-center gap-4">
                    {eventDates.map((date, index) => (
                        <li
                            key={index}
                            className="rounded-lg bg-indigo-500 px-4 py-2 text-lg font-medium"
                        >
                            {date.toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

BandsInTownEvents.propTypes = {
    artistName: propTypes.string.isRequired,
}

export default BandsInTownEvents
