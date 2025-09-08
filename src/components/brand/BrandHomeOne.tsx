'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';


type DataType = StaticImageData[];
import saregamapa from "@/../../public/assets/img/saregamapa.png"
import lalsa from "@/../../public/assets/img/lalsa.png"
import astrowithasha from "@/../../public/assets/img/astrowithasha.png"
import magikmoments from "@/../../public/assets/img/Magik Moments.png"
import drsoumya from "@/../../public/assets/img/Dr Soumya Gupta.png"

const brand_data: DataType = [
  saregamapa,
  lalsa,
  astrowithasha,
  magikmoments,
  drsoumya,
]

const brand_thumb_data: DataType = [
  saregamapa,
  lalsa,
  astrowithasha,
  magikmoments,
  drsoumya,
]


const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <> 
      
      {style_2 ?
        <>
          <div className="cs_height_150 cs_height_lg_60"></div>
          <p className="text-center cs_font_18 cs_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
        :
        <div className="cs_height_140 cs_height_lg_70"></div>
      }
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo" style={{
                  padding: '10px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image src={item} alt="client-logo" style={{
                    maxHeight: '80px',
                    width: 'auto',
                    objectFit: 'contain'
                  }} />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo" style={{
                  padding: '10px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image src={item} alt="client-logo" style={{
                    maxHeight: '80px',
                    width: 'auto',
                    objectFit: 'contain'
                  }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_45 cs_height_lg_45"></div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo" style={{
                  padding: '10px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image src={item} alt="client-logo" style={{
                    maxHeight: '80px',
                    width: 'auto',
                    objectFit: 'contain'
                  }} />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo" style={{
                  padding: '10px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image src={item} alt="client-logo" style={{
                    maxHeight: '80px',
                    width: 'auto',
                    objectFit: 'contain'
                  }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {style_2 ? null :
        <div className="cs_height_140 cs_height_lg_70"></div>
      } */}
      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;