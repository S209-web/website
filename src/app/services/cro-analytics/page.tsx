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
              tagline="Conversions aren't luck—they're strategy."
              image="/assets/img/Perfornmence and growth.png"
              intro="Turn traffic into revenue. We analyze journeys, fix friction, and run experiments that lift conversion without just increasing spend."
              description="Maximize your website's conversion potential through data-driven optimization and comprehensive analytics tracking."
              sections={[
                {
                  title: "Tooling & process",
                  content: [
                    'Event tracking, GA4, pixels, heatmaps, and session replay',
                    'Hypothesis backlog and prioritization framework',
                    'A/B tests on copy, layout, offer, and pricing',
                    'Attribution sanity checks and funnel diagnostics'
                  ]
                },
                {
                  title: "Outcomes we aim for",
                  content: [
                    'Higher CVR and lower CPA',
                    'Better retention and LTV',
                    'Cleaner data for smarter decisions'
                  ]
                }
              ]}
              cta="Start optimizing your conversion funnel today."
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
