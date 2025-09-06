'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "About Us",
    title: `Curiosity Over Comfort`,
    des: `We don't follow the obvious route — we chase the ones no one's mapped yet. Breakthroughs live where others don't dare to look.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "About Us",
    title: `Strategy With Edge`,
    des: `We don't gamble. Every bold move is backed by insight, testing, and a deep understanding of what actually works.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "About Us",
    title: `Human-First Automation`,
    des: `We use tech to remove friction, not imagination. Machines handle the repeatable — people craft the remarkable.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "About Us",
    title: `Research at Light Speed`,
    des: `We turn deep research into fast action — because the right opportunities don't wait.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "About Us",
    title: `24/7 Global Mindset`,
    des: `Our team works across time zones, so momentum never stops. Innovation keeps moving, even while the world rests.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "About Us",
    title: `Results, Not Rituals`,
    des: `No vanity metrics. Every campaign, every post, every ad exists to move the needle — clearly and measurably.`,
  },
]

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;