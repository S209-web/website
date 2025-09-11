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
              title="Design (UI/UX & Branding)"
              tagline="Designing experiences, not just screens."
              image="/assets/img/Strategy_With_Edge_Realistic.png"
              intro="Great development starts with great design. Our UI/UX experts craft user-friendly, visually appealing, and brand-aligned experiences that your audience loves."
              bullets={[
                'Website mockups & landing page design',
                'Mobile app UI/UX design (Android/iOS)',
                'Dashboard & CRM interface design',
                'Wireframing & prototyping (Figma, Adobe XD)',
                'Branding integration (fonts, color palettes, consistency)'
              ]}
              bulletsTitle="Deliverables"
              extraTitle="Brand system add‑ons"
              extra={['Logo refresh', 'Design tokens', 'Component library', 'Illustration style', 'Motion guidelines']}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
