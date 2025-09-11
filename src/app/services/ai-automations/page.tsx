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
              title="AI Automations"
              tagline="AI that works while you sleep."
              image="/assets/img/humanfirtstautomation.png"
              intro="Automate the busywork and keep the human touch. We stitch tools together so ops run faster—from lead capture to follow‑ups and reporting."
              bulletsTitle="Automations we build"
              bullets={[
                'WhatsApp + CRM workflows and lead routing',
                'AI chatbots, FAQs, and handoff to human',
                'Reporting dashboards with alerts',
                'Data syncs across marketing apps'
              ]}
              extraTitle="Stack"
              extra={['Make/Zapier', 'Webhook + serverless', 'Meta/Google APIs', 'Sheets/BigQuery/Notion']}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
