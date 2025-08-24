import React from 'react';

import Navbar from './Layout/Navbar.jsx';
import Hero from './Components/Hero.jsx';

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      
      <Navbar />
      <Hero />
      <div className="text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Anime Database!</h1>
        <p>Your anime search results and details will appear here.</p>
      </div>
    </div>
  );
};

export default App;