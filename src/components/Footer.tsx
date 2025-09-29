import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B1C1C] bg-opacity-30 py-8 md:py-12">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          
          {/* Logo and Copyright Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image 
                src="/assets/logo-sanctus-full.svg"
                alt="Sanctus Pro Deo"
                width={120}
                height={25}
                className="h-6 w-auto"
              />
            </div>
            <div className="text-[12px] text-[#F0F0F0] opacity-40 leading-[22px]">
              © Sanctus Pro Deo 2025. All Rights Reserved<br />
              <span className="hover:text-[#A26D46] cursor-pointer transition-colors">Terms & Conditions</span>
            </div>
          </div>
          
          {/* Navigation Links - Mobile: 2 columns, Desktop: horizontal */}
          <div className="grid grid-cols-2 lg:flex lg:gap-16 gap-8">
            {/* Navigation Column 1 */}
            <div className="space-y-3">
              <nav className="flex flex-col space-y-2">
                <a href="#concerts" className="text-[14px] text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                  Concerte
                </a>
                <a href="#about" className="text-[14px] text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                  Despre
                </a>
                <a href="#donate" className="text-[14px] text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                  Donează
                </a>
              </nav>
            </div>
            
            {/* Navigation Column 2 */}
            <div className="space-y-3">
              <nav className="flex flex-col space-y-2">
                <a href="#music" className="text-[14px] text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                  Muzică
                </a>
                <a href="#partners" className="text-[14px] text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                  Parteneri
                </a>
                <a href="#sponsors" className="text-[14px] text-[#F0F0F0] hover:text-[#A26D46] transition-colors">
                  Sponsori
                </a>
              </nav>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-3 lg:text-right">
            <div className="text-[14px] text-[#F0F0F0]">
              <div className="mb-2">contact@sanctusprodeo.com</div>
              <div className="mb-3">0755 583 730</div>
              <div className="flex gap-4 lg:justify-end">
                <a 
                  href="https://www.facebook.com/sanctusprodeo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#A26D46] transition-colors"
                >
                  facebook
                </a>
                <a 
                  href="https://www.instagram.com/sanctusprodeo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#A26D46] transition-colors"
                >
                  instagram
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}