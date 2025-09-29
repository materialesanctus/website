'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setShouldReduceMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return shouldReduceMotion;
}

// Animation configurations that respect reduced motion
export const getAnimationConfig = (shouldReduceMotion: boolean) => ({
  duration: shouldReduceMotion ? 0.1 : 0.8,
  ease: shouldReduceMotion ? "linear" : "easeOut",
  scale: shouldReduceMotion ? 1 : undefined,
  y: shouldReduceMotion ? 0 : undefined,
  x: shouldReduceMotion ? 0 : undefined,
});

// Viewport configuration for animations
export const viewportConfig = {
  once: true,
  margin: "-100px",
  amount: 0.3
};