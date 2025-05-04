
import React from 'react';

const HeroTag: React.FC = () => {
  return (
    <div className="relative w-[18rem] md:w-[18rem] h-10 rounded-full tag-gradient shadow-md shadow-white/30 flex items-center justify-center">
      <div className="text-white text-sm font-semibold tracking-wider uppercase">
        INTRODUCING
      </div>
    </div>
  );
};

export default HeroTag;
