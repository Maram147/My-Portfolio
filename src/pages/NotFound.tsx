import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import notfoundImage from '../assets/images/404 error with a tired person-pana.svg';
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center w-full max-w-md p-6 bg-white rounded-lg shadow-lg shadow-orange-200">
        <img src={notfoundImage} alt="Error" />
        <a href="/" className="text-orange-300 hover:text-orange-500 mt-4 inline-block text-lg font-semibold">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
