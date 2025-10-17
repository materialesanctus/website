"use client";

import Image from "next/image";
import { motion, Variants } from 'framer-motion';

export default function TempHeader() {
  const handleScrollToNext = () => {
    const nextSection = document.getElementById('concerts');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollIndicatorVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5
      }
    }
  };

  return (
    <header className="w-full pt-16 md:pt-20">
      {/* Desktop Image */}
      <div className="hidden md:block w-full">
        <Image 
          src="/assets/craciun-desktop-v2.jpg" 
          alt="Crăciun - Sanctus Pro Deo" 
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Mobile Image */}
      <div className="block md:hidden w-full">
        <Image 
          src="/assets/craciun-mobile-v2.jpg" 
          alt="Crăciun - Sanctus Pro Deo" 
          width={768}
          height={1024}
          className="w-full h-auto" 
          priority
        />
      </div>

      {/* Scroll Indicator - Mobile Only */}
      <div className="block md:hidden flex justify-center pb-0 pt-8">
        <motion.button
          onClick={handleScrollToNext}
          className="cursor-pointer group focus:outline-none focus:ring-2 p-2 focus:ring-white focus:ring-opacity-50 rounded-lg transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to next section"
        >
          <motion.svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0.2 }
            }}
          >
            <path
              d="M2 2L16 14L30 2"
              stroke="#F0F0F0"
              strokeWidth="2"
              className="group-hover:stroke-white transition-colors duration-300"
            />
          </motion.svg>
        </motion.button>
      </div>
    </header>
  );
}
