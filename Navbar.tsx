
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-200 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : ''}`}>
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8 py-4">
        <Link to="/" className="text-2xl font-semibold">DEVMAILS</Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/resources" className="text-sm text-gray-300 hover:text-white transition-colors">Resources</Link>
          <Link to="/subscription" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link to="/company" className="text-sm text-gray-300 hover:text-white transition-colors">Company</Link>
          <Link to="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">Documentation</Link>
        </nav>
        
        {/* Sign in button */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/signin">
            <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
              Sign in
            </Button>
          </Link>
          <Link to="/getstarted">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm">
              Get started
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 p-4 flex flex-col space-y-4 border-t border-gray-800 md:hidden">
            <Link to="/features" className="text-sm hover:text-gray-400 transition-colors py-2">Features</Link>
            <Link to="/resources" className="text-sm hover:text-gray-400 transition-colors py-2">Resources</Link>
            <Link to="/subscription" className="text-sm hover:text-gray-400 transition-colors py-2">Pricing</Link>
            <Link to="/company" className="text-sm hover:text-gray-400 transition-colors py-2">Company</Link>
            <Link to="/docs" className="text-sm hover:text-gray-400 transition-colors py-2">Documentation</Link>
            <Link to="/signin">
              <Button variant="ghost" className="text-sm w-full justify-start px-0">
                Sign in
              </Button>
            </Link>
            <Link to="/getstarted">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full w-full">
                Get started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
