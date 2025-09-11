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
              title="AI-Based Content Creation"
              tagline="AI tools with human touch."
              image="/assets/img/AI Developer.png"
              intro="Scale content with AI—without losing the human spark. We combine prompt engineering with brand voice systems to produce assets that feel on‑brand and ready to publish."
              bulletsTitle="What we create"
              bullets={[
                'AI voiceovers, avatars, and presenters',
                'Ad variations and promo assets at scale',
                'Blog drafts, outlines, and briefs with sources',
                'Text‑to‑image/video for concept exploration'
              ]}
              extraTitle="Quality controls"
              extra={[
                'Fact‑checking and plagiarism safeguards',
                'Style guides and tone consistency',
                'Human edit pass before publishing'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
