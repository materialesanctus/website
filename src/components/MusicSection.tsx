'use client';

import Image from "next/image";
import { FadeInSection, SlideInSection, ScaleAnimation, StaggeredAnimation, StaggerItem } from './animations';

export default function MusicSection() {
  const musicPlatforms = [
    {
      name: "YouTube Music",
      url: "https://music.youtube.com/channel/UCfltUgZlQ2MdqVLP8JrMOUg",
      icon: (
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M27.462 3.12505C27.1567 2.00503 26.286 1.13398 25.1665 0.82873C22.9642 0.25 14 0.25 14 0.25C14 0.25 5.03576 0.25 2.83349 0.82873C1.71404 1.13398 0.843302 2.00503 0.538043 3.12505C-0.0399997 5.32792 -0.0399997 9.89914 -0.0399997 9.89914C-0.0399997 9.89914 -0.0399997 14.4704 0.538043 16.6732C0.843302 17.7932 1.71404 18.6643 2.83349 18.9695C5.03576 19.5483 14 19.5483 14 19.5483C14 19.5483 22.9642 19.5483 25.1665 18.9695C26.286 18.6643 27.1567 17.7932 27.462 16.6732C28.04 14.4704 28.04 9.89914 28.04 9.89914C28.04 9.89914 28.04 5.32792 27.462 3.12505ZM11.1996 14.1439V5.65433L18.4988 9.8991L11.1996 14.1439Z" fill="#A26D46" />
        </svg>
      )
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/3oPQuuD6QuhQpU23YBgeJf",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Spotify">
            <mask id="mask0_7_700" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
              <path id="Clip 2" fillRule="evenodd" clipRule="evenodd" d="M0 0H28V28H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_7_700)">
              <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M22.4349 12.4948C17.8882 9.79023 10.2919 9.50841 5.95659 10.8567C5.25125 11.0681 4.5379 10.6445 4.32654 10.0096C4.11517 9.29624 4.5379 8.58287 5.1808 8.3715C10.2215 6.88151 18.5311 7.16413 23.7831 10.2922C24.426 10.6445 24.6374 11.4988 24.2851 12.1345C23.9241 12.6357 23.0778 12.8471 22.4349 12.4948ZM22.294 16.4692C21.9409 16.9632 21.298 17.1825 20.804 16.8223C16.9635 14.478 11.1462 13.7726 6.67075 15.1914C6.0983 15.3323 5.46341 15.0504 5.32171 14.478C5.1808 13.9135 5.46341 13.2706 6.02705 13.1297C11.2167 11.5701 17.6056 12.3539 22.0114 15.0504C22.4349 15.2626 22.6463 15.976 22.294 16.4692ZM20.5927 20.3731C20.3021 20.8046 19.8089 20.9456 19.3773 20.6557C16.046 18.6013 11.8523 18.1705 6.88211 19.3074C6.38813 19.4484 5.95659 19.0953 5.81569 18.6725C5.67478 18.1705 6.02705 17.747 6.45858 17.6061C11.8523 16.3987 16.54 16.8927 20.2324 19.1665C20.7336 19.3779 20.804 19.9504 20.5927 20.3731ZM13.9996 0C6.26803 0 0 6.26821 0 14C0 21.7326 6.26803 28 13.9996 28C21.732 28 28 21.7326 28 14C28 6.26821 21.732 0 13.9996 0Z" fill="#A26D46" />
            </g>
          </g>
        </svg>
      )
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/ro/artist/sanctus-pro-deo/1434847170",
      icon: (
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="appleMusic">
            <mask id="mask0_7_697" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="26">
              <path id="Clip 2" fillRule="evenodd" clipRule="evenodd" d="M0 0H22V26H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_7_697)">
              <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M21.9941 10.5547C21.9941 13.6848 22.0123 16.8143 21.9847 19.9438C21.9748 21.1182 21.4609 22.0776 20.4315 22.7265C19.9056 23.058 19.312 23.2124 18.699 23.255C17.9005 23.3104 17.1021 23.2724 16.3229 23.0549C15.3784 22.7912 14.5961 22.3105 14.1333 21.426C13.7413 20.677 13.6762 19.89 13.9284 19.0845C14.0817 18.5966 14.4132 18.2452 14.8525 17.9871C15.355 17.6921 15.9064 17.5305 16.4808 17.47C17.0864 17.4069 17.6978 17.3987 18.305 17.3473C18.6969 17.315 19.0931 17.2776 19.4746 17.1904C19.989 17.0724 20.2866 16.7235 20.3575 16.2048C20.3851 16.0037 20.406 15.8005 20.406 15.5984C20.4091 12.6274 20.4086 9.65693 20.407 6.68644C20.4065 6.50175 20.4034 6.31398 20.3747 6.13185C20.3221 5.80556 20.1386 5.67268 19.8066 5.72039C19.5403 5.75784 19.277 5.81633 19.0138 5.87276C15.6396 6.59871 12.2653 7.32517 8.89046 8.05317C8.36509 8.16707 8.23479 8.31995 8.20351 8.84735C8.19413 9.00537 8.19622 9.16544 8.19622 9.32448C8.19569 13.674 8.1639 18.024 8.21081 22.3731C8.23166 24.3082 7.01412 25.4133 5.54172 25.7853C4.46386 26.0567 3.37402 26.0756 2.28992 25.8145C1.014 25.5077 0.221251 24.6489 0.0409136 23.3684C-0.00547371 23.04 -0.0143342 22.6973 0.024235 22.3684C0.126913 21.487 0.663754 20.9114 1.46068 20.5569C2.02306 20.3065 2.62192 20.2003 3.23747 20.1696C3.81913 20.1408 4.40236 20.1136 4.98194 20.0567C5.24619 20.0316 5.51097 19.9567 5.76323 19.8684C6.21616 19.7114 6.48354 19.3805 6.55598 18.9142C6.59247 18.6797 6.60758 18.4396 6.60758 18.2021C6.61071 13.4985 6.60967 8.79502 6.61019 4.0915C6.61019 3.95042 6.60758 3.80882 6.61488 3.66773C6.64042 3.18035 6.84786 2.91613 7.33102 2.80172C7.80166 2.68937 8.27805 2.60061 8.75234 2.50416C12.012 1.83978 15.2716 1.17591 18.5302 0.511528C19.312 0.351973 20.0938 0.189854 20.8761 0.0328643C21.5089 -0.0933428 21.8581 0.142141 21.9623 0.770612C21.9899 0.934783 21.993 1.1046 21.993 1.27185C21.9946 4.36597 21.9946 7.46061 21.9941 10.5547Z" fill="#A26D46" />
            </g>
          </g>
        </svg>
      )
    }
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
    <section id="music" className="bg-gradient-to-br from-[#F7F7F7] to-[#EFEFEF] py-20 overflow-hidden">
      <div className="container mx-auto px-5 max-w-7xl">

        {/* Hero Section */}
        <FadeInSection className="text-center mb-16">
          <h2 className="font-['Baskerville'] text-[48px] md:text-[56px] lg:text-[64px] text-[#1B1C1C] mb-6 leading-tight">
            Ultimele Lansări
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#A26D46] to-[#8B5A3A] mx-auto mb-8"></div>
        </FadeInSection>

        {/* Main Content - Single Row Layout */}
        <div className="p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">

            {/* Left Side - Album Info */}
            <StaggeredAnimation className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
              {/* Album Text */}
              <StaggerItem>
                <SlideInSection direction="left" className="text-center lg:text-left">
                  <h3 className="font-['Baskerville'] text-[32px] lg:text-[37px] text-[#1B1C1C] mb-4 leading-normal">
                    EU SUNT
                  </h3>
                  <div className="max-w-[241px] mx-auto lg:mx-0">
                    <p className="font-['Poppins'] text-[14px] text-[#1B1C1C] leading-[21px]">
                      Albumul „Eu sunt" este acum disponibil pe toate platformele de streaming. Ascultă-l și distribuie-l celor dragi!
                    </p>
                  </div>
                </SlideInSection>
              </StaggerItem>

              {/* Album Cover */}
              <StaggerItem>
                <ScaleAnimation className="flex justify-center lg:justify-start" hoverScale={1.1}>
                  <div className="w-[200px] lg:w-[212px] h-[200px] lg:h-[212px] relative group flex-shrink-0">
                    <Image
                      src="/assets/eu-sunt-album.jpg"
                      alt="EU SUNT Album"
                      width={212}
                      height={212}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <svg width="16" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12L0 24V0L20 12Z" fill="#A26D46" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ScaleAnimation>
              </StaggerItem>
            </StaggeredAnimation>

            {/* Right Side - Streaming Platforms */}
            <SlideInSection direction="right" className="flex-1 lg:ml-8">
              <h4 className="font-['Poppins'] text-[18px] text-[#1B1C1C] mb-6 text-center lg:text-left">
                Platforme
              </h4>

              <FadeInSection className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {musicPlatforms.map((platform, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <div className="flex items-center justify-between bg-[#EEEEEE] hover:bg-[#E5E5E5] p-4 transition-all duration-300 border-b border-white/50 last:border-b-0">
                      <div className="flex items-center gap-4">
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                          {typeof platform.icon === 'string' ? (
                            <span className="text-[16px]">{platform.icon}</span>
                          ) : (
                            <div className="scale-[0.6]">{platform.icon}</div>
                          )}
                        </div>
                        <span className="font-['Poppins'] text-[16px] text-[#1B1C1C] leading-[32px]">{platform.name}</span>
                      </div>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#816550] text-[#816550] px-6 py-2 rounded-[21.5px] text-[10px] tracking-[1.5px] uppercase font-['Poppins'] font-normal hover:bg-[#816550] hover:text-white transition-all duration-300 inline-block text-center w-[98px] h-[33px] flex items-center justify-center"
                      >
                        Ascultă
                      </a>
                    </div>
                  </div>
                ))}
              </FadeInSection>
            </SlideInSection>
          </div>
        </div>
      </div>
    </section>
  );
}