import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#171718]">
      {/* Background with blur effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          
        />
      </div>
      
      {/* Logo Overlay */}
      <div className="relative z-10 text-center opacity-70">
        <div className="flex flex-col items-center">
          <Image 
            src="/assets/logo-pro-deo.png" 
            alt="Sanctus" 
            width={600} 
            height={200}
            className="max-w-[300px] md:max-w-[600px] w-full h-auto mb-[-20px]"
            priority
          />
          <Image 
            src="/assets/logo-sanctus-header.png" 
            alt="Pro Deo" 
            width={350} 
            height={100}
            className="max-w-[200px] md:max-w-[350px] w-full h-auto"
            priority
          />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="animate-bounce">
          <path d="M2 2L16 14L30 2" stroke="#F0F0F0" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
}