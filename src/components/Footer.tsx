import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B1C1C] bg-opacity-30 py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Copyright */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <Image 
                src="/assets/logo-sanctus-full.svg"
                alt="Sanctus Pro Deo"
                width={120}
                height={25}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-[12px] text-[#F0F0F0] opacity-40 leading-[22px]">
              © Sanctus Pro Deo 2019. All Rights Reserved<br />
              Terms & Conditions
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <ul className="space-y-2 text-[14px] text-[#F0F0F0]">
              <li><a href="#about" className="hover:text-[#A26D46] transition-colors">About</a></li>
              <li><a href="#videos" className="hover:text-[#A26D46] transition-colors">Videos</a></li>
              <li><a href="#music" className="hover:text-[#A26D46] transition-colors">Music</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2 text-[14px] text-[#F0F0F0]">
              <li><a href="#" className="hover:text-[#A26D46] transition-colors">Merch</a></li>
              <li><a href="#partners" className="hover:text-[#A26D46] transition-colors">Partners</a></li>
              <li><a href="#donate" className="hover:text-[#A26D46] transition-colors">Donate</a></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <div className="mb-6">
              <ul className="space-y-2 text-[14px] text-[#F0F0F0]">
                <li>contact@sanctusprodeo.com</li>
                <li>0744 200 012</li>
                <li>facebook instagram</li>
              </ul>
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}