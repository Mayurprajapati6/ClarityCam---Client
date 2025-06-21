import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My App</h1>
        <p className="text-gray-600 mb-6">
          This is a simple React + TypeScript + TailwindCSS starter.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
