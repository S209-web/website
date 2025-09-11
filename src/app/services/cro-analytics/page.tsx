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
              title="CRO & Analytics Hub"
              tagline="Conversions aren’t luck—they’re strategy."
              image="/assets/img/Perfornmence and growth.png"
              intro="Turn traffic into revenue. We analyze journeys, fix friction, and run experiments that lift conversion without just increasing spend."
              bulletsTitle="Tooling & process"
              bullets={[
                'Event tracking, GA4, pixels, heatmaps, and session replay',
                'Hypothesis backlog and prioritization framework',
                'A/B tests on copy, layout, offer, and pricing',
                'Attribution sanity checks and funnel diagnostics'
              ]}
              extraTitle="Outcomes we aim for"
              extra={[
                'Higher CVR and lower CPA',
                'Better retention and LTV',
                'Cleaner data for smarter decisions'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
