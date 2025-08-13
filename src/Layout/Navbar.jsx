import React, { useState } from 'react';

const Navbar = () => {

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (

    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center relative rounded-b-lg shadow-md">
      <div className="flex items-center space-x-6">
        <a href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-500 transition-colors duration-200">
          AnimeDB
        </a>
        <a href="/new" className="hidden md:block hover:text-gray-400 transition-colors duration-200">New</a>
        <a href="/popular" className="hidden md:block hover:text-gray-400 transition-colors duration-200">Popular</a>
        <div className="relative">
          <button
            onClick={toggleCategories}
            className="hover:text-gray-400 flex items-center focus:outline-none transition-colors duration-200"
          >
            Categories
            <svg
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isCategoriesOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20 overflow-hidden">
              <a href="/categories/adventure" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Adventure</a>
              <a href="/categories/romance" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Romance</a>
              <a href="/categories/action" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Action</a>
              <a href="/categories/fantasy" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Comedy</a>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="/login"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 hidden md:block shadow-md"
        >
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
