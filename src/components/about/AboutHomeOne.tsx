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

        /* --- REFINED SPACING LOGIC --- */

        .cs_about.cs_style_1 {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          padding: 2rem 0; /* Added vertical padding for breathing room on all screens */
        }

        .cs_about_bg {
          display: none; 
        }

        .cs_about_content_wrapper {
          width: 100%;
          display: grid;
          grid-template-columns: 1.4fr 1fr; 
          gap: 4rem; /* Increased gap for better separation */
          align-items: center;
          min-height: 80vh;
        }

        .cs_about_image_container {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cs_about_image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transition: transform 0.6s ease;
        }

        .cs_about_image:hover {
          transform: scale(1.05);
        }

        .cs_about_text {
          position: relative;
          z-index: 2;
          color: white;
          padding: 4rem 5rem; /* Simplified and balanced padding */
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 0; /* Removed margin to rely on grid-gap for spacing */
          min-height: 280px; 
        }

        .cs_section_heading {
          margin-bottom: 2rem !important; 
        }

        .cs_about_text p {
          margin-top: 1.8rem !important;
          line-height: 1.7 !important; 
          font-size: 1.1rem !important; 
        }

        /* Tablet Design (768px - 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .cs_about_content_wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .cs_about_image_container {
            height: 400px;
            order: 1;
          }
          
          .cs_about_text {
            order: 2;
            max-width: 90%;
            margin: 0 auto; /* Keep auto margin for centering */
            padding: 3rem 4rem; /* Balanced padding */
            min-height: 250px; 
          }
        }

        /* Mobile Phone Design (≤767px) */
        @media (max-width: 767px) {
          .cs_about.cs_style_1 {
            padding: 4rem 0; /* More vertical padding for mobile */
          }
          
          .cs_about_content_wrapper {
            grid-template-columns: 1fr;
            gap: 2.5rem; /* Increased gap for better stacking */
            padding: 0 1.5rem; /* Consistent horizontal padding for the container */
          }
          
          .cs_about_image_container {
            height: 280px;
            padding: 0; /* Removed padding here as container padding is enough */
            order: 1;
          }
          
          .cs_about_image {
            border-radius: 12px;
          }
          
          .cs_about_text {
            order: 2;
            margin: 0;
            padding: 2.5rem 2rem; /* Simplified padding for mobile */
            background: rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            min-height: auto; /* Allow height to be determined by content */
          }
          
          .cs_section_title {
            font-size: 1.8rem !important;
            line-height: 1.3 !important;
            margin-bottom: 1.5rem !important; 
          }
          
          .cs_section_subtitle {
            font-size: 0.9rem !important;
            margin-bottom: 1rem !important;
          }
          
          .cs_about_text p {
            font-size: 1rem !important; 
            line-height: 1.6 !important;
            margin-top: 1.5rem !important;
          }

          .cs_swiper_controll { 
            display: none !important;
          }
        }

        /* Large Desktop (≥1200px) */
        @media (min-width: 1200px) {
          .cs_about_content_wrapper {
            gap: 5rem; /* More gap for larger screens */
            grid-template-columns: 1.5fr 1fr;
          }
          
          .cs_about_image_container {
            height: 550px;
          }
          
          .cs_about_text {
            padding: 5rem 6.5rem; /* Generous padding for large screens */
            min-height: 320px;
          }
        }

        .cs_swiper_controll {
          position: relative;
          z-index: 3;
          padding: 1rem 0;
        }

        @media (max-width: 767px) {
          .cs_swiper_controll {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 12px;
            margin: 0 1rem;
            padding: 1rem;
            backdrop-filter: blur(10px);
          }
          
          .cs_swiper_navigation_wrap {
            gap: 2rem;
            justify-content: center;
          }
          
          .cs_pagination {
            margin-bottom: 1rem;
            text-align: center;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 767px) {
          .cs_swiper_button_prev,
          .cs_swiper_button_next {
            padding: 1rem;
            background: rgba(243, 60, 82, 0.2);
            border-radius: 8px;
            border: 1px solid rgba(243, 60, 82, 0.3);
            transition: all 0.3s ease;
          }
          
          .cs_swiper_button_prev:active,
          .cs_swiper_button_next:active {
            background: rgba(243, 60, 82, 0.4);
            transform: scale(0.95);
          }
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
            pauseOnMouseEnter: true
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
          className="cs_slider cs_slider_2 anim_slide_left"
          style={{
            ['--swiper-navigation-size' as any]: '44px',
            ['--swiper-theme-color' as any]: '#F33C52'
          } as React.CSSProperties}
        >
          {about_slider.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="cs_about cs_style_1">
                <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="container">
                  <div className="cs_about_content_wrapper">
                    {/* Text Content */}
                    <div className="cs_about_text anim_slide_left">
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
                    
                    {/* Image Container */}
                    <div className="cs_about_image_container anim_slide_right">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="cs_about_image"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
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