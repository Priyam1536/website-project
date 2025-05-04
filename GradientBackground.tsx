
import React from 'react';

const GradientBackground: React.FC = () => {
  return (
    <>
      <div className="gradient-overlay">
        <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="600" cy="100" r="300" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 100) rotate(90) scale(300)">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="layer-blur"></div>
    </>
  );
};

export default GradientBackground;
