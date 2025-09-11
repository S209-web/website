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
              title="UGC & Creator Commerce"
              tagline="Real voices, real growth."
              image="/assets/img/Social & Community Growth.png"
              intro="Win trust with creator‑style content that feels native, not ads. Seed products, gather testimonials, and turn UGC into high‑performing ads."
              bulletsTitle="What we produce"
              bullets={[
                'Unboxing, try‑ons, how‑to, and POV testimonial videos',
                'Creator briefs and content guidelines',
                'Affiliate setups and link tracking',
                'Live shopping and highlight edits'
              ]}
              extraTitle="Distribution"
              extra={['Organic feeds', 'Paid social (UGC‑style ads)', 'Marketplaces and PDPs', 'Landing pages and emails']}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
