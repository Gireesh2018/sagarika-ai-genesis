
import React from 'react';
import { Button } from "@/components/ui/button";
import MobileDropdown from './MobileDropdown';
import MobileNavLink from './MobileNavLink';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavigation = ({ isMenuOpen, toggleMenu }: MobileNavigationProps) => {
  if (!isMenuOpen) return null;
  
  return (
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
        <MobileDropdown 
          title="Web Development" 
          items={[
            { label: "All Web Development", path: "/web-development" },
            { label: "Website Redesign", path: "/web-development/website-redesign" },
            { label: "E-commerce Website Design", path: "/web-development/ecommerce" },
            { label: "Mobile-Friendly Websites", path: "/web-development/mobile-friendly" },
            { label: "Custom Website Design", path: "/web-development/custom-design" },
            { label: "Web Hosting", path: "/web-development/hosting" },
            { label: "App Developments", path: "/web-development/app-development" },
          ]} 
          onClick={toggleMenu}
        />
        <MobileDropdown 
          title="Branding" 
          items={[
            { label: "All Branding", path: "/branding" },
            { label: "Influencer Marketing", path: "/branding/influencer-marketing" },
            { label: "Corporate Video Production", path: "/branding/corporate-video" },
            { label: "Video Production", path: "/branding/video-production" },
            { label: "Ad Film Making", path: "/branding/ad-film" },
            { label: "Theatre Advertising", path: "/branding/theatre-advertising" },
            { label: "Video Editing", path: "/branding/video-editing" },
            { label: "Graphic Design", path: "/branding/graphic-design" },
          ]} 
          onClick={toggleMenu}
        />
        <MobileNavLink to="/it-solutions" onClick={toggleMenu}>IT Solutions</MobileNavLink>
        <MobileNavLink to="/company" onClick={toggleMenu}>Company</MobileNavLink>
        <Button className="bg-sagarika hover:bg-sagarika-dark text-white w-full mt-2">
          Chat
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;
