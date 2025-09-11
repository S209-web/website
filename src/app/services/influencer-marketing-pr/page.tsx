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
              title="Influencer Marketing & PR"
              tagline="Collaborations that click."
              image="/assets/img/Influencer Marketer.png"
              intro="Build trust with the right creators and credible features. We run product seeding, paid collabs, and earned media for durable brand lift."
              bulletsTitle="What we handle"
              bullets={[
                'Creator shortlisting, outreach, and negotiation',
                'Briefs, deliverables, and approvals',
                'Usage rights and whitelisting',
                'Affiliate/performance programs and tracking',
                'PR placements and “As Seen In” features'
              ]}
              extraTitle="Creator mix"
              extra={['Nano', 'Micro', 'Mid‑tier', 'UGC creators', 'Regional specialists']}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
