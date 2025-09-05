import React from 'react';
import Image from 'next/image';
import banner_img from '@/assets/img/service_details_banner.jpg';

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_creative_content: DataType = {
  title: "Creative & Content Services",
  description: `From striking visuals to compelling words, our creative team ensures your brand communicates with clarity, creativity, and consistency. We merge artistic vision with strategic marketing to produce content that not only captivates your audience but also achieves your business goals. Whether you need eye-catching graphics, engaging videos, or persuasive copy, we're your creative powerhouse.`,
  features: [
    `🎨 Professional graphic design that defines your brand's visual identity`,
    `🎬 Video editing and motion graphics that tell your story`,
    `✍️ Compelling copywriting from captions to full campaigns`,
    `🚀 Strategic content that drives engagement and conversions`,
  ]
}

const { title, description, features } = hero_creative_content

const HeroCreativeContent = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                 {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="creative_content_banner" />
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

export default HeroCreativeContent;
