
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const DesktopNavigation = () => {
  return (
    <>
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
        
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center font-medium text-sagarika-navy hover:text-sagarika transition-colors">
                Web Development <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <Link to="/web-development">
                <DropdownMenuItem>All Web Development</DropdownMenuItem>
              </Link>
              <Link to="/web-development/website-redesign">
                <DropdownMenuItem>Website Redesign</DropdownMenuItem>
              </Link>
              <Link to="/web-development/ecommerce">
                <DropdownMenuItem>E-commerce Website Design</DropdownMenuItem>
              </Link>
              <Link to="/web-development/mobile-friendly">
                <DropdownMenuItem>Mobile-Friendly Websites</DropdownMenuItem>
              </Link>
              <Link to="/web-development/custom-design">
                <DropdownMenuItem>Custom Website Design</DropdownMenuItem>
              </Link>
              <Link to="/web-development/hosting">
                <DropdownMenuItem>Web Hosting</DropdownMenuItem>
              </Link>
              <Link to="/web-development/app-development">
                <DropdownMenuItem>App Developments</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center font-medium text-sagarika-navy hover:text-sagarika transition-colors">
                Branding <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <Link to="/branding">
                <DropdownMenuItem>All Branding</DropdownMenuItem>
              </Link>
              <Link to="/branding/influencer-marketing">
                <DropdownMenuItem>Influencer Marketing</DropdownMenuItem>
              </Link>
              <Link to="/branding/corporate-video">
                <DropdownMenuItem>Corporate Video Production</DropdownMenuItem>
              </Link>
              <Link to="/branding/video-production">
                <DropdownMenuItem>Video Production</DropdownMenuItem>
              </Link>
              <Link to="/branding/ad-film">
                <DropdownMenuItem>Ad Film Making</DropdownMenuItem>
              </Link>
              <Link to="/branding/theatre-advertising">
                <DropdownMenuItem>Theatre Advertising</DropdownMenuItem>
              </Link>
              <Link to="/branding/video-editing">
                <DropdownMenuItem>Video Editing</DropdownMenuItem>
              </Link>
              <Link to="/branding/graphic-design">
                <DropdownMenuItem>Graphic Design</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <NavLink to="/it-solutions">IT Solutions</NavLink>
        <NavLink to="/company">Company</NavLink>
      </div>
      
      <div className="hidden md:flex items-center">
        <Button className="bg-sagarika hover:bg-sagarika-dark text-white">
          Chat
        </Button>
      </div>
    </>
  );
};

export default DesktopNavigation;
