'use client'
import React from 'react';
import RevealOnScroll from '@/components/common/RevealOnScroll';

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
    img: "/assets/img/automation.png",
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
  return (
    <>
      <style jsx>{`
        /* Main container styles */
        .shout-code-container {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        /* Hero intro section */
        .shout-code-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
          padding: 4rem 2rem;
        }

        .shout-code-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(243, 60, 82, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(243, 60, 82, 0.1) 0%, transparent 50%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 700;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #F33C52 0%, #ff6b6b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: clamp(1.3rem, 3vw, 2.2rem);
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.4;
          font-weight: 300;
        }

        .hero-description {
          font-size: 1.4rem;
          opacity: 0.8;
          line-height: 1.7;
          margin-bottom: 4rem;
          font-weight: 300;
        }

        /* Individual principle sections */
        .principle-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 6rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .principle-section:last-child {
          border-bottom: none;
        }

        .principle-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 15, 15, 0.85);
          z-index: 1;
        }

        .principle-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          color: white;
        }

        .principle-number {
          font-size: 1.2rem;
          color: #F33C52;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          opacity: 0.9;
        }

        .principle-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          margin-bottom: 3rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .principle-description {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          line-height: 1.8;
          opacity: 0.85;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Background decorative elements */
        .principle-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(243, 60, 82, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(243, 60, 82, 0.04) 0%, transparent 50%);
          z-index: 2;
        }

        .principle-section:nth-child(even)::after {
          background: radial-gradient(circle at 80% 80%, rgba(243, 60, 82, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 20% 20%, rgba(243, 60, 82, 0.04) 0%, transparent 50%);
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: fixed;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .scroll-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(243, 60, 82, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .scroll-dot.active {
          background: #F33C52;
          transform: scale(1.4);
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .shout-code-hero {
            padding: 3rem 1rem;
          }

          .principle-section {
            padding: 4rem 1rem;
            background-attachment: scroll;
          }

          .principle-description {
            padding: 0 1rem;
          }

          .scroll-indicator {
            display: none;
          }

          .hero-description {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .principle-section {
            padding: 3rem 1rem;
          }

          .principle-title {
            margin-bottom: 2rem;
          }

          .principle-description {
            font-size: 1.1rem;
            line-height: 1.6;
          }
        }
      `}</style>

      <div className="shout-code-container">
        {/* Hero Introduction */}
        <section className="shout-code-hero">
          <div className="hero-content">
            <RevealOnScroll delay={0.2} duration={0.8}>
              <div className="principle-number">Our Philosophy</div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4} duration={0.8}>
              <h1 className="hero-title">The Shout Code</h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.6} duration={0.8}>
              <p className="hero-subtitle">
                Six principles that drive everything we do
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.8} duration={0.8}>
              <p className="hero-description">
                These aren't just values on a wall — they're the DNA of how we think, create, and deliver results that matter.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Individual Principles */}
        {about_slider.map((principle, index) => (
          <section 
            key={index}
            className="principle-section"
            style={{
              backgroundImage: `url(${principle.img})`,
            }}
          >
            <div className="principle-content">
              <RevealOnScroll delay={0.3} duration={0.8} distance={50}>
                <div className="principle-number">
                  {String(index + 1).padStart(2, '0')} — {principle.sub_title}
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.5} duration={0.8} distance={60}>
                <h2 className="principle-title">{principle.title}</h2>
              </RevealOnScroll>

              <RevealOnScroll delay={0.7} duration={0.8} distance={40}>
                <p className="principle-description">{principle.des}</p>
              </RevealOnScroll>
            </div>
          </section>
        ))}

        {/* Scroll Progress Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot active"></div>
          {about_slider.map((_, index) => (
            <div key={index} className="scroll-dot"></div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #F33C52, #ff6b6b);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #ff6b6b, #F33C52);
        }
      `}</style>
    </>
  );
};

export default AboutHomeOne;