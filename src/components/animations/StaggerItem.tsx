'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerItem({ 
  children, 
  className = ""
}: StaggerItemProps) {
  const variants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}