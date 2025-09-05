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

    // Enable only on hover-capable devices (avoid touch)
    const hasHover = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    setEnabled(true);
    document.body.classList.add('logo-cursor-active');

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
