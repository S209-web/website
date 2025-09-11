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
              title="WhatsApp Marketing"
              tagline="The fastest way to your customers’ hearts."
              image="/assets/img/Whatsapp.png"
              intro="Turn conversations into conversions. Build high‑intent journeys with click‑to‑WhatsApp ads, automated replies, and CRM‑ready data capture."
              bulletsTitle="What we set up"
              bullets={[
                'Click‑to‑WhatsApp ads and entry points',
                'Chatbots, quick replies, and keyword flows',
                'Broadcasts, drip sequences, and personalization',
                'Catalog + payments + FAQs integration',
                'CRM sync (leads, tags, and analytics)'
              ]}
              extraTitle="Outcomes"
              extra={[
                'Faster response times and higher conversion rates',
                'Lower CAC through conversational selling',
                'Better retention with timely nudges and offers'
              ]}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
