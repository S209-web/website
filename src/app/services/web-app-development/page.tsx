'use client'

import WebAppHero from '@/components/hero/WebAppHero';
import WebAppServices from '@/components/service/WebAppServices';
import WebAppFAQ from '@/components/faq/WebAppFAQ';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Web, App & Custom Development - Shout OTB",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <WebAppHero />
            <WebAppServices />
            <WebAppFAQ />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
