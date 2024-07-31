import React from 'react';
import { CalendarDays, Calendar, Clock, CalendarCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import events from '@subComponents/Events';

const eventsData = events;

const EventCard = ({ event }) => (
  <div className="bg-white dark:text-black shadow-md rounded-lg p-6 mb-4 mx-4 dark:border-none border border-1 border-gray-300">
    <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
    <div className="flex items-center mb-2">
      <CalendarDays className="w-5 h-5 mr-2 text-gray-600" />
      <span>{event.date}</span>
    </div>
    <div className="flex items-center mb-2">
      <Clock className="w-5 h-5 mr-2 text-gray-600" />
      <span>{event.time}</span>
    </div>
    <p className="mb-4 text-gray-700">{event.description}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="font-semibold text-green-600">${event.cost} registration fee</span>
      </div>
      <button className="w-fit bg-blue-700 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
      aria-label='Register Now button'>
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
);

const UpcomingEvents = ({ limit = Infinity, title = "Upcoming Events" }) => {
  // Sort events by date
  let sortedEvents = [...eventsData].sort((a, b) => new Date(a.ISOdate) - new Date(b.ISOdate));
  sortedEvents = sortedEvents.filter((event) => event.show);

  // Limit the number of events
  const limitedEvents = sortedEvents.slice(0, limit);

  return (
    <div className=" mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
      <div className="flex justify-between">
        {limitedEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      {limitedEvents.length === 1 &&     <div className='flex justify-center items-center'>
    <Link
      to="/schedule-meeting"
      className="inline-flex items-center px-6 py-3 text-base font-medium  shadow-md hover:text-blue-700 dark:border-none border border-1 border-gray-300 rounded-3xl"
    >
      <Calendar className="w-5 h-5 mr-2 " />
      More Events...
    </Link>
  </div>}
    </div>
  );
};

export default UpcomingEvents;