import Image from "next/image";

export default function PartnersSection() {
  const sponsors = [
    { name: "Sponsor 1", logo: "/assets/sponsor-logo-1.svg" },
    { name: "Sponsor 2", logo: "/assets/sponsor-logo-ignite.png" },
    { name: "Sponsor 3", logo: "/assets/sponsor-logo-3.png" },
    { name: "Sponsor 4", logo: "/assets/sponsor-logo-5.png" },
    {
      name: "Mojar.ai",
      logo: (
        <svg width="186" height="65" viewBox="0 0 186 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.7378 25.1307L26.8385 10.2162C25.6225 9.00025 23.9772 8.32007 22.2597 8.32007L7.85054 8.33147C6.95757 8.33147 6.23559 9.05344 6.23559 9.94641V12.9369C6.23559 13.8299 5.51362 14.5519 4.62065 14.5519H1.61495C0.721976 14.5519 0 15.2776 0 16.1706V44.1149C0 45.0078 0.721976 45.7298 1.61495 45.7298H4.62065C5.51362 45.7298 6.23559 46.4518 6.23559 47.3448V50.3505C6.23559 51.2434 6.95757 51.9654 7.85054 51.9654H35.7872C36.6802 51.9654 37.4022 51.2434 37.4022 50.3505V47.3448C37.4022 46.4518 38.1241 45.7298 39.0171 45.7298H42.0114C42.9044 45.7298 43.6264 45.0078 43.6264 44.1149V29.6981C43.6264 27.9844 42.9462 26.3429 41.734 25.1307H41.7378ZM37.0108 29.0332V43.7197C37.0108 44.6126 36.2888 45.3346 35.3958 45.3346H8.24573C7.35276 45.3346 6.63078 44.6126 6.63078 43.7197V16.562C6.63078 15.669 7.35276 14.947 8.24573 14.947H22.9322C23.8252 14.947 24.5472 15.669 24.5472 16.562V25.7995C24.5472 26.6924 25.2692 27.4144 26.1621 27.4144H35.392C36.285 27.4144 37.007 28.1364 37.007 29.0294L37.0108 29.0332Z" fill="#888888" />
          <path d="M129.815 18.9824V50.377C129.815 50.8254 129.45 51.1863 129.006 51.1863H118.86V56.32H129.344C132.874 56.32 135.739 53.4587 135.739 49.9248V18.9824H129.819H129.815Z" fill="#555555" />
          <path d="M185.81 24.8229H179.639C177.576 24.8229 175.904 26.4949 175.904 28.5582V46.182H169.968V27.5284C169.968 22.7634 173.833 18.8989 178.598 18.8989H185.81V24.8191V24.8229Z" fill="#555555" />
          <path d="M99.15 30.4391V34.6532C99.15 41.0218 104.314 46.1858 110.683 46.1858H113.897C120.266 46.1858 125.43 41.0218 125.43 34.6532V30.4391C125.43 24.0705 120.266 18.9065 113.897 18.9065H110.683C104.314 18.9065 99.15 24.0705 99.15 30.4391ZM113.924 40.2732H110.664C107.453 40.2732 104.846 37.6703 104.846 34.4556V30.6291C104.846 27.4182 107.449 24.8115 110.664 24.8115H113.924C117.135 24.8115 119.742 27.4144 119.742 30.6291V34.4556C119.742 37.6665 117.139 40.2732 113.924 40.2732Z" fill="#555555" />
          <path d="M154.461 18.9027H151.246C144.878 18.9027 139.714 24.0668 139.714 30.4353V34.6494C139.714 41.018 144.878 46.182 151.246 46.182H157.224V40.2694H151.224C148.013 40.2694 145.406 37.6665 145.406 34.4518V30.6253C145.406 27.4144 148.009 24.8077 151.224 24.8077H154.484C157.695 24.8077 160.301 27.4106 160.301 30.6253V46.1782H165.997V30.4315C165.997 24.063 160.833 18.8989 154.465 18.8989L154.461 18.9027Z" fill="#555555" />
          <path d="M85.9684 18.9028H82.6359C80.0178 18.9028 77.6391 19.9402 75.8911 21.6235C74.1432 19.9402 71.7682 18.9028 69.1463 18.9028H65.8138C60.4408 18.9028 56.09 23.2575 56.09 28.6267V46.1821H62.0254V29.2423C62.0254 26.799 64.0051 24.8192 66.4484 24.8192H68.5118C70.7993 24.8192 72.6802 26.5558 72.9082 28.7787V46.1783H78.8702V28.7787C79.102 26.552 80.9829 24.8192 83.2667 24.8192H85.33C87.7733 24.8192 89.753 26.799 89.753 29.2423V46.1821H95.6885V28.6267C95.6885 23.2537 91.3338 18.9028 85.9646 18.9028H85.9684Z" fill="#555555" />
        </svg>
      )
    },
    { name: "Ergoliv.ro", logo: "/assets/ergoliv-logo_ro.svg" }
  ];

  return (
    <section id="partners" className="bg-[#EAE8E6] py-16">
      <div className="container mx-auto px-5">
        <h2 className="font-['Baskerville'] text-[60px] md:text-[80px] text-[#A26D46] text-center mb-16">
          Sponsors & Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-7xl mx-auto mb-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="opacity-30 mix-blend-darken hover:opacity-60 transition-opacity">
              {typeof sponsor.logo === 'string' ? (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={120}
                  className="max-w-[200px] max-h-[120px] object-contain"
                />
              ) : (
                <div className="max-w-[200px] max-h-[120px] flex items-center justify-center">
                  {sponsor.logo}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <p className="text-[18px] text-[#1B1C1C] font-['Poppins'] font-normal leading-[29px] mb-4">
              Vrei să fi partener cu noi în lucrare? <br></br>
              Ne-am bucura să te cunoaștem!
            </p>
          </div>

          {/* Divider line - vertical on desktop, horizontal on mobile */}
          <div className="w-full md:w-px h-px md:h-16 bg-[#A26D46]/30 mb-8 md:mb-0"></div>

          <div className="mb-8 md:mb-0">
            <p className="text-[18px] text-[#1B1C1C] font-['Poppins'] font-normal leading-[29px] mb-4">
              contact@sanctusprodeo.ro<br></br>
              0755 583 730
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}