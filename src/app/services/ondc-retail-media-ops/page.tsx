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
              title="ONDC & Retail Media Ops"
              tagline="Visibility + sales on every platform."
              image="/assets/img/ONDC.png"
              intro="Expand e‑commerce distribution and win more shelves. We manage listings, ads, and ops across marketplaces—including ONDC—so products stay discoverable and in‑stock."
              bulletsTitle="What we run"
              bullets={[
                'Catalog onboarding, taxonomy, and SEO for listings',
                'Sponsored ads and retail media optimization',
                'Pricing, inventory, and promotions management',
                'Review velocity and ratings improvement'
              ]}
              extraTitle="Platforms"
              extra={['Amazon', 'Flipkart', 'Meesho', 'JioMart', 'ONDC and more']}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
