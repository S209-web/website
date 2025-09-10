'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Service Mascots Data
interface ServiceMascotType {
  id: number;
  img: string;
  avatar_name: string;
  designation: string;
}

const service_mascots_data: ServiceMascotType[] = [
  {
    id: 1,
    img: '/assets/img/contentndservice.png',
    avatar_name: 'Content & Design',
    designation: 'Creative Solutions Expert'
  },
  {
    id: 2,
    img: '/assets/img/Graphic design.png',
    avatar_name: 'Social Growth',
    designation: 'Community Building Specialist'
  },
  {
    id: 3,
    img: '/assets/img/Whatsapp marketer (2).png',
    avatar_name: 'Performance Marketing',
    designation: 'Growth & Analytics Expert'
  },
  {
    id: 4,
    img: '/assets/img/Video editing (2).png',
    avatar_name: 'AI Solutions',
    designation: 'Future Technology Specialist'
  },
  {
    id: 5,
    img: '/assets/img/copywriter1.png',
    avatar_name: 'Web Development',
    designation: 'Digital Platform Expert'
  },
  {
    id: 6,
    img: '/assets/img/ondcc.png',
    avatar_name: 'E-Commerce',
    designation: 'Retail Media Specialist'
  }
];

type DataType = {
  sub_title: string;
  title: string;
  title_2: string;
}
const team_content: DataType = {
  sub_title: "Our Team",
  title: "Thinkers, Builders, Game-Changers — That's Our Team",
  title_2: "Thinkers, Builders, Game-Changers — That's Our Team"
}
const { sub_title, title, title_2 } = team_content


const TeamHomeTwo = ({ style_2, style_3 }: any) => {
  return (
    <>
      <style jsx>{`
        .cs_section_heading {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 20px;
        }
        
        .cs_section_heading_text {
          flex: 1;
          min-width: 300px;
        }
        
        .cs_section_heading_right {
          flex-shrink: 0;
          margin-top: 10px;
        }
        
        @media (max-width: 768px) {
          .cs_section_heading {
            flex-direction: column;
            text-align: left;
          }
          
          .cs_section_heading_text {
            min-width: auto;
            width: 100%;
            margin-bottom: 20px;
          }
          
          .cs_section_heading_right {
            width: 100%;
            margin-top: 0;
          }
          
          .cs_section_title {
            font-size: 1.8rem !important;
            line-height: 1.3 !important;
          }
        }
        
        @media (max-width: 480px) {
          .cs_section_title {
            font-size: 1.5rem !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
      {style_2 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}
      {style_3 ? <div className="cs_height_150 cs_height_lg_30"></div> : null}

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom" style={{ 
                marginBottom: '15px'
              }}>
                {sub_title}
              </div>
              <h2 className="cs_section_title anim_heading_title" style={{ 
                lineHeight: '1.2', 
                marginBottom: '10px',
                wordWrap: 'break-word',
                maxWidth: '100%'
              }}>
                {style_2 ? title_2 : title}
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/team" className="cs_btn cs_style_1">
                <span>View All Member</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038
                                          11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>

          <div className="cs_team_section anim_blog">
            {service_mascots_data.map((item, i) =>
              <div key={i} className="cs_team_img">
                <div style={{ textDecoration: 'none' }}>
                  <div style={{
                    width: '100%',
                    height: '400px !important', // Even larger to make change more obvious
                    borderRadius: '20px',
                    overflow: 'visible', // Changed from 'hidden' to allow mascots to extend out
                    background: 'transparent', // Removed gradient background
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '60px', // Increased padding too
                    marginBottom: '30px', // Increased margin
                    position: 'relative',
                    zIndex: 50, // High z-index for container
                    minHeight: '400px' // Force minimum height
                  }}>
                    <Image 
                      src={item.img} 
                      alt={item.avatar_name}
                      width={220}
                      height={220}
                      style={{
                        objectFit: 'contain',
                        borderRadius: '15px',
                        position: 'relative',
                        zIndex: 100, // Very high z-index for mascot images
                        width: '220px !important', // Force width
                        height: '220px !important', // Force height
                        maxWidth: '220px',
                        maxHeight: '220px'
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.zIndex = '200'; // Even higher on hover
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.zIndex = '100';
                      }}
                    />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                </div>
                <div className="cs_team_text">
                  <div style={{ textDecoration: 'none' }}>
                    <h6 className="cs_team_text_title">
                      {item.avatar_name}
                    </h6>
                  </div>
                  {/* Removed designation text completely */}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* {style_2 ? <div className="cs_height_150 cs_height_lg_60"></div> : null} */}

    </>
  );
};

export default TeamHomeTwo;