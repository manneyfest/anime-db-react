
import React from 'react';

import Navbar from './Layout/NavBar.jsx';

const App = () => {
  return (
    
    <div className="bg-gray-900 min-h-screen">
      
      <Navbar />
      <main className="text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Movie Database!</h1>
        <p>Your movie search results and details will appear here.</p>
      </main>
    </div>
  );
};

export default App;
