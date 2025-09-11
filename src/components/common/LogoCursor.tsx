'use client'

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';

const LogoCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // Debug: Log all media query states
    if (typeof window !== 'undefined') {
      console.log('Cursor Debug:', {
        screenWidth: window.innerWidth,
        hasHover: window.matchMedia('(hover: hover)').matches,
        hasPointer: window.matchMedia('(pointer: fine)').matches,
        hasCoarse: window.matchMedia('(pointer: coarse)').matches,
        userAgent: navigator.userAgent,
      });
    }

    // More permissive logic: Enable cursor unless we're certain it's a pure touch device
    let shouldEnable = true;
    
    if (typeof window !== 'undefined') {
      // Only disable on pure touch devices (no hover AND coarse pointer)
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      const hasCoarse = window.matchMedia('(pointer: coarse)').matches;
      
      // Disable only if no hover capability AND only coarse pointer (pure touch)
      if (!hasHover && !hasPointer && hasCoarse) {
        shouldEnable = false;
        console.log('Cursor disabled: Pure touch device detected');
      } else {
        console.log('Cursor enabled: Device has mouse/trackpad capability');
      }
      
      // Force enable on small screens with fine pointer (small laptops)
      if (window.innerWidth <= 991 && hasPointer) {
        shouldEnable = true;
        console.log('Cursor force-enabled: Small laptop detected');
      }
    }
    
    if (!shouldEnable) return;

    setEnabled(true);
    document.body.classList.add('logo-cursor-active');
    console.log('Cursor activated successfully');

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('logo-cursor-active');
    };
  }, []);

  // Debug mode disabled for production (no red overlays)
  const debugMode = false;

  if (!mounted || !enabled) return null;

  // Render at body level to avoid any transformed parents affecting fixed positioning
  return createPortal(
  <div ref={cursorRef} className="cs_logo_cursor">
      <img src="/assets/img/logoheader.png" alt="Mascot Cursor" width={45} height={45} />
    </div>,
    document.body
  );
};

export default LogoCursor;
