import React, {useEffect} from 'react';
import { AlertTriangle } from 'lucide-react';

const NotFound404 = () => {
  const [timer, setTimer] = React.useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      
      if (document.referrer.includes('helpcodeit.com')) {
        window.location.href = document.referrer;
      } else {
        window.location.href = '/';
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);




  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-yellow-500" />
          </div>
          <h1 className="mb-2 text-4xl font-bold text-center text-gray-800">404</h1>
          <p className="mb-8 text-xl text-center text-gray-600">Oops! Page not found</p>
          <p className="mb-8 text-center text-gray-500">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <p className="mb-8 font-semibold text-center text-gray-500">
            You will be redirected back in {timer} seconds.
          </p>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;