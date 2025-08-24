import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-[500px] bg-cover bg-center rounded-b-lg shadow-lg overflow-hidden"
      style={{ backgroundImage: `url('https://i.imgur.com/G5g208B.jpg')` }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
      
      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
        
        {/* Anime Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
          Rent-a-Girlfriend
        </h1>

        {/* Metadata */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300 drop-shadow-md">
          <span className="bg-gray-800 bg-opacity-70 px-2 py-1 rounded-full text-xs font-semibold">
            16+
          </span>
          <span>Sub | Dub | Comedy, Harem, Romance, Shonen</span>
        </div>

        {/* Synopsis */}
        <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mb-6 drop-shadow-lg">
          Kinoshita Kazuya is a 20-year-old failure of a college student. He managed to kiss his girlfriend once, but was dumped after a month...
        </p>

        {/* Action Button */}
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 self-start shadow-xl">
          Start Watching S1 E1
        </button>

      </div>
    </section>
  );
};

export default Hero;