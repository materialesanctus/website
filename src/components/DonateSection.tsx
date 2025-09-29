'use client';

import { FadeInSection, SlideInSection, ScaleAnimation } from './animations';

export default function DonateSection() {
  return (
    <section id="donate" className="bg-[#171718] py-10 pb-20">
      <div className="container mx-auto px-5 text-center">
        <FadeInSection>
          <h2 className="font-['Baskerville'] text-[60px] md:text-[80px] text-[#F0F0F0] mb-8">
            Donează
          </h2>
        </FadeInSection>
        
        <SlideInSection direction="bottom" delay={0.2}>
          <p className="font-['Poppins'] font-light text-[16px] leading-[28px] text-[#F0F0F0] max-w-[813px] mx-auto mb-12">
           Ajuta-ne să transmitem mai departe mesajul de salvare al jertfei lui Isus.
          </p>
        </SlideInSection>
        
        <ScaleAnimation delay={0.4} hoverScale={1.1}>
          <a 
            href="https://buy.stripe.com/dRm00i1BHg0d3K5fgrbEA00" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#A26D46] text-[#F0F0F0] px-12 py-4 rounded-full font-['Poppins'] text-[12px] tracking-[1.8px] uppercase hover:bg-[#8A5A39] transition-colors"
          >
            IMPLICĂ-TE FINANCIAR
          </a>
        </ScaleAnimation>
      </div>
    </section>
  );
}