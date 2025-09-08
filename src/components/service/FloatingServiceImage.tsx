import React, { useState, useRef, useEffect } from 'react';

interface FloatingServiceImageProps {
  image: string;
  children: React.ReactNode;
}

const FloatingServiceImage: React.FC<FloatingServiceImageProps> = ({ image, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered, showing image:', image);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left, hiding image');
    setVisible(false);
  };

  return (
    <>
      <span
        style={{ position: 'relative', zIndex: 2, cursor: 'pointer', display: 'inline-block' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      
      {/* Debug: Always show a test div when hovering */}
      {visible && (
        <div
          style={{
            position: 'fixed',
            left: coords.x + 20,
            top: coords.y - 60,
            pointerEvents: 'none',
            zIndex: 9999,
            background: 'red',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          HOVER TEST - Image: {image.split('/').pop()}
        </div>
      )}
      
      {/* Floating Image */}
      <div
        style={{
          position: 'fixed',
          left: coords.x + 20,
          top: coords.y - 120,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(10px)',
          zIndex: 9998,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: visible ? '0 12px 40px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        {visible && (
          <img
            src={image}
            alt="Service Preview"
            style={{
              width: '150px',
              height: 'auto',
              display: 'block',
              borderRadius: '12px',
              backgroundColor: '#fff',
            }}
            onError={(e) => {
              console.error('Image failed to load:', image);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', image);
            }}
          />
        )}
      </div>
    </>
  );
};

export default FloatingServiceImage;
