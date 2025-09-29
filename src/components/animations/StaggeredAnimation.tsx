'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}

export default function StaggeredAnimation({ 
  children, 
  className = "",
  staggerDelay = 0.2,
  childDelay = 0.1
}: StaggeredAnimationProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}