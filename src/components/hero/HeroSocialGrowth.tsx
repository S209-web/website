import React from 'react';
import Image from 'next/image';
import banner_img from '@/assets/img/service_details_banner.jpg';

interface DataType {
  title: string;
  description: string;
  features: string[];
}

const hero_social_growth: DataType = {
  title: "Social & Community Growth",
  description: `In today's digital world, success isn't just about broadcasting your message—it's about building a loyal community. We move beyond simple posting to create genuine connections. Through strategic social media management, authentic influencer collaborations, and powerful user-generated content, we turn your audience into dedicated brand advocates.`,
  features: [
    `📈 Strategic social media management that drives real growth`,
    `🤝 Authentic influencer collaborations and PR placements`,
    `💬 User-generated content campaigns that build trust`,
    `🚀 Community-building strategies that create brand advocates`,
  ]
}

const { title, description, features } = hero_social_growth

const HeroSocialGrowth = () => {
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
                <Image src={banner_img} alt="social_community_growth_banner" />
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

export default HeroSocialGrowth;
