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
              title="Performance Marketing"
              tagline="Where every click counts."
              image="/assets/img/performancemarketing.png"
              intro="Data‑driven ads with creative that converts. We blend sharp targeting with fast creative iteration to scale profitable campaigns across platforms."
              description="Drive measurable results with performance-focused marketing campaigns that optimize for ROI and scale efficiently across multiple channels."
              sections={[
                {
                  title: "Channels",
                  content: ['Meta', 'Google', 'LinkedIn', 'YouTube', 'Programmatic display']
                },
                {
                  title: "Optimization stack",
                  content: [
                    'A/B testing and creative matrices',
                    'Audience layering and budget pacing',
                    'Event tracking, UTMs, and conversion APIs',
                    'Retargeting and lifecycle nurture flows'
                  ]
                }
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
