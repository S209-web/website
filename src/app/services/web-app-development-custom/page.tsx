'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailTemplate from '@/components/service/ServiceDetailTemplate';

export default function Page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailTemplate
              title="Web & App Development with Custom Solutions"
              tagline="Faster, cleaner, smarter websites."
              image="/assets/img/web app devlopment.png"
              intro="Your business deserves more than a website. We design and develop websites, apps, and CRMs that are fast, scalable, and optimized for growth—giving you technology that performs as hard as you do."
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
