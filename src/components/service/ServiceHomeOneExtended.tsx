"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { serviceDetailData } from '@/data/service_detail_data';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

const services: ServiceItem[] = [
  { id: 1, title: 'Graphic Designing', image: '/assets/img/Graphic design.png' },
  { id: 2, title: 'Video Editing', image: '/assets/img/Video editing.png' },
  { id: 3, title: 'Social Media Management', image: '/assets/img/Social media manager.png' },
  { id: 4, title: 'AI-Based Content Creation', image: '/assets/img/AI Developer.png' },
  { id: 5, title: 'Copywriting', image: '/assets/img/copywriter1.png' },
  { id: 6, title: 'WhatsApp Marketing', image: '/assets/img/Whatsapp.png' },
  { id: 7, title: 'Performance Marketing', image: '/assets/img/performancemarketing.png' },
  { id: 8, title: 'Influencer Marketing & PR', image: '/assets/img/Influencer Marketer.png' },
  { id: 9, title: 'AI-SEO, GEO, AEO & Content Protection', image: '/assets/img/seo.png' },
  { id: 10, title: 'ONDC & Retail Media Ops', image: '/assets/img/ONDC.png' },
  { id: 11, title: 'CRO & Analytics Hub', image: '/assets/img/Perfornmence and growth.png' },
  { id: 12, title: 'UGC & Creator Commerce', image: '/assets/img/Social & Community Growth.png' },
  { id: 13, title: 'AI Automations', image: '/assets/img/aiautomation.png'},
  { id: 14, title: 'Web & App Development with Custom Solutions', image: '/assets/img/web app devlopment.png' },
  { id: 15, title: 'Design (UI/UX & Branding)', image: '/assets/img/uidesign.png'},
  { id: 16, title: 'Development (Coding & Technology)', image: '/assets/img/Web Developer.png' },
];

type Props = {
  compact?: boolean;
  hideHeading?: boolean;
};

