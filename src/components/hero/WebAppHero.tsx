import React from 'react';
import Image from 'next/image';

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_webapp_development: DataType = {
  title: "Web, App & Custom Development",
  description: `From cutting-edge websites to enterprise-level applications, we build technology that scales with your business. Our development solutions combine innovative design with robust coding to deliver platforms that perform as hard as you do. Whether it's a corporate website, mobile app, or custom CRM, we create digital solutions that drive growth.`,
  features: [
    `🎨 Design (UI/UX & Branding) - Designing experiences, not just screens`,
    `💻 Development (Coding & Technology) - Websites that work as hard as you do`,
    `🚀 Custom Solutions & Integrations - Technology that grows with your business`,
    `⚡ Performance & Optimization - Fast, secure, and scalable platforms`,
  ]
}

const { title, description, features } = hero_webapp_development

const WebAppHero = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting" style={{ fontSize: '4.5rem', fontWeight: '400' }}>
                 {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image 
                  src="/assets/img/service_details_banner.jpg" 
                  width={1920} 
                  height={1080} 
                  alt="webapp_development_banner" 
                />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>                    
                  ))} 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default WebAppHero;
