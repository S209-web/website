'use client';

import { useEffect } from "react";  
import { gsap } from 'gsap';

import animationTitle from "@/utils/animationTitle";
import DarkLight from "@/components/common/DarkLight";
import ScrollToTop from "@/components/common/ScrollToTop";
import LogoCursor from "@/components/common/LogoCursor";

import { scrollSmother } from "@/utils/scrollSmother";
import { buttonAnimation } from "@/utils/buttonAnimation";


import { ScrollSmoother, } from "@/plugins";
gsap.registerPlugin(ScrollSmoother);


const Wrapper = ({ children }: any) => {  

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if it's a mobile/touch device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                      ('ontouchstart' in window) || 
                      (navigator.maxTouchPoints > 0);
      
      // Add mobile class to body for CSS targeting
      if (isMobile) {
        document.body.classList.add('is-mobile');
        document.documentElement.classList.add('is-mobile');
      } else {
        document.body.classList.add('is-desktop');
        document.documentElement.classList.add('is-desktop');
      }
      
      if (!isMobile) {
        // Only enable ScrollSmoother on desktop devices
        ScrollSmoother.create({
          smooth: 1.35,
          effects: true,
          smoothTouch: false, // Keep false to prevent conflicts
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      } else {
        // For mobile devices, ensure native scrolling works
        document.body.style.touchAction = 'auto';
        document.documentElement.style.touchAction = 'auto';
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';
        
        // Remove any potential scroll blocking
        const smoothWrapper = document.getElementById('smooth-wrapper');
        const smoothContent = document.getElementById('smooth-content');
        
        if (smoothWrapper) {
          smoothWrapper.style.transform = 'none';
          smoothWrapper.style.height = 'auto';
          smoothWrapper.style.overflow = 'visible';
          smoothWrapper.style.touchAction = 'auto';
        }
        if (smoothContent) {
          smoothContent.style.transform = 'none';
          smoothContent.style.height = 'auto';
          smoothContent.style.touchAction = 'auto';
        }
      }
    }
  }, []);

  useEffect(() => {

    // buttonAnimation()
    // animationTitle()
    scrollSmother();
  }, [])



  return <>
    <LogoCursor />
    {children}
    <ScrollToTop />
    <DarkLight />

  </>;
};

export default Wrapper;

