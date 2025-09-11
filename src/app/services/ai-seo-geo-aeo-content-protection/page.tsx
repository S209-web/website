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
              title="AI-SEO, GEO, AEO & Content Protection"
              tagline="Protect your brand in the AI landscape."
              image="/assets/img/seo.png"
              intro="Search is changing. We optimize for AI Overviews and assistants while strengthening classic SEO—so you rank on SERPs and surface in AI answers."
              bulletsTitle="What we implement"
              bullets={[
                'Schema, FAQs, and entity‑based optimization',
                'Topical authority maps and content clusters',
                'E‑E‑A‑T signals, reviews, and citation building',
                'Video/article repurposing for multi‑surface visibility'
              ]}
              extraTitle="Protection"
              extra={[
                'Brand impersonation monitoring',
                'Content duplication checks',
                'Trademark and misuse alerts'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
