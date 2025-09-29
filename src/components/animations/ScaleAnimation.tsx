'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
}

export default function ScaleAnimation({ 
  children, 
  delay = 0, 
  className = "",
  hoverScale = 1.05
}: ScaleAnimationProps) {
  const variants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}