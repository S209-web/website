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
  title="AI-SEO, GEO, AEO"
  tagline="Optimized for AI Overviews and beyond."
  image="/assets/img/GlobalMindset.png"
  intro="In the new era of AI-powered search, traditional SEO is not enough. We leverage AI-SEO, Geo-targeting, and Answer Engine Optimization (AEO) to position your brand for visibility in AI Overviews and beyond, ensuring you connect with customers at their point of need."
  // Add the required 'description' prop below
  description="A detailed description about your AI-SEO, GEO, and AEO services goes here. Explain the benefits, your process, and how it helps clients succeed in a search landscape dominated by AI." 
/>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
