import React from 'react';
import { CalendarDays, Clock, CalendarCheck2 } from 'lucide-react';
import events from '../Sub_Components/Events';


const eventsData = events;


const EventCard = ({ event }) => (
  <div className="bg-white dark:text-black shadow-md rounded-lg p-6 mb-4">
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
      <button className="w-fit bg-blue-700 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300" >
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center "
      >
        Register

        <CalendarCheck2 size={24} className="ml-1" />
      </a>
      </button>
    </div>
  </div>
);

const UpcomingEvents = () => {
  // Sort events by date
  const sortedEvents = [...eventsData].sort((a, b) => new Date(a.ISOdate) - new Date(b.ISOdate));

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      {sortedEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default UpcomingEvents;