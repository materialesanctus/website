"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171718]">
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
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-[#F0F0F0] transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-[#F0F0F0] transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-[#F0F0F0] transition-all duration-300"></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 h-screen" style={{ height: '100dvh' }}>
            {/* Blurred Background Overlay */}
            <div className="absolute inset-0 backdrop-blur-[16px] bg-[rgba(27,28,28,0.95)] h-full" style={{ height: '100dvh' }} />
            
            <div className="relative flex flex-col h-full" style={{ height: '100dvh' }}>
              {/* Header with Logo and Close Button */}
              <div className="flex justify-between items-center p-5 pt-8">
                <Image 
                  src="/assets/logo-sanctus-full.svg" 
                  alt="Sanctus Pro Deo" 
                  width={205} 
                  height={33}
                  className="h-8 w-auto ml-8"
                />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#F0F0F0] text-2xl font-light hover:text-[#A26D46] transition-colors mr-4"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              
              {/* Navigation Menu - Centered */}
              <nav className="flex-1 flex items-center justify-center">
                <ul className="text-center space-y-7">
                  <li>
                    <a 
                      href="#about" 
                      className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors text-[40px] leading-[60px] font-['Baskerville'] font-semibold block" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#videos" 
                      className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors text-[40px] leading-[60px] font-['Baskerville'] font-semibold block" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#music" 
                      className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors text-[40px] leading-[60px] font-['Baskerville'] font-semibold block" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Music
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#partners" 
                      className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors text-[40px] leading-[60px] font-['Baskerville'] font-semibold block" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#donate" 
                      className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors text-[40px] leading-[60px] font-['Baskerville'] font-semibold block" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Donate
                    </a>
                  </li>
                </ul>
              </nav>
              
              {/* Footer with Social Icons and Copyright */}
              <div className="p-5 pb-8">
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-6">
                  <a href="#" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                    <svg width="10" height="21" viewBox="0 0 10 21" fill="currentColor">
                      <path d="M6.45 21V11.1H9.6L10 7.55H6.45V5.25C6.45 4.2 6.725 3.5 8.175 3.5H10.1V0.35C9.775 0.3 8.625 0.2 7.3 0.2C4.55 0.2 2.725 1.8 2.725 4.9V7.55H0V11.1H2.725V21H6.45Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="currentColor">
                      <path d="M21.5 2.53C20.72 2.88 19.88 3.11 19 3.21C19.9 2.64 20.59 1.74 20.92 0.68C20.08 1.21 19.14 1.59 18.14 1.8C17.35 0.9 16.22 0.35 14.97 0.35C12.58 0.35 10.64 2.29 10.64 4.68C10.64 5.02 10.68 5.35 10.76 5.66C7.09 5.47 3.77 3.73 1.54 1.1C1.16 1.83 0.94 2.64 0.94 3.51C0.94 5.17 1.78 6.63 3.07 7.47C2.29 7.45 1.56 7.25 0.92 6.91V6.97C0.92 9.09 2.42 10.85 4.42 11.24C4.05 11.34 3.66 11.39 3.26 11.39C2.99 11.39 2.73 11.36 2.48 11.31C3 12.84 4.59 13.95 6.46 13.98C4.97 15.18 3.09 15.89 1.04 15.89C0.69 15.89 0.35 15.87 0 15.83C1.89 17.09 4.14 17.82 6.56 17.82C14.97 17.82 19.56 11.46 19.56 5.19C19.56 5 19.55 4.81 19.54 4.63C20.39 4 21.11 3.22 21.5 2.53Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor">
                      <path d="M19.25 0H1.75C0.78 0 0 0.78 0 1.75V19.25C0 20.22 0.78 21 1.75 21H19.25C20.22 21 21 20.22 21 19.25V1.75C21 0.78 20.22 0 19.25 0ZM6.3 17.85H3.15V7.875H6.3V17.85ZM4.725 6.51C3.71 6.51 2.89 5.69 2.89 4.675C2.89 3.66 3.71 2.84 4.725 2.84C5.74 2.84 6.56 3.66 6.56 4.675C6.56 5.69 5.74 6.51 4.725 6.51ZM17.85 17.85H14.7V13.02C14.7 11.83 14.68 10.29 13.02 10.29C11.34 10.29 11.09 11.585 11.09 12.93V17.85H7.94V7.875H10.955V9.29H10.995C11.43 8.47 12.52 7.61 14.17 7.61C17.36 7.61 17.85 9.77 17.85 12.53V17.85Z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Copyright */}
                <p className="text-[#F0F0F0] text-[12px] text-center opacity-40 font-['Poppins']">
                  © Sanctus Pro Deo 2019. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}