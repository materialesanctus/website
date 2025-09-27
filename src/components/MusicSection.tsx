import Image from "next/image";

export default function MusicSection() {
  const musicPlatforms = [

    {
      name: "YouTube",
      icon: (
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M27.462 3.12505C27.1567 2.00503 26.286 1.13398 25.1665 0.82873C22.9642 0.25 14 0.25 14 0.25C14 0.25 5.03576 0.25 2.83349 0.82873C1.71404 1.13398 0.843302 2.00503 0.538043 3.12505C-0.0399997 5.32792 -0.0399997 9.89914 -0.0399997 9.89914C-0.0399997 9.89914 -0.0399997 14.4704 0.538043 16.6732C0.843302 17.7932 1.71404 18.6643 2.83349 18.9695C5.03576 19.5483 14 19.5483 14 19.5483C14 19.5483 22.9642 19.5483 25.1665 18.9695C26.286 18.6643 27.1567 17.7932 27.462 16.6732C28.04 14.4704 28.04 9.89914 28.04 9.89914C28.04 9.89914 28.04 5.32792 27.462 3.12505ZM11.1996 14.1439V5.65433L18.4988 9.8991L11.1996 14.1439Z" fill="#A26D46" />
        </svg>
      )
    },
    {
      name: "Spotify",
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
    },
    {
      name: "Amazon Music",
      icon: (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="amazon">
            <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M21.3749 19.0446C22.2514 18.9423 23.6442 19.0055 23.9183 19.3445H23.9182C24.1266 19.6025 23.9114 20.7626 23.5584 21.5941C23.2029 22.4212 22.6733 23.0056 22.3807 23.2312C22.0841 23.457 21.8658 23.3696 22.0237 23.0306C22.1872 22.6917 23.0822 20.5899 22.7275 20.1487C22.3989 19.7409 20.9085 19.8886 20.2161 19.9572C20.1646 19.9623 20.1176 19.9669 20.0757 19.9709C19.9294 19.9834 19.8116 19.9959 19.7161 20.006C19.418 20.0375 19.3384 20.046 19.2938 19.9592C19.1793 19.6533 20.497 19.1438 21.3749 19.0446ZM0.672475 19.3845C4.73602 21.7369 11.026 25.3782 21.0514 20.8479H21.0513C21.4833 20.6766 21.7853 20.9625 21.3578 21.4808C20.9274 22.0035 17.4867 25 11.7032 25C5.9237 25 1.49592 21.2507 0.144842 19.6952C-0.225231 19.2916 0.201298 19.1093 0.452249 19.257C0.524922 19.2991 0.598328 19.3416 0.672475 19.3845Z" fill="#A26D46" />
            <path id="Shape_2" fillRule="evenodd" clipRule="evenodd" d="M17.2367 18.7195C17.0154 18.9158 16.6953 18.9299 16.4459 18.7989C15.5107 18.0274 15.2227 17.6038 14.7899 16.9673C14.7086 16.8477 14.6222 16.7207 14.5254 16.5823C12.6896 18.4436 11.3904 19 9.00853 19C6.1936 19 4 17.2744 4 13.8186C4 11.1204 5.47345 9.28255 7.56802 8.38476C9.09166 7.71808 11.1216 7.5118 12.8809 7.33302C13.2197 7.2986 13.5485 7.26519 13.8617 7.22971V6.79944C13.8617 6.71841 13.8623 6.63584 13.863 6.55219C13.8687 5.81996 13.875 5.00385 13.4569 4.39115C13.0473 3.77853 12.2659 3.52599 11.5786 3.52599C10.303 3.52599 9.16381 4.17597 8.88609 5.52275C8.82953 5.82211 8.60837 6.11674 8.30713 6.13074L5.0591 5.78475C4.78614 5.72383 4.4849 5.50412 4.56021 5.08785C5.30864 1.17852 8.86248 0 12.0445 0C13.6733 0 15.8009 0.430263 17.086 1.6555C18.5833 3.04399 18.5728 4.85931 18.5614 6.84714C18.5604 7.02169 18.5593 7.19757 18.5593 7.37461V12.556C18.5593 13.9462 19.0771 14.6394 19.6235 15.3711C19.6892 15.459 19.7552 15.5474 19.8209 15.6377C20.0374 15.937 20.0845 16.2972 19.8114 16.5215C19.1289 17.0873 17.9144 18.1396 17.246 18.7288L17.2367 18.7195ZM13.8618 10.7919C13.8617 10.7335 13.8617 10.6746 13.8617 10.6153V9.89517C11.442 9.89517 8.88609 10.4095 8.88609 13.2434C8.88609 14.679 9.63452 15.6517 10.9196 15.6517C11.8611 15.6517 12.7037 15.0766 13.2356 14.1412C13.8645 13.0435 13.8632 12.0097 13.8618 10.7919Z" fill="#A26D46" />
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
    <section id="music" className="bg-gradient-to-br from-[#F7F7F7] to-[#EFEFEF] py-20">
      <div className="container mx-auto px-5 max-w-7xl">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="font-['Baskerville'] text-[48px] md:text-[56px] lg:text-[64px] text-[#1B1C1C] mb-6 leading-tight">
            Latest Release
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#A26D46] to-[#8B5A3A] mx-auto mb-8"></div>
          <p className="text-[18px] md:text-[20px] text-[#666] max-w-2xl mx-auto leading-relaxed">
            Experience our newest spiritual journey through music. Available on all major streaming platforms.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column - Album Showcase */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A26D46]/10 to-transparent rounded-full -mr-16 -mt-16"></div>

              <div className="relative">
                <div className="w-full max-w-[280px] mx-auto mb-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
                    <Image
                      src="/assets/che-cd.png"
                      alt="Chemat la Lumina CD"
                      width={280}
                      height={280}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 12L0 24V0L20 12Z" fill="#A26D46" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-['Poppins'] font-bold text-[20px] md:text-[24px] text-[#1B1C1C] mb-3">
                    Chemat la Lumina
                  </h3>
                  <p className="text-[18px] md:text-[20px] text-[#A26D46] font-semibold mb-6">€ 12.00</p>

                  <div className="bg-gradient-to-r from-[#F8F8F8] to-[#F0F0F0] rounded-2xl p-6">
                    <p className="text-[14px] md:text-[16px] text-[#666] leading-relaxed">
                      A spiritual journey through contemporary Christian music, bringing hope and inspiration to believers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Streaming Platforms */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#A26D46]/5 to-transparent rounded-full -ml-20 -mb-20"></div>

              <div className="relative">
                <h3 className="font-['Poppins'] font-bold text-[24px] md:text-[28px] text-[#1B1C1C] mb-8 text-center lg:text-left">
                  Stream Now
                </h3>

                <div className="space-y-4 mb-8">
                  {musicPlatforms.map((platform, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between bg-gradient-to-r from-[#FAFAFA] to-[#F5F5F5] hover:from-white hover:to-[#FAFAFA] rounded-2xl p-5 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-[#A26D46]/20">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300">
                            {typeof platform.icon === 'string' ? (
                              <span className="text-[18px]">{platform.icon}</span>
                            ) : (
                              <div className="scale-75">{platform.icon}</div>
                            )}
                          </div>
                          <span className="text-[16px] md:text-[18px] text-[#1B1C1C] font-semibold">{platform.name}</span>
                        </div>
                        <button className="bg-gradient-to-r from-[#A26D46] to-[#8B5A3A] text-white px-6 py-3 rounded-full text-[12px] md:text-[13px] tracking-[1px] uppercase font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                          Listen
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-[#A26D46]/10 to-[#8B5A3A]/10 rounded-2xl p-6 border border-[#A26D46]/20">
                  <h4 className="font-['Poppins'] font-semibold text-[18px] text-[#1B1C1C] mb-3">
                    Follow Our Journey
                  </h4>
                  <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                    Stay connected for the latest releases, live performances, and spiritual content that inspires faith.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-[12px] text-[#A26D46] font-medium border border-[#A26D46]/20">Music Streaming</span>
                    <span className="px-3 py-1 bg-white rounded-full text-[12px] text-[#A26D46] font-medium border border-[#A26D46]/20">Live Performances</span>
                    <span className="px-3 py-1 bg-white rounded-full text-[12px] text-[#A26D46] font-medium border border-[#A26D46]/20">Exclusive Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}