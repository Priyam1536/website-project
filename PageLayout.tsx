
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import GradientBackground from './GradientBackground';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen relative ${className}`}>
      <GradientBackground />
      <div className="relative">
        <Navbar />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
