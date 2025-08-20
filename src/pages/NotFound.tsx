import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-cargo-blue">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-x-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-cargo-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 mb-4">Looking for cargo services to Pakistan?</p>
          <Link
            to="/services"
            className="text-cargo-blue hover:text-cargo-orange font-semibold"
          >
            View Our Services →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;