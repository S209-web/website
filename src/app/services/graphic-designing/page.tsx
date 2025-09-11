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
              title="Graphic Designing"
              tagline="Designs that define your brand’s first impression."
              image="/assets/img/Graphic design.png"
              intro="Build a strong visual identity with designs that feel premium and purposeful. We create consistent brand systems and day-to-day creatives that make you look world‑class across platforms—social, print, web, and ads."
              bulletsTitle="What we design"
              bullets={[
                'Brand identity: logo, color system, typography, iconography',
                'Social media kits: post, story, reel covers, highlight icons',
                'Marketing collaterals: brochures, flyers, standees, pitch decks',
                'OOH & print: banners, posters, packaging, signage',
                'Ad creatives: static, carousels, thumb‑stoppers, display ads'
              ]}
              extraTitle="Design inspiration & sources"
              extra={[
                'UI/UX patterns inspired by modern product brands',
                'Minimal, high‑contrast layouts for readability and speed',
                'Motion‑ready assets designed for reels and shorts',
                'Pixel‑perfect export workflow for fast load and clarity'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
