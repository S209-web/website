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
              title="Video Editing"
              tagline="Transforming raw footage into cinematic stories."
              image="/assets/img/Video editing.png"
              intro="Bring stories to life with editing built for attention and outcomes. From fast‑paced social edits to polished brand films, we optimize pacing, hooks, and formats for every platform."
              bulletsTitle="Formats we deliver"
              bullets={[
                'Reels/Shorts with hook‑first storytelling',
                'Explainers, ads, product and brand films',
                'Logo stings, lower thirds, motion graphics',
                '2D/3D animation and mixed‑media edits',
                'YouTube long‑form with chapters and CTAs'
              ]}
              extraTitle="Editing approach"
              extra={[
                'Data‑backed cuts, subtitles, and retention‑optimized pacing',
                'Color, sound, and export pipelines tuned for clarity and speed',
                'Template libraries for faster series production'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
