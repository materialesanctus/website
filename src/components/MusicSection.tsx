import Image from "next/image";

export default function MusicSection() {
  const musicPlatforms = [
    { name: "Spotify", icon: "🎵" },
    { name: "Apple Music", icon: "🍎" },
    { name: "Amazon Music", icon: "📱" }
  ];

  const merchandise = [
    {
      name: "Chemat la Lumina CD",
      price: "€ 12.00",
      image: "/assets/album-cover.jpg"
    },
    {
      name: "Tricou Chemat la Lumina", 
      price: "€ 32.00",
      image: "/assets/hero-image-2.png"
    },
    {
      name: "Tricou Esti Unicat",
      price: "€ 32.00", 
      image: "/assets/hero-image-3.png",
      featured: true
    },
    {
      name: "Tricou The Name of Jesus",
      price: "€ 32.00",
      image: "/assets/hero-image-1.png"
    }
  ];

  return (
    <section id="music" className="bg-[#F7F7F7] py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Latest Release */}
          <div>
            <h2 className="font-['Baskerville'] text-[40px] text-[#1B1C1C] mb-8">
              Latest release
            </h2>
            
            <div className="flex gap-8">
              <div className="w-[210px] h-[210px] bg-gray-300 rounded-lg overflow-hidden">
                <Image 
                  src="/assets/album-cover.jpg"
                  alt="Chemat la Lumina CD"
                  width={210}
                  height={210}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] tracking-[0.89px] uppercase text-[#1B1C1C] mb-2">
                  Chemat la Lumina CD
                </h3>
                <p className="text-[18px] text-[#1B1C1C] mb-6">€ 12.00</p>
                
                <div className="space-y-4">
                  <p className="text-[18px] text-[#1B1C1C] mb-4">Online</p>
                  {musicPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-[#EEEEEE] h-[56px] flex items-center px-4 rounded min-w-[200px]">
                        <span className="text-[16px] text-[#1B1C1C]">{platform.name}</span>
                      </div>
                      <button className="border border-[#A26D46] text-[#A26D46] px-4 py-2 rounded-full text-[10px] tracking-[1.5px] uppercase hover:bg-[#A26D46] hover:text-white transition-colors">
                        Play
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Merch */}
          <div>
            <h2 className="font-['Baskerville'] text-[40px] text-[#1B1C1C] mb-8">
              Merch
            </h2>
            
            <div className="grid grid-cols-2 gap-6">
              {merchandise.map((item, index) => (
                <div key={index} className={`${item.featured ? 'ring-2 ring-[#A26D46]' : ''} rounded-lg`}>
                  <div className="w-full h-[200px] bg-gray-300 rounded-t-lg overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-['Poppins'] font-semibold text-[14px] tracking-[0.89px] uppercase text-[#1B1C1C] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[16px] text-[#1B1C1C]">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}