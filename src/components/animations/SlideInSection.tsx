'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  className?: string;
}

export default function SlideInSection({ 
  children, 
  direction = 'bottom',
  delay = 0, 
  className = "" 
}: SlideInSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -60, y: 0 };
      case 'right':
        return { x: 60, y: 0 };
      case 'top':
        return { x: 0, y: -60 };
      case 'bottom':
        return { x: 0, y: 60 };
      default:
        return { x: 0, y: 60 };
    }
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0,
      ...getInitialPosition()
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
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
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}