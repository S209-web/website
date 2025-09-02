 
 'use client';

import { useEffect } from "react";  
import { gsap } from 'gsap';

import animationTitle from "@/utils/animationTitle";
import DarkLight from "@/components/common/DarkLight";
import LogoCursor from "@/components/common/LogoCursor";
import ScrollToTop from "@/components/common/ScrollToTop";

import { scrollSmother } from "@/utils/scrollSmother";
import { buttonAnimation } from "@/utils/buttonAnimation";


import { ScrollSmoother, } from "@/plugins";
gsap.registerPlugin(ScrollSmoother);


const Wrapper = ({ children }: any) => {  

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
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

