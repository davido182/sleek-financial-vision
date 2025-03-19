
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-finance-blue/10 flex items-center justify-center">
          <div className="text-4xl font-bold text-finance-blue">404</div>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-finance-darkblue">Page not found</h1>
        <p className="text-finance-gray mb-8">
          We couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-finance-blue text-white font-medium shadow-sm hover:shadow-md hover:bg-finance-blue/90 transition duration-300 ease-in-out active:scale-95"
        >
          <ArrowLeft size={18} />
          <span>Back to Homepage</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
