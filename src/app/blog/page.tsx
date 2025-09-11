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
            <section style={{
              minHeight: '100vh',
              display: 'grid',
              placeItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: '#111111',
              textAlign: 'center',
              padding: '0 20px'
            }}>
              {/* Animated background shapes */}
              <div className="coming-soon-shape shape-1"></div>
              <div className="coming-soon-shape shape-2"></div>
              <div className="coming-soon-shape shape-3"></div>

              <div className="cs-coming-inner">
                <div className="cs_section_heading cs_style_1 cs_type_1 text-center">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title" style={{ 
                      fontSize: 'clamp(3rem, 10vw, 6rem)', 
                      color: '#fff',
                      textShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                      animation: 'glow 2.5s ease-in-out infinite alternate'
                    }}>
                      Coming Soon
                    </h2>
                    <div className="cs_section_subtitle anim_div_ShowZoom" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
                      Something amazing is on its way. Stay tuned for the big reveal!
                    </div>
                  </div>
                </div>
                <div className="cs_height_100 cs_height_lg_60"></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="fancy-loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <FooterOne />
        </div>
      </div>
      <style jsx global>{`
        .cs-coming-inner { 
          transform: translateY(6vh); /* nudge content slightly down */
        }
        @media (min-width: 1200px) {
          .cs-coming-inner { transform: translateY(10vh); }
        }
        @media (min-width: 1600px) {
          .cs-coming-inner { transform: translateY(12vh); }
        }

        .coming-soon-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(118, 75, 162, 0.3) 0%, rgba(102, 126, 234, 0.1) 100%);
          filter: blur(40px);
          z-index: 1;
        }
        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation: float 10s ease-in-out infinite;
        }
        .shape-2 {
          width: 250px;
          height: 250px;
          bottom: 15%;
          right: 15%;
          animation: float 12s ease-in-out infinite reverse;
        }
        .shape-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 8s ease-in-out infinite;
        }
        
        .fancy-loader {
          display: flex;
          gap: 15px;
        }
        .fancy-loader .dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #fff;
          animation: bounce-loader 1.4s infinite ease-in-out both;
        }
        .fancy-loader .dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        .fancy-loader .dot:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-40px) translateX(20px) scale(1.1); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(118, 75, 162, 0.3);
          }
          to {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(102, 126, 234, 0.4), 0 0 40px rgba(118, 75, 162, 0.5);
          }
        }

        @keyframes bounce-loader {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1.0);
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default ComingSoonPage;
