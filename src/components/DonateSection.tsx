export default function DonateSection() {
  return (
    <section id="donate" className="bg-[#171718] py-16">
      <div className="container mx-auto px-5 text-center">
        <h2 className="font-['Baskerville'] text-[60px] md:text-[80px] text-[#F0F0F0] mb-8">
          Donate
        </h2>
        
        <p className="font-['Poppins'] font-light text-[16px] leading-[28px] text-[#F0F0F0] max-w-[813px] mx-auto mb-12">
          Ajuta-ne să transmitem mai departe mesajul de salvare al jertfei lui Isus.
        </p>
        
        <button className="bg-[#A26D46] text-[#F0F0F0] px-12 py-4 rounded-full font-['Poppins'] text-[12px] tracking-[1.8px] uppercase hover:bg-[#8A5A39] transition-colors">
          Donate
        </button>
      </div>
    </section>
  );
}