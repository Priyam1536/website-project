
import React, { useEffect, useRef } from 'react';

interface SplineViewerProps {
  url: string;
}

const SplineViewer: React.FC<SplineViewerProps> = ({ url }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create spline-viewer element
    const loadSpline = async () => {
      try {
        // Dynamically import Spline viewer script
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js';
        document.body.appendChild(script);
        
        // Create and configure spline-viewer element
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', url);
        viewer.style.width = '100%';
        viewer.style.height = '100%';
        
        // Add to container when script is loaded
        script.onload = () => {
          if (containerRef.current) {
            // Clear any existing viewers first
            while (containerRef.current.firstChild) {
              containerRef.current.removeChild(containerRef.current.firstChild);
            }
            containerRef.current.appendChild(viewer);
          }
        };
      } catch (error) {
        console.error('Failed to load Spline viewer:', error);
      }
    };
    
    loadSpline();
    
    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[src="https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"]');
      scripts.forEach(script => script.remove());
    };
  }, [url]);
  
  return (
    <div 
      ref={containerRef}
      className="spline-container absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none z-10" 
      style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
    />
  );
};

export default SplineViewer;