const ServiceHomeOneExtended = ({ compact = false, hideHeading = false }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animElements = entry.target.querySelectorAll(
          '.anim_div_ShowZoom, .anim_heading_title, .anim_div_ShowDowns'
        );
        if (entry.isIntersecting) {
          animElements.forEach((element, index) => {
            setTimeout(() => element.classList.add('active'), index * 120);
          });
        } else {
          animElements.forEach((element) => element.classList.remove('active'));
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .cs_card { position: relative; overflow: hidden; }
        .cs_card_right_in { padding-right: 140px; }
        .cs_service_mascot { transition: all .4s cubic-bezier(.4,0,.2,1); opacity: .9; }
        .cs_card:hover .cs_service_mascot { transform: translate(-50%, -54%) scale(1.06) rotate(1.5deg); opacity: 1; }

        /* Animations */
        .anim_div_ShowZoom{opacity:0;transform:scale(.9) translateY(20px);transition:all .8s cubic-bezier(.25,.46,.45,.94)}
        .anim_div_ShowZoom.active{opacity:1;transform:scale(1) translateY(0)}
        .anim_heading_title{opacity:0;transform:translateY(60px) translateX(-20px);transition:all .9s cubic-bezier(.25,.46,.45,.94)}
        .anim_heading_title.active{opacity:1;transform:none}
        .anim_div_ShowDowns{opacity:0;transform:translateY(60px) scale(.98);transition:all .85s cubic-bezier(.25,.46,.45,.94)}
        .anim_div_ShowDowns.active{opacity:1;transform:none}

  /* subtitle under card title */
  .cs_card_subtitle{font-size:14px;color:rgba(0,0,0,0.65);margin-top:6px;font-weight:600;line-height:1.35}
  @media (max-width:767px){ .cs_card_subtitle{font-size:13px} }

        /* Mascot sizing aligned with homepage */
        .cs_service_mascot{position:absolute; left:75%; top:50%; transform:translate(-50%, -50%); width:130px; height:130px; z-index:2; pointer-events:none}
        .cs_service_mascot_large{width:260px; height:260px}
        @media (max-width:1199px){ .cs_card_right_in{padding-right:120px} .cs_service_mascot{width:110px;height:110px} .cs_service_mascot_large{width:220px;height:220px} }
        @media (max-width:991px){ .cs_card_right_in{padding-right:100px} .cs_service_mascot{width:95px;height:95px} .cs_service_mascot_large{width:190px;height:190px} }
        @media (max-width:767px){ .cs_card_right_in{padding-right:84px} .cs_service_mascot{width:80px;height:80px} .cs_service_mascot_large{width:160px;height:160px} }
        @media (max-width:575px){ .cs_card_right_in{padding-right:60px} .cs_service_mascot{width:56px;height:56px; right:12px; left:auto; top:20px; transform:none} .cs_service_mascot_large{width:112px;height:112px; right:5px; top:10px} }
        @media (max-width:480px){ .cs_service_mascot{width:50px;height:50px; right:10px; top:18px} .cs_service_mascot_large{width:100px;height:100px; right:3px; top:8px} }
      `}</style>

      <section className="cs_primary_bg position-relative" ref={sectionRef}>
        <div className={compact ? 'cs_height_50 cs_height_lg_30' : 'cs_height_150 cs_height_lg_60'}></div>
        <div className="container">
          {!hideHeading && (
            <>
              <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <div className="cs_section_subtitle anim_div_ShowZoom">Our Services</div>
                  <h2 className="cs_section_title anim_heading_title">Services Your Brand Needs</h2>
                </div>
              </div>
              <div className="cs_height_50 cs_height_lg_10"></div>
            </>
          )}

          <div className="cs_card_1_list">
            {services.map((item, i) => (
              <div key={item.id} className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns" style={{ position:'relative', overflow:'hidden' }}>
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url(/assets/img/hero_img_1.jpg)` }}>
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title"><Link href={
                      item.title === 'Graphic Designing' ? '/services/graphic-designing' :
                      item.title === 'Video Editing' ? '/services/video-editing' :
                      item.title === 'Social Media Management' ? '/services/social-media-management' :
                      item.title === 'AI-Based Content Creation' ? '/services/ai-based-content' :
                      item.title === 'Copywriting' ? '/services/copywriting' :
                      item.title === 'WhatsApp Marketing' ? '/services/whatsapp-marketing' :
                      item.title === 'Performance Marketing' ? '/services/performance-marketing' :
                      item.title === 'Influencer Marketing & PR' ? '/services/influencer-marketing-pr' :
                      item.title === 'AI-SEO, GEO, AEO & Content Protection' ? '/services/ai-seo-geo-aeo-content-protection' :
                      item.title === 'ONDC & Retail Media Ops' ? '/services/ondc-retail-media-ops' :
                      item.title === 'CRO & Analytics Hub' ? '/services/cro-analytics' :
                      item.title === 'UGC & Creator Commerce' ? '/services/ugc-creator-commerce' :
                      item.title === 'AI Automations' ? '/services/ai-automations' :
                      item.title === 'Web & App Development with Custom Solutions' ? '/services/web-app-custom-solutions' :
                      item.title === 'Design (UI/UX & Branding)' ? '/services/design-ui-ux-branding' :
                      item.title === 'Development (Coding & Technology)' ? '/services/development-coding-technology' :
                      '/service'
                    }>{item.title}</Link></h2>
                    {/* subtitle / one-line tagline from serviceDetailData */}
                    {(() => {
                      // try to find matching service by title or by a normalized id
                      const match = serviceDetailData.find(s => s.title === item.title) ||
                        serviceDetailData.find(s => item.title.toLowerCase().includes(s.id.replace(/-/g, ' ')));
                      return match ? <div className="cs_card_subtitle anim_div_ShowZoom">{match.tagline}</div> : null;
                    })()}
                  </div>
                  <div className={`cs_service_mascot ${(i === 0 || i === 5 || i === 9) ? 'cs_service_mascot_large' : ''}`}>
                    <Image
                      src={item.image}
                      alt={`${item.title} mascot`}
                      width={(i === 0 || i === 5 || i === 9) ? 224 : 112}
                      height={(i === 0 || i === 5 || i === 9) ? 224 : 112}
                      style={{ objectFit: 'contain', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))', borderRadius: 8 }}
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>
    </>
  );
};

export default ServiceHomeOneExtended;
