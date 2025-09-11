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
              title="Social Media Management"
              tagline="We manage, you grow."
              image="/assets/img/Social media manager.png"
              intro="From content calendars to analytics, we run your social like a growth engine. Creative assets, captions, scheduling, community, and reporting—handled end‑to‑end."
              bulletsTitle="What’s included"
              bullets={[
                'Monthly content strategy and posting calendar',
                'Design, copy, hashtags, and platform‑specific formatting',
                'Comments, DMs, and community engagement',
                'Influencer seeding and UGC integration',
                'Analytics, insights, and monthly growth reports'
              ]}
              extraTitle="Platforms"
              extra={['Instagram', 'YouTube', 'LinkedIn', 'Facebook', 'X (Twitter)', 'Threads', 'Pinterest']}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
