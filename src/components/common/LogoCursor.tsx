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

    // More strict mobile detection for touch scrolling compatibility
    let shouldEnable = true;
    
    if (typeof window !== 'undefined') {
      // Check for mobile/touch devices
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      const hasCoarse = window.matchMedia('(pointer: coarse)').matches;
      
      // Disable cursor on mobile devices to prevent touch event interference
      if (isMobileUA || hasTouch || (!hasHover && !hasPointer && hasCoarse)) {
        shouldEnable = false;
        console.log('Cursor disabled: Mobile/touch device detected');
      } else {
        console.log('Cursor enabled: Desktop device detected');
      }
      
      // Force disable on screens smaller than 768px (likely mobile)
      if (window.innerWidth < 768) {
        shouldEnable = false;
        console.log('Cursor disabled: Small screen detected');
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

  // Add a debug mode that forces cursor on small screens
  const [debugMode, setDebugMode] = useState(false);
  
  useEffect(() => {
    // Enable debug mode for screens smaller than 991px for testing
    if (typeof window !== 'undefined' && window.innerWidth <= 991) {
      setDebugMode(true);
    }
  }, []);

  if (!mounted || (!enabled && !debugMode)) return null;

  // Render at body level to avoid any transformed parents affecting fixed positioning
  return createPortal(
    <div ref={cursorRef} className="cs_logo_cursor" style={{
      position: 'fixed',
      pointerEvents: 'none', // Ensure cursor never blocks touch events
      zIndex: 9999,
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      transition: 'opacity 0.2s ease',
      touchAction: 'none', // Prevent touch events on cursor element itself
      // Extra debug styles for small screens
      ...(debugMode ? {
        background: 'rgba(255, 0, 0, 0.3)',
        border: '3px solid red',
        display: 'flex !important' as any,
        zIndex: 999999
      } : {})
    }}>
      <img src="/assets/img/logoheader.png" alt="Mascot Cursor" width={45} height={45} />
      {debugMode && (
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '0',
          background: 'red',
          color: 'white',
          padding: '4px',
          fontSize: '10px',
          whiteSpace: 'nowrap',
          borderRadius: '4px'
        }}>
          DEBUG MODE
        </div>
      )}
    </div>,
    document.body
  );
};

export default LogoCursor;
