'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import CreativeContentFaq from '@/components/faq/CreativeContentFaq';
import HeroCreativeContent from '@/components/hero/HeroCreativeContent';
import CreativeContentAreaDetails from '@/components/service/CreativeContentAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Creative & Content Services - Shout Out of the Box",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroCreativeContent />
            <CreativeContentAreaDetails />
            <CreativeContentFaq />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
