'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import ONDCFaq from '@/components/faq/ONDCFaq';
import HeroONDC from '@/components/hero/HeroONDC';
import ONDCAreaDetails from '@/components/service/ONDCAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "ONDC & Retail Media Operations - Shout Out of the Box",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroONDC />
            <ONDCAreaDetails />
            <ONDCFaq />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
