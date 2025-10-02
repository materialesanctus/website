"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection, ScaleAnimation } from './animations';

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <section id="videos" className="relative h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/video-eu-sunt.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#171718] bg-opacity-60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <FadeInSection>
            <div className="video-player">
              <ScaleAnimation hoverScale={1.1}>
                <motion.button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative"
                  aria-label="Play video"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <svg width="86" height="86" viewBox="0 0 86 86" fill="none" className="transition-transform">
                    <circle cx="43" cy="43" r="43" fill="#F0F0F0" fillOpacity="0.1"/>
                    <circle cx="43" cy="43" r="42" stroke="#F0F0F0" strokeWidth="2"/>
                    <path d="M35 29L57 43L35 57V29Z" fill="#F0F0F0"/>
                  </svg>
                </motion.button>
              </ScaleAnimation>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-light z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close video"
              >
                ✕
              </motion.button>

              {/* YouTube Video Embed */}
              <div 
                className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src="https://www.youtube.com/embed/7MRsEEIL9qI?autoplay=1&rel=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full pointer-events-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}