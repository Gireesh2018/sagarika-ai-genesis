
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center font-medium text-sagarika-navy hover:text-sagarika transition-colors">
                  Digital Marketing <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <Link to="/digital-marketing">
                  <DropdownMenuItem>All Digital Marketing</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/social-media">
                  <DropdownMenuItem>Social Media Marketing</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/seo">
                  <DropdownMenuItem>Search Engine Optimization</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/transformation">
                  <DropdownMenuItem>Digital Transformation Service</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/content">
                  <DropdownMenuItem>Content Marketing</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/advertising">
                  <DropdownMenuItem>Online Advertising</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/google-ads">
                  <DropdownMenuItem>Google Ads</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/influencer">
                  <DropdownMenuItem>Influencer Marketing</DropdownMenuItem>
                </Link>
                <Link to="/digital-marketing/reputation">
                  <DropdownMenuItem>Online Reputation</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
            <MobileDropdown 
              title="Digital Marketing" 
              items={[
                { label: "All Digital Marketing", path: "/digital-marketing" },
                { label: "Social Media Marketing", path: "/digital-marketing/social-media" },
                { label: "Search Engine Optimization", path: "/digital-marketing/seo" },
                { label: "Digital Transformation Service", path: "/digital-marketing/transformation" },
                { label: "Content Marketing", path: "/digital-marketing/content" },
                { label: "Online Advertising", path: "/digital-marketing/advertising" },
                { label: "Google Ads", path: "/digital-marketing/google-ads" },
                { label: "Influencer Marketing", path: "/digital-marketing/influencer" },
                { label: "Online Reputation", path: "/digital-marketing/reputation" },
              ]} 
              onClick={toggleMenu}
            />
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

const MobileDropdown = ({ 
  title, 
  items, 
  onClick 
}: { 
  title: string; 
  items: {label: string; path: string}[];
  onClick?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="py-2">
      <button 
        className="flex items-center justify-between w-full font-medium text-sagarika-navy hover:text-sagarika transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="pl-4 mt-2 flex flex-col space-y-2">
          {items.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className="text-sm py-1 font-medium text-sagarika-navy hover:text-sagarika transition-colors"
              onClick={onClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
