import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const EventModal = ({ eventObject, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-lg p-6 mx-4 bg-white rounded-xl shadow-2xl animate-fade-in">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          {eventObject.title} Registration is still open
        </h2>
        
        <p className="mb-2 text-gray-700">
          Don't miss out on this workshop on {eventObject.date}
        </p>
        <p className="mb-4 text-gray-700">{eventObject.time}</p>
        
        <div className="mb-6">
          <p className="text-gray-700 text-balance leading-relaxed">{eventObject.description}</p>
        </div>
        <a 
            href={eventObject.link} 
            className="text-xl font-bold text-blue-600 hover:text-blue-800"
            target="_blank" 
            rel="noopener noreferrer"
        >
            Register here
            <ArrowUpRight className="inline-block ml-2" />
        </a>
        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button 
            onClick={onClose}
            className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;