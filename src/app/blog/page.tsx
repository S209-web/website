'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

const ComingSoonPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="cs_height_219 cs_height_lg_120"></div>
            <section>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_1 text-center">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title anim_text_writting">Coming Soon</h2>
                    <div className="cs_section_subtitle anim_div_ShowZoom">
                      Something amazing is on its way. Stay tuned for the big reveal!
                    </div>
                  </div>
                </div>
                <div className="cs_height_100 cs_height_lg_60"></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="tp-loader"></div>
                </div>
              </div>
            </section>
            <div className="cs_height_219 cs_height_lg_120"></div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default ComingSoonPage;