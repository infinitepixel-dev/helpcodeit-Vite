import React, { useState, useEffect, useRef } from 'react';
import { XCircle } from 'lucide-react';

const AlertMessage = ({ message, type = 'info', onClose, duration = 5000, speed = 10 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const colors = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-600 text-white',
  };

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      // Set initial position
      content.style.transform = `translateX(${container.offsetWidth}px)`;

      const animateTicker = () => {
        const containerWidth = container.offsetWidth;
        const contentWidth = content.offsetWidth;
        const currentPosition = parseFloat(content.style.transform.replace('translateX(', '').replace('px)', ''));

        if (currentPosition < -contentWidth) {
          // Reset position when the content is fully off-screen
          content.style.transform = `translateX(${containerWidth}px)`;
        } else {
          // Move content to the left
          content.style.transform = `translateX(${currentPosition - 1}px)`;
        }
      };

      const intervalId = setInterval(animateTicker, speed);

      return () => clearInterval(intervalId);
    }
  }, [speed, message]);

  if (!isVisible) return null;

  return (
    <div className={`fixed z-50 bottom-8 left-0 right-0 p-4 ${colors[type]} flex items-center justify-between`}>
      <div ref={containerRef} className="flex-grow overflow-hidden relative h-6">
        <div
          ref={contentRef}
          className="whitespace-nowrap absolute top-0 font-bold text-lg"
        >
          {message}
        </div>
      </div>
      <button onClick={() => { onClose(); setIsVisible(false); }} className="flex-shrink-0 ml-4 focus:outline-none">
        <XCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AlertMessage;