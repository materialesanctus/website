"use client";

import Image from "next/image";

export default function TempHeader() {
  return (
    <header className="w-full pt-16 md:pt-20">
      {/* Desktop Image */}
      <div className="hidden md:block w-full">
        <Image 
          src="/assets/craciun-desktop.jpg" 
          alt="Crăciun - Sanctus Pro Deo" 
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Mobile Image */}
      <div className="block md:hidden w-full">
        <Image 
          src="/assets/craciun-mobile.jpg" 
          alt="Crăciun - Sanctus Pro Deo" 
          width={768}
          height={1024}
          className="w-full h-auto" 
          priority
        />
      </div>
    </header>
  );
}
