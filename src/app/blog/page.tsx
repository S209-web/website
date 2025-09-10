
'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Coming Soon Section */}
            <section style={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Animated Background Elements */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '100px',
                height: '100px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '60%',
                right: '15%',
                width: '150px',
                height: '150px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite reverse'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '20%',
                width: '80px',
                height: '80px',
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '50%',
                animation: 'float 7s ease-in-out infinite'
              }}></div>
              
              {/* Main Content */}
              <div style={{
                textAlign: 'center',
                zIndex: 2,
                maxWidth: '600px',
                padding: '0 20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  letterSpacing: '-2px',
                  lineHeight: '1.1',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Coming Soon
                </h1>
                
                <p style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '2rem',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Something amazing is on its way. Stay tuned for the big reveal!
                </p>
                
                {/* Loading Animation */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '3rem'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }}></div>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    animation: 'pulse 1.5s ease-in-out infinite 0.2s'
                  }}></div>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    animation: 'pulse 1.5s ease-in-out infinite 0.4s'
                  }}></div>
                </div>
              </div>
              
              {/* CSS Animations */}
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes pulse {
                  0%, 100% { opacity: 0.3; transform: scale(0.8); }
                  50% { opacity: 1; transform: scale(1.2); }
                }
                
                /* Responsive adjustments */
                @media (max-width: 768px) {
                  h1 {
                    font-size: 3.5rem !important;
                  }
                  p {
                    font-size: 1.2rem !important;
                  }
                }
                
                @media (max-width: 480px) {
                  h1 {
                    font-size: 2.8rem !important;
                  }
                  p {
                    font-size: 1rem !important;
                  }
                }
              `}</style>
            </section>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;