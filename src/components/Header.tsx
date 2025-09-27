"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Image 
              src="/assets/logo-sanctus-full.svg" 
              alt="Sanctus Pro Deo" 
              width={200} 
              height={40}
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm">
              <li><a href="#about" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']">About</a></li>
              <li><a href="#videos" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']">Videos</a></li>
              <li><a href="#music" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']">Music</a></li>
              <li><a href="#partners" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']">Partners</a></li>
              <li><a href="#donate" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']">Donate</a></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-[#F0F0F0]"></span>
            <span className="block w-6 h-0.5 bg-[#F0F0F0]"></span>
            <span className="block w-6 h-0.5 bg-[#F0F0F0]"></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#171718] bg-opacity-95 z-50">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-5">
                <Image 
                  src="/assets/logo-sanctus-full.svg" 
                  alt="Sanctus Pro Deo" 
                  width={150} 
                  height={30}
                  className="h-6 w-auto"
                />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#F0F0F0]"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              
              <nav className="flex-1 px-5">
                <ul className="space-y-8 text-lg">
                  <li><a href="#about" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']" onClick={() => setIsMenuOpen(false)}>About</a></li>
                  <li><a href="#videos" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']" onClick={() => setIsMenuOpen(false)}>Videos</a></li>
                  <li><a href="#music" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']" onClick={() => setIsMenuOpen(false)}>Music</a></li>
                  <li><a href="#partners" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']" onClick={() => setIsMenuOpen(false)}>Partners</a></li>
                  <li><a href="#donate" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors font-['Poppins']" onClick={() => setIsMenuOpen(false)}>Donate</a></li>
                </ul>
              </nav>
              
              <div className="p-5">
                <p className="text-[#F0F0F0] text-sm opacity-40">© Sanctus Pro Deo 2019. All Rights Reserved</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}