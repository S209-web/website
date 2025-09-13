'use client'

import React from 'react';
import Image from 'next/image';

export type ServiceDetailProps = {
  title: string;
  tagline: string;
  image: string;
  intro: string;
  description: string;
  sections?: {
    title: string;
    content: string[];
  }[];
  cta?: string;
};

const ServiceDetailTemplate: React.FC<ServiceDetailProps> = ({ 
  title, 
  tagline, 
  image, 
  intro, 
  description,
  sections = [],
  cta
}) => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          {/* Header Section - Centered */}
          <div className="cs_section_heading cs_style_1 cs_type_1 text-center">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom" style={{ color: '#F33C52' }}>
                {tagline}
              </div>
              <h1 className="cs_section_title anim_text_writting" style={{ 
                fontSize: '3.5rem', 
                marginBottom: '1rem',
                textAlign: 'center',
                width: '100%'
              }}>
                {title}
              </h1>
              <p className="intro-text anim_text" style={{ 
                fontSize: '1.2rem', 
                lineHeight: 1.6, 
                color: '#888', 
                maxWidth: '800px', 
                margin: '0 auto 3rem',
                textAlign: 'center'
              }}>
                {intro}
              </p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="service-main-content">
            <div className="row align-items-center">
              {/* Left Side - Perfectly Centered Mascot */}
              <div className="col-lg-5 col-md-6">
                <div className="mascot-container anim_div_ShowLeft" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  minHeight: '500px',
                  position: 'relative'
                }}>
                  {/* Mascot: floating image only (removed colored circular background) */}
                  <div style={{ animation: 'float 6s ease-in-out infinite' }}>
                    <Image 
                      src={image} 
                      alt={title} 
                      width={300} 
                      height={300} 
                      style={{ 
                        maxWidth: '280px', 
                        height: 'auto', 
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.22))'
                      }} 
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="col-lg-7 col-md-6">
                  <div className="service-content anim_div_ShowRight" style={{ padding: '1rem 0' }}>
                  {/* Title is rendered once at the top (centered). Removed duplicate right-side heading. */}
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: 1.8, 
                    color: '#ccc', 
                    marginBottom: '1rem'
                  }}>
                    {description}
                  </p>

                  {/* Service Sections */}
                  {sections.map((section, index) => (
                    <div key={index} style={{ marginBottom: '2rem' }}>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        color: '#F33C52', 
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        {section.title}
                      </h3>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0,
                        margin: 0
                      }}>
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} style={{
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            color: '#bbb',
                            marginBottom: '0.8rem',
                            paddingLeft: '1.5rem',
                            position: 'relative'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: '0',
                              top: '0.5rem',
                              width: '8px',
                              height: '8px',
                              background: '#F33C52',
                              borderRadius: '50%'
                            }}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* CTA */}
                  {cta && (
                    <div style={{ marginTop: '2rem' }}>
                      <h3 style={{ 
                        fontSize: '1.8rem', 
                        color: '#F33C52', 
                        fontWeight: '700',
                        textAlign: 'center'
                      }}>
                        {cta}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .service-main-content {
          margin: 1rem 0;
        }
        
        .mascot-container {
          position: relative;
          width: 100%;
        }
        
        .service-content h2 {
          text-align: left;
        }
        
        .cs_section_title {
          text-align: center !important;
          display: block;
          width: 100%;
        }
        /* ensure heading content is centered within the heading block */
        .cs_section_heading_text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .service-main-content .row {
            flex-direction: column-reverse;
          }
          
          .mascot-container {
            margin-top: 2rem;
            min-height: 400px !important;
          }
          
          .service-content h2 {
            font-size: 2rem !important;
            text-align: center;
          }
          
          .cs_section_title {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .cs_section_title {
            font-size: 2rem !important;
          }
          
          .mascot-container {
            min-height: 350px !important;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceDetailTemplate;
