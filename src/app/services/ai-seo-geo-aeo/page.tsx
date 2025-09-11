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
              intro="We prepare your content to surface across AI search experiences—Google AI Overviews, Bing Copilot, and ChatGPT—by structuring data, strengthening authority, and repurposing assets that answer real user intent."
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
