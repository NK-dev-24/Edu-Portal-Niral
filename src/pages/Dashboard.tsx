
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-edu-gray-50">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-3xl font-bold text-edu-gray-900 mb-4">Dashboard</h1>
        <p className="text-edu-gray-600 mb-8">
          This is a placeholder for the dashboard page. After successful login, users would be redirected here.
        </p>
        <Link 
          to="/" 
          className="bg-edu-blue-600 text-white px-4 py-2 rounded-md hover:bg-edu-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
