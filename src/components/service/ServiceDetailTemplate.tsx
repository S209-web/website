'use client'

import React from 'react';
import Image from 'next/image';

export type ServiceDetailProps = {
  title: string;
  tagline: string;
  image: string;
  intro: string;
  bullets?: string[];
  extra?: string[];
  bulletsTitle?: string;
  extraTitle?: string;
};

const ServiceDetailTemplate: React.FC<ServiceDetailProps> = ({ title, tagline, image, intro, bullets = [], extra = [], bulletsTitle, extraTitle }) => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">{tagline}</div>
              <h2 className="cs_section_title anim_text_writting">{title}</h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>

          <div className="cs_service_details">
            <div className="cs_service_details_img anim_div_ShowDowns">
              <div className="cs_style_img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={image} alt={title} width={800} height={500} style={{ maxHeight: '300px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text" style={{ fontSize: '1.06rem', lineHeight: 1.75 }}>{intro}</p>
                {(bullets.length > 0) && (
                  <>
                    {bulletsTitle && <div className="cs_height_20"></div>}
                    {bulletsTitle && <h3 className="anim_text" style={{ fontSize: '1.1rem', marginBottom: 10 }}>{bulletsTitle}</h3>}
                    <ul className="anim_div_ShowDowns">
                      {bullets.map((b, i) => (<li key={`b-${i}`}>{b}</li>))}
                    </ul>
                  </>
                )}
                {(extra.length > 0) && (
                  <>
                    <div className="cs_height_20"></div>
                    {extraTitle && <h3 className="anim_text" style={{ fontSize: '1.1rem', marginBottom: 10 }}>{extraTitle}</h3>}
                    <ul className="anim_div_ShowDowns">
                      {extra.map((b, i) => (<li key={`e-${i}`}>{b}</li>))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailTemplate;
