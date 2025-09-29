'use client';

import { FadeInSection, SlideInSection, StaggeredAnimation, StaggerItem, ScaleAnimation } from './animations';

export default function ConcertsSection() {
  const concerts = [
    {
      id: 1,
      date: "SÂMBĂTĂ, 6 Dec 2025",
      venue: "Centrul Cultural \"Ion Besoiu\"",
      address: "Strada Emil Cioran 1A",
      time: "17:30",
      city: "SIBIU",
      link: "https://example.com/rezerva-sibiu-1730"
    },
    {
      id: 2,
      date: "SÂMBĂTĂ, 6 Dec 2025", 
      venue: "Centrul Cultural \"Ion Besoiu\"",
      address: "Strada Emil Cioran 1A",
      time: "20:30",
      city: "SIBIU",
      link: "https://example.com/rezerva-sibiu-2030"
    },
    {
      id: 3,
      date: "Luni, 8 Dec 2023",
      venue: "Teatrul Național de Operetă și Musical \"Ion Dacian\"",
      address: "Piața Lucian Blaga 1-3",
      time: "17:30",
      city: "BUCUREȘTI",
      link: "https://example.com/rezerva-bucuresti-1730"
    },
    {
      id: 4,
      date: "Luni, 8 Dec 2023",
      venue: "Teatrul Național de Operetă și Musical \"Ion Dacian\"",
      address: "Piața Lucian Blaga 1-3", 
      time: "20:30",
      city: "BUCUREȘTI",
      link: "https://example.com/rezerva-bucuresti-2030"
    }
  ];

  return (
    <section id="concerts" className="bg-[#171718] py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/assets/story-image-2.jpg')`,
            filter: 'blur(20px)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-5 relative z-10">
        {/* Section Title */}
        <FadeInSection className="text-center mb-12 lg:mb-16">
          <h2 className="font-['Baskerville'] text-[36px] md:text-[48px] lg:text-[60px] text-[#F0F0F0] mb-4 px-4">
            Concerte
          </h2>
        </FadeInSection>

        {/* Concert Listings */}
        <StaggeredAnimation 
          className="space-y-8 lg:space-y-7 max-w-6xl mx-auto"
          staggerDelay={0.2}
        >
          {concerts.map((concert, index) => (
            <StaggerItem key={concert.id}>
              <div className="relative">
              {/* Mobile Card Layout */}
              <div className="lg:hidden">
                {/* City Tag */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-white px-4 py-2 rounded-full">
                    <span className="font-['Inter'] font-bold text-[14px] text-black tracking-[0.7px] uppercase">
                      {concert.city}
                    </span>
                  </div>
                </div>

                {/* Mobile Concert Card */}
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 pt-8 text-center border border-white/10">
                  {/* Date */}
                  <h3 className="font-['Poppins'] font-bold text-[20px] text-white tracking-[0.28px] uppercase mb-4">
                    {concert.date}
                  </h3>

                  {/* Venue Info */}
                  <div className="mb-4">
                    <h4 className="font-['Poppins'] text-[16px] text-white tracking-[0.24px] uppercase mb-1 leading-tight">
                      {concert.venue}
                    </h4>
                    <p className="font-['Inter'] text-[12px] text-white/70 mb-3">
                      {concert.address}
                    </p>
                  </div>

                  {/* Time */}
                  <div className="mb-6">
                    <span className="font-['Poppins'] font-bold text-[24px] text-white tracking-[0.28px] uppercase">
                      {concert.time}
                    </span>
                  </div>

                  {/* Reserve Button */}
                  <a 
                    href={concert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-white/50 text-white px-14 py-3 rounded-lg text-[12px] tracking-[1.2px] uppercase font-['Poppins'] font-bold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center h-[50px] no-underline"
                  >
                    Rezervă Loc
                  </a>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block">
                {/* City Tag */}
                <div className="absolute -top-4 left-0 z-20">
                  <div className="bg-white px-4 py-2 rounded-full">
                    <span className="font-['Inter'] font-bold text-[14px] text-black tracking-[0.7px] uppercase">
                      {concert.city}
                    </span>
                  </div>
                </div>

                {/* Desktop Concert Card */}
                <div className="flex items-center gap-6 py-6">
                  {/* Date */}
                  <div className="w-[394px] py-2">
                    <h3 className="font-['Poppins'] font-bold text-[28px] text-white tracking-[0.28px] uppercase">
                      {concert.date}
                    </h3>
                  </div>

                  {/* Venue Info */}
                  <div className="flex-1 text-center py-2">
                    <h4 className="font-['Poppins'] text-[24px] text-white tracking-[0.24px] uppercase mb-2 leading-normal">
                      {concert.venue}
                    </h4>
                    <p className="font-['Inter'] text-[16px] text-white/50">
                      {concert.address}
                    </p>
                  </div>

                  {/* Time */}
                  <div className="w-[100px] text-right">
                    <span className="font-['Poppins'] font-bold text-[28px] text-white tracking-[0.28px] uppercase">
                      {concert.time}
                    </span>
                  </div>

                  {/* Reserve Button */}
                  <div className="relative flex flex-col items-center">
                    <a 
                      href={concert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group hover:opacity-80 transition-opacity"
                    >
                      <svg width="104" height="116" viewBox="0 0 104 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="12" width="103" height="103" rx="51.5" stroke="white"/>
                        <path d="M26.3086 59.5L24.2646 55.79H23.6906V59.5H21.2966V49.672H25.3146C26.0893 49.672 26.7473 49.8073 27.2886 50.078C27.8393 50.3487 28.25 50.722 28.5206 51.198C28.7913 51.6647 28.9266 52.1873 28.9266 52.766C28.9266 53.4193 28.74 54.0027 28.3666 54.516C28.0026 55.0293 27.4613 55.3933 26.7426 55.608L29.0106 59.5H26.3086ZM23.6906 54.096H25.1746C25.6133 54.096 25.94 53.9887 26.1546 53.774C26.3786 53.5593 26.4906 53.256 26.4906 52.864C26.4906 52.4907 26.3786 52.1967 26.1546 51.982C25.94 51.7673 25.6133 51.66 25.1746 51.66H23.6906V54.096ZM32.9634 51.59V53.578H36.1694V55.426H32.9634V57.582H36.5894V59.5H30.5694V49.672H36.5894V51.59H32.9634ZM40.8317 57.54H45.0597V59.5H38.1157V57.68L42.3157 51.632H38.1157V49.672H45.0597V51.492L40.8317 57.54ZM49.1575 51.59V53.578H52.3635V55.426H49.1575V57.582H52.7835V59.5H46.7635V49.672H52.7835V51.59H49.1575ZM59.4897 59.5L57.4457 55.79H56.8717V59.5H54.4777V49.672H58.4957C59.2704 49.672 59.9284 49.8073 60.4697 50.078C61.0204 50.3487 61.4311 50.722 61.7017 51.198C61.9724 51.6647 62.1077 52.1873 62.1077 52.766C62.1077 53.4193 61.9211 54.0027 61.5477 54.516C61.1837 55.0293 60.6424 55.3933 59.9237 55.608L62.1917 59.5H59.4897ZM56.8717 54.096H58.3557C58.7944 54.096 59.1211 53.9887 59.3357 53.774C59.5597 53.5593 59.6717 53.256 59.6717 52.864C59.6717 52.4907 59.5597 52.1967 59.3357 51.982C59.1211 51.7673 58.7944 51.66 58.3557 51.66H56.8717V54.096ZM72.9765 49.672L69.4905 59.5H66.4945L63.0085 49.672H65.5565L67.9925 57.092L70.4425 49.672H72.9765ZM80.2351 57.764H76.5671L75.9791 59.5H73.4731L77.0291 49.672H79.8011L83.3571 59.5H80.8231L80.2351 57.764ZM79.6191 55.916L78.4011 52.318L77.1971 55.916H79.6191ZM80.8091 46.662C80.8091 47.4273 80.5898 48.02 80.1511 48.44C79.7124 48.86 79.1338 49.07 78.4151 49.07C77.6964 49.07 77.1178 48.86 76.6791 48.44C76.2498 48.0107 76.0351 47.4133 76.0351 46.648V46.382H77.2251C77.2251 46.69 77.3138 46.9233 77.4911 47.082C77.6684 47.2407 77.9764 47.32 78.4151 47.32C78.8538 47.32 79.1618 47.2407 79.3391 47.082C79.5164 46.9233 79.6051 46.69 79.6051 46.382H80.8091V46.662ZM40.9511 78.652H44.0871V80.5H38.5571V70.672H40.9511V78.652ZM50.017 80.598C49.093 80.598 48.2436 80.3833 47.469 79.954C46.7036 79.5247 46.0923 78.9273 45.635 78.162C45.187 77.3873 44.963 76.5193 44.963 75.558C44.963 74.5967 45.187 73.7333 45.635 72.968C46.0923 72.2027 46.7036 71.6053 47.469 71.176C48.2436 70.7467 49.093 70.532 50.017 70.532C50.941 70.532 51.7856 70.7467 52.551 71.176C53.3256 71.6053 53.9323 72.2027 54.371 72.968C54.819 73.7333 55.043 74.5967 55.043 75.558C55.043 76.5193 54.819 77.3873 54.371 78.162C53.923 78.9273 53.3163 79.5247 52.551 79.954C51.7856 80.3833 50.941 80.598 50.017 80.598ZM50.017 78.414C50.801 78.414 51.4263 78.1527 51.893 77.63C52.369 77.1073 52.607 76.4167 52.607 75.558C52.607 74.69 52.369 73.9993 51.893 73.486C51.4263 72.9633 50.801 72.702 50.017 72.702C49.2236 72.702 48.589 72.9587 48.113 73.472C47.6463 73.9853 47.413 74.6807 47.413 75.558C47.413 76.426 47.6463 77.1213 48.113 77.644C48.589 78.1573 49.2236 78.414 50.017 78.414ZM56.1088 75.572C56.1088 74.6013 56.3188 73.738 56.7388 72.982C57.1588 72.2167 57.7422 71.624 58.4888 71.204C59.2448 70.7747 60.0988 70.56 61.0508 70.56C62.2175 70.56 63.2162 70.868 64.0468 71.484C64.8775 72.1 65.4328 72.94 65.7128 74.004H63.0808C62.8848 73.5933 62.6048 73.2807 62.2408 73.066C61.8862 72.8513 61.4802 72.744 61.0228 72.744C60.2855 72.744 59.6882 73.0007 59.2308 73.514C58.7735 74.0273 58.5448 74.7133 58.5448 75.572C58.5448 76.4307 58.7735 77.1167 59.2308 77.63C59.6882 78.1433 60.2855 78.4 61.0228 78.4C61.4802 78.4 61.8862 78.2927 62.2408 78.078C62.6048 77.8633 62.8848 77.5507 63.0808 77.14H65.7128C65.4328 78.204 64.8775 79.044 64.0468 79.66C63.2162 80.2667 62.2175 80.57 61.0508 80.57C60.0988 80.57 59.2448 80.36 58.4888 79.94C57.7422 79.5107 57.1588 78.918 56.7388 78.162C56.3188 77.406 56.1088 76.5427 56.1088 75.572Z" fill="white"/>
                        <circle cx="28.5" cy="2" r="1.5" fill="white"/>
                        <circle cx="81.5" cy="39" r="3.5" fill="white"/>
                        <circle cx="49.5" cy="105" r="3.5" fill="white"/>
                        <circle cx="48.5" cy="20" r="3.5" fill="white"/>
                        <circle cx="23" cy="33.5" r="1" fill="white"/>
                        <circle cx="72" cy="99.5" r="1" fill="white"/>
                        <circle cx="15" cy="71.5" r="2" fill="white"/>
                        <circle cx="76" cy="81.5" r="2" fill="white"/>
                        <circle cx="67" cy="18.5" r="2" fill="white"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggeredAnimation>

        {/* Disclaimer */}
        <div className="border-t border-white/50 pt-4 mt-8 max-w-6xl mx-auto px-4 lg:px-0">
          <p className="font-['Inter'] text-[14px] lg:text-[16px] text-white/80 text-center lg:text-left">
            *Locurile sunt limitate, rezervă-ți biletul din timp înainte de SOLD OUT.
          </p>
        </div>
      </div>
    </section>
  );
}