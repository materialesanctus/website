'use client';

import { SlideInSection } from './animations';

export default function StorySection() {
  return (
    <section id="about" className="bg-[#171718] relative overflow-hidden">
      <div className="relative w-full max-w-[1280px] mx-auto py-20 lg:py-32">
        
        {/* First Story Block - Image Left, Text Right */}
        <div className="relative mb-32 lg:mb-48">
          {/* First Image */}
          <SlideInSection direction="left" className="w-full max-w-[1440px] mx-auto px-5 lg:px-0 relative">
            <div className="w-full lg:w-[652px] h-[240px] lg:h-[398px] lg:ml-0 opacity-76 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/story-image-1.jpg')` }}
              />
            </div>
          </SlideInSection>
          
          {/* First Text */}
          <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-0 mt-8 lg:mt-0">
            <div className="lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2 w-full lg:w-[833px] text-center lg:text-center">
              <SlideInSection direction="right" delay={0.3}>
                <p className="font-['Baskerville'] text-[24px] lg:text-[30px] leading-normal text-[#F0F0F0] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
                  Călătoria noastră a început în 2004, la Sibiu, cu o chemare simplă: să-L glorificăm pe Dumnezeu prin muzică și să ducem mesajul Evangheliei în inimile celor care ne ascultă.
                </p>
              </SlideInSection>
            </div>
          </div>
        </div>

        {/* Second Story Block - Text Left, Image Right */}
        <div className="relative mb-32 lg:mb-48 lg:h-[398px]">
          {/* Second Image */}
          <SlideInSection direction="right" className="w-full max-w-[1440px] mx-auto px-5 lg:px-0 relative mb-8 lg:mb-0">
            <div className="w-full lg:w-[652px] h-[240px] lg:h-[398px] lg:ml-auto opacity-83 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/story-image-2.jpg')` }}
              />
            </div>
          </SlideInSection>
          
          {/* Second Text */}
          <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-0">
            <div className="lg:absolute lg:top-1/2 lg:left-0 lg:transform lg:-translate-y-1/2 w-full lg:w-[640px] text-center lg:text-center lg:ml-16">
              <SlideInSection direction="left" delay={0.3}>
                <p className="font-['Baskerville'] text-[24px] lg:text-[30px] leading-normal text-[#F0F0F0]">
                  Suntem peste 80 de coriști și instrumentiști din România și din afara țării. Mai mult decât un cor sau un band, suntem o familie unită prin credință, care vrea să răspândească dragostea lui Isus Hristos.
                </p>
              </SlideInSection>
            </div>
          </div>
        </div>

        {/* Third Story Block - Image Left, Text Right */}
        <div className="relative">
          {/* Third Image */}
          <SlideInSection direction="left" className="w-full max-w-[1440px] mx-auto px-5 lg:px-0 relative">
            <div className="w-full lg:w-[663px] h-[240px] lg:h-[398px] lg:ml-16 opacity-91 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/story-image-3.jpg')` }}
              />
            </div>
          </SlideInSection>
          
          {/* Third Text */}
          <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-0 mt-8 lg:mt-0">
            <div className="lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2 w-full lg:w-[729px] text-center lg:text-center lg:mr-16">
              <SlideInSection direction="right" delay={0.3}>
                <p className="font-['Baskerville'] text-[24px] lg:text-[30px] leading-normal text-[#F0F0F0]">
                  Organizăm concerte în săli, centre culturale și biserici din România și străinătate. Împreună cu soliști, cor, band și orchestră, cântăm muzică creștină contemporană, invitând pe fiecare să creadă și să-L cunoască pe Isus Hristos.
                </p>
              </SlideInSection>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}