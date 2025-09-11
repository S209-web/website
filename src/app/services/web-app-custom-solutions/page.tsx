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
              title="Web & App Development with Custom Solutions"
              tagline="Websites that work as hard as you do."
              image="/assets/img/web app devlopment.png"
              intro="More than a website—build systems that support growth. From marketing sites to internal tools, we ship reliable, fast products."
              bulletsTitle="What we build"
              bullets={[
                'Marketing sites, blogs, and landing page systems',
                'E‑commerce, subscriptions, and payments',
                'Dashboards, internal apps, and lightweight CRMs',
                'Integrations and admin tooling'
              ]}
              extraTitle="Principles"
              extra={[
                'Performance budgets and SEO basics by default',
                'Accessible, responsive, and easy to maintain',
                'Analytics, forms, and automations wired in'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
