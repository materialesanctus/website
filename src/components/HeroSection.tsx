'use client';

import Image from "next/image";
import { motion, Variants } from 'framer-motion';
import { StaggeredAnimation, StaggerItem } from './animations';

export default function HeroSection() {
  const handleScrollToNext = () => {
    const nextSection = document.getElementById('concerts');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const logoVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 30
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#171718]">
      {/* Background with blur effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          
        />
      </div>
      
      {/* Logo Overlay */}
      <div className="relative z-10 text-center opacity-70">
        <StaggeredAnimation 
          className="flex flex-col items-center"
          staggerDelay={0.4}
          childDelay={0.2}
        >
          <StaggerItem>
            <motion.div variants={logoVariants}>
              <Image 
                src="/assets/logo-pro-deo.png" 
                alt="Sanctus" 
                width={600} 
                height={200}
                className="max-w-[300px] md:max-w-[600px] w-full h-auto mb-[-20px]"
                priority
              />
            </motion.div>
          </StaggerItem>
          
          <StaggerItem>
            <motion.div variants={logoVariants}>
              <Image 
                src="/assets/logo-sanctus-header.png" 
                alt="Pro Deo" 
                width={350} 
                height={100}
                className="max-w-[200px] md:max-w-[350px] w-full h-auto"
                priority
              />
            </motion.div>
          </StaggerItem>
        </StaggeredAnimation>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={handleScrollToNext}
          className="cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg p-2 transition-all duration-300"
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
            className="animate-bounce group-hover:animate-none"
          >
            <path 
              d="M2 2L16 14L30 2" 
              stroke="#F0F0F0" 
              strokeWidth="2"
              className="group-hover:stroke-white transition-colors duration-300"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
    </section>
  );
}