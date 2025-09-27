"use client";

import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/video-image.png')" }}
        />
        <div className="absolute inset-0 bg-[#171718] bg-opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {!isPlaying ? (
          <div className="video-player">
            <button 
              onClick={() => setIsPlaying(true)}
              className="group relative"
              aria-label="Play video"
            >
              <svg width="86" height="86" viewBox="0 0 86 86" fill="none" className="hover:scale-110 transition-transform">
                <circle cx="43" cy="43" r="43" fill="#F0F0F0" fillOpacity="0.1"/>
                <circle cx="43" cy="43" r="42" stroke="#F0F0F0" strokeWidth="2"/>
                <path d="M35 29L57 43L35 57V29Z" fill="#F0F0F0"/>
              </svg>
            </button>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              {/* Placeholder for video - replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p>Video Player Placeholder</p>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}