import React from 'react';
import ForsideVideo from '../assets/ghosthunting.io.mp4';

function VideoPlayer() {
  return (
    <div className="relative w-auto h-screen rounded-lg">
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
        <source src={ForsideVideo} type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-extrabold font-creepster mb-4">Velkommen til Ghosthunting.io</h1>
        <p className="text-lg font-hind-guntur font-semibold">"Sæt kurs mod det ukendte med Ghosthunting.io - Din pålidelige partner i jagten på det overnaturlige!"</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
