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
      window.history.back();
    }, 5000);

    return () => clearInterval(interval);
  }, []);




  return (
    <div className="min-h-screen  flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="text-yellow-500 w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">404</h1>
          <p className="text-xl text-center text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-center text-gray-500 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <p className="text-center text-gray-500 font-semibold mb-8">
            You will be redirected back in {timer} seconds.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
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