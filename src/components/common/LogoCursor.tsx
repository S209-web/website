'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import logoImage from "@/assets/img/Asset 12.png";

const LogoCursor = () => {
  
  const mousemoveHandler = (e: any) => {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Logo Cursor Moving
      tl.to(".cs_logo_cursor", {
        ease: "power2.out",
        duration: 0.15,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Hide default cursor on body and add class for CSS targeting
    document.body.style.cursor = 'none';
    document.body.classList.add('logo-cursor-active');
    
    document.addEventListener("mousemove", mousemoveHandler);
    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
      // Reset cursor when component unmounts
      document.body.style.cursor = 'auto';
      document.body.classList.remove('logo-cursor-active');
    };
  }, []);

  return (
    <>
      <div className="cs_logo_cursor">
        <Image 
          src={logoImage} 
          alt="Shout OTB" 
          width={30} 
          height={30}
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}
        />
      </div>
    </>
  );
};

export default LogoCursor;
