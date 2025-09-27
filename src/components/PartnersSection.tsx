import Image from "next/image";

export default function PartnersSection() {
  const sponsors = [
    { name: "Sponsor 1", logo: "/assets/sponsor-logo-1.png" },
    { name: "Sponsor 2", logo: "/assets/sponsor-logo-ignite.png" },
    { name: "Sponsor 3", logo: "/assets/sponsor-logo-3.png" },
    { name: "Sponsor 4", logo: "/assets/sponsor-logo-5.png" }
  ];

  return (
    <section id="partners" className="bg-[#EAE8E6] py-16">
      <div className="container mx-auto px-5">
        <h2 className="font-['Baskerville'] text-[60px] md:text-[80px] text-[#A26D46] text-center mb-16">
          Sponsors & Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-6xl mx-auto mb-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="opacity-30 mix-blend-darken hover:opacity-60 transition-opacity">
              <Image 
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={80}
                className="max-w-[150px] max-h-[80px] object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="mb-8">
            <p className="text-[18px] text-[#1B1C1C] mb-4">
              Interested in partnering with us?
            </p>
            <p className="text-[18px] text-[#1B1C1C]">
              We would love to hear from you.
            </p>
          </div>
          
          <button className="border border-[#A26D46] text-[#A26D46] px-8 py-4 rounded-full font-['Poppins'] text-[12px] tracking-[1.8px] uppercase hover:bg-[#A26D46] hover:text-white transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}