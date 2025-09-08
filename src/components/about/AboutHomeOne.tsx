'use client'
import React, { useEffect, useRef } from 'react';
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
    img: "/assets/img/CuriosityOverComfort.png",
    sub_title: "The Shout Code",
    title: `Curiosity Over Comfort`,
    des: `We don't follow the obvious route — we chase the ones no one's mapped yet. Breakthroughs live where others don't dare to look.`,
  },
  {
    img: "/assets/img/Strategy_With_Edge_Realistic.png",
    sub_title: "The Shout Code",
    title: `Strategy With Edge`,
    des: `We don't gamble. Every bold move is backed by insight, testing, and a deep understanding of what actually works.`,
  },
  {
    img: "/assets/img/automation.jpg",
    sub_title: "The Shout Code",
    title: `Human-First Automation`,
    des: `We use tech to remove friction, not imagination. Machines handle the repeatable — people craft the remarkable.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "The Shout Code",
    title: `Research at Light Speed`,
    des: `We turn deep research into fast action — because the right opportunities don't wait.`,
  },
  {
    img: "/assets/img/Global3D.png",
    sub_title: "The Shout Code",
    title: `24/7 Global Mindset`,
    des: `Our team works across time zones, so momentum never stops. Innovation keeps moving, even while the world rests.`,
  },
  {
    img: "/assets/img/about_gallery_3.jpg",
    sub_title: "The Shout Code",
    title: `Results, Not Rituals`,
    des: `No vanity metrics. Every campaign, every post, every ad exists to move the needle — clearly and measurably.`,
  },
]

const AboutHomeOne = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animElements = entry.target.querySelectorAll(
          '.anim_slide_left, .anim_slide_right, .anim_slide_up'
        );
        
        if (entry.isIntersecting) {
          animElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('active');
            }, index * 200);
          });
        } else {
          animElements.forEach((element) => {
            element.classList.remove('active');
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .anim_slide_left {
          opacity: 0;
          transform: translateX(-120px) rotate(-5deg);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .anim_slide_right {
          opacity: 0;
          transform: translateX(120px) rotate(5deg);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .anim_slide_up {
          opacity: 0;
          transform: translateY(100px) scale(0.9);
          transition: all 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .anim_slide_left.active {
          opacity: 1;
          transform: translateX(0) rotate(0deg);
        }
        
        .anim_slide_right.active {
          opacity: 1;
          transform: translateX(0) rotate(0deg);
        }
        
        .anim_slide_up.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <div ref={sectionRef}>
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
          className="cs_slider cs_slider_2 anim_slide_left">
          {about_slider.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="cs_about cs_style_1">
                <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="container">
                  <div className="cs_about_text anim_slide_right">
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
            <div className="cs_swiper_controll anim_slide_up">
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
      </div>
    </>
  );
};

export default AboutHomeOne;