
import React from 'react';
import { Button } from '@/components/ui/button';
import HeroTag from './HeroTag';
import { Link } from 'react-router-dom';

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-[40rem] ml-[10%] z-10 relative">
      <div className="animate-fade-zoom-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
        <HeroTag />
      </div>
      
      <h1 
        className="text-4xl md:text-5xl font-semibold tracking-wider mt-8 mb-8 leading-tight animate-fade-zoom-in opacity-0"
        style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
      >
        EMAIL FOR<br />DEVELOPERS
      </h1>
      
      <p 
        className="text-base md:text-xl max-w-[35rem] text-gray-500 animate-fade-zoom-in opacity-0"
        style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
      >
        The best way to reach humans instead of spam folders, deliver transactional and marketing emails at scale.
      </p>
      
      <div 
        className="flex flex-wrap gap-4 mt-6 animate-fade-zoom-in opacity-0"
        style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
      >
        <Link to="/subscription">
          <Button 
            variant="outline" 
            className="rounded-full text-[#5b22c6] border-[#2a2a2a] hover:bg-[#1a1a1a] px-5 py-6"
          >
            Subscription &gt;
          </Button>
        </Link>
        <Link to="/getstarted">
          <Button 
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-gray-400 px-8 py-6"
          >
            Get started &gt;
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
