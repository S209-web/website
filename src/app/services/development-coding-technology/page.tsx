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
              title="Development (Coding & Technology)"
              tagline="Built for speed, security, and scale."
              image="/assets/img/Web Developer.png"
              intro="Once the designs are locked, our developers bring them to life with robust, scalable code. We ensure speed, security, and performance for every platform."
              bullets={[
                'Website development (corporate, e-commerce, landing pages)',
                'Mobile app development (Android, iOS, hybrid)',
                'Custom CRM & ERP solutions',
                'API integrations & automation',
                'Hosting, domain, SEO basics, performance optimization'
              ]}
              bulletsTitle="Capabilities"
              extraTitle="Tech preferences"
              extra={['Next.js/React', 'Node/Express', 'Prisma/Postgres', 'Firebase/Supabase', 'Tailwind/SCSS']}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
