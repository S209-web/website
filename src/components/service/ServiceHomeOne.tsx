import React from 'react';
import Link from 'next/link';

interface DataType {
  id: number;
  title: string;
  des: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    title: `Graphic Designing`,
    des: `Build a strong visual identity with stunning designs that speak for your brand. From logos and social media posts to brochures, banners, and brand kits, we design everything that makes your business look professional and memorable.`
  },
  {
    id: 2,
    title: `Video Editing`,
    des: `Bring your stories to life with engaging video content. We create reels, shorts, 2D/3D animations, logo animations, corporate videos, ads, documentaries, and explainer videos that captivate your audience and boost conversions.`
  },
  {
    id: 3,
    title: `Social Media Management`,
    des: `From designing impactful content and writing compelling captions to optimizing posting times and tracking analytics, our approach combines creativity with strategy to deliver measurable growth.`
  },
  {
    id: 4,
    title: `AI-Based Content Creation`,
    des: `Leverage the power of AI to scale your content faster. We offer AI voiceovers, avatars, ad creatives, blog generation, and text-to-image/video solutions that give you unique, cost-effective content at speed.`
  },
  {
    id: 5,
    title: `Copywriting`,
    des: `Words that sell, connect, and inspire. From ad copies and reel scripts to website content, blogs, emails, and captions—we craft content that speaks your brand’s voice and drives action.`
  },
  {
    id: 6,
    title: `WhatsApp Marketing`,
    des: `Turn conversations into conversions. We build WhatsApp funnels with automated bots, drip campaigns, broadcasts, and click-to-chat ads that improve customer engagement and boost lead generation.`
  },
  {
    id: 7,
    title: `Performance Marketing`,
    des: `Maximize ROI with data-driven advertising. We run Meta, Google, LinkedIn, and YouTube campaigns with A/B testing, daily optimization, and retargeting strategies to generate high-quality leads and sales.`
  },
  {
    id: 8,
    title: `Influencer Marketing & PR`,
    des: `Build trust and visibility with influencer collaborations and PR features. We connect you with micro and nano influencers, and secure “As Seen In” media coverage to amplify your brand credibility.`
  },
  {
    id: 9,
    title: `AI-SEO, GEO, AEO & Content Protection`,
    des: `Stay visible in the AI search era. We optimize your content for Google AI Overviews, Bing Copilot, and ChatGPT results with schema, FAQs, authority content, and repurposed videos to ensure your brand shows up everywhere.`
  },
  {
    id: 10,
    title: `ONDC & Retail Media Ops`,
    des: `Expand your e-commerce reach with ONDC and retail ads. We handle onboarding, catalog optimization, and run ad campaigns across Amazon, Flipkart, Meesho, and ONDC to get more visibility and sales.`
  },
  {
    id: 11,
    title: `CRO & Analytics Hub`,
    des: `Conversion Rate Optimization is not guesswork—it’s a structured process. We apply proven methodologies to analyze your funnels, run controlled experiments, and deliver measurable improvements to your KPIs.`
  },
  {
    id: 12,
    title: `UGC & Creator Commerce`,
    des: `Win customer trust with authentic content. We produce user-style testimonial videos, seed products with micro-influencers, set up affiliate programs, and run live shopping campaigns to boost conversions.`
  },
  {
    id: 13,
    title: `AI Automations`,
    des: `Automate your marketing and sales. From WhatsApp + CRM workflows to AI chatbots and real-time reporting dashboards, we integrate AI tools that save time, reduce costs, and improve customer experience.`
  },
  {
    id: 14,
    title: `Web & App Development`,
    des: `We design and develop websites, apps, and CRMs that are fast, scalable, and optimized for growth—giving you technology that performs as hard as you do.`
  },
  {
    id: 15,
    title: `Design (UI/UX & Branding)`,
    des: `Great development starts with great design. Our UI/UX experts craft user-friendly, visually appealing, and brand-aligned experiences that your audience loves.`
  },
  {
    id: 16,
    title: `Development (Coding & Technology)`,
    des: `Once the designs are locked, our developers bring them to life with robust, scalable code. We ensure speed, security, and performance for every platform.`
  }
];


const ServiceHomeOne = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative">
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Services
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Comprehensive Digital Strategy Transformation
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
                <span>View Services</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_10"></div>
          <div className="cs_card_1_list">
            {service_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url(/assets/img/hero_img_1.jpg)` }}>
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">
                      {item.des}
                    </div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor" />
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor" />
                      </svg>
                    </span>
                  </Link>
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

export default ServiceHomeOne;