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
              title="Copywriting"
              tagline="From captions to campaigns—we write it all."
              image="/assets/img/copywriter1.png"
              intro="Words that sell without sounding salesy. We write crisp copy that respects attention and moves people to act—on ads, landing pages, and socials."
              bulletsTitle="Where we write"
              bullets={[
                'Ad copy and creative concepts',
                'Websites, landing pages, and microcopy',
                'Email sequences and WhatsApp flows',
                'Reel/Shorts scripts and hook libraries',
                'Case studies, blogs, and founder posts'
              ]}
              extraTitle="Voice & tone system"
              extra={[
                'Brand voice docs and message pillars',
                'Clarity and brevity first; jargon last',
                'A/B options for testing headlines and CTAs'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
