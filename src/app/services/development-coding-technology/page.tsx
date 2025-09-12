'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import DevelopmentFaq from '@/components/faq/DevelopmentFaq';
import HeroDevelopment from '@/components/hero/HeroDevelopment';
import DevelopmentAreaDetails from '@/components/service/DevelopmentAreaDetails';
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
            <HeroDevelopment />
            <DevelopmentAreaDetails />
            <DevelopmentFaq />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
