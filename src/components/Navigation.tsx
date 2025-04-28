
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="py-4 px-4 md:px-8 lg:px-12 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-sagarika-navy">
              SAGARIKA<span className="text-sagarika">DIGITAL</span>
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink to="/digital-marketing">Digital Marketing</NavLink>
          <NavLink to="/web-development">Web Development</NavLink>
          <NavLink to="/branding">Branding</NavLink>
          <NavLink to="/it-solutions">IT Solutions</NavLink>
          <NavLink to="/company">Company</NavLink>
        </div>
        
        <div className="hidden md:flex items-center">
          <Button className="bg-sagarika hover:bg-sagarika-dark text-white">
            Chat
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 animate-fade-in">
          <div className="flex flex-col space-y-3 px-4">
            <MobileNavLink to="/digital-marketing" onClick={toggleMenu}>Digital Marketing</MobileNavLink>
            <MobileNavLink to="/web-development" onClick={toggleMenu}>Web Development</MobileNavLink>
            <MobileNavLink to="/branding" onClick={toggleMenu}>Branding</MobileNavLink>
            <MobileNavLink to="/it-solutions" onClick={toggleMenu}>IT Solutions</MobileNavLink>
            <MobileNavLink to="/company" onClick={toggleMenu}>Company</MobileNavLink>
            <Button className="bg-sagarika hover:bg-sagarika-dark text-white w-full mt-2">
              Chat
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="font-medium text-sagarika-navy hover:text-sagarika transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link 
    to={to} 
    className="font-medium text-sagarika-navy hover:text-sagarika transition-colors py-2 block"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navigation;
