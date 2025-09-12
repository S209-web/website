'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import DesignFaq from '@/components/faq/DesignFaq';
import HeroDesign from '@/components/hero/HeroDesign';
import DesignAreaDetails from '@/components/service/DesignAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroDesign />
            <DesignAreaDetails />
            <DesignFaq />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
