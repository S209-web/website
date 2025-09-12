'use client'

import React from 'react';
import GraphicDesignDetails from '@/components/service/GraphicDesignDetails';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export const metadata = {
  title: "Graphic Design Services - Shout Code Digital Agency",
  description: "Designs so bold that your brand never whispers, it SHOUTS. Professional graphic design services including logos, social media creatives, and brand identity.",
};

const GraphicDesignPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <GraphicDesignDetails />
            <ServiceDetailsFaq />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default GraphicDesignPage;
