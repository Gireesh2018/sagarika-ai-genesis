
import React from 'react';
import ServicePage from '../ServicePage';

const MobileFriendly = () => {
  const services = [
    {
      name: "Responsive Web Design",
      description: "Websites that automatically adjust to provide optimal viewing and interaction experience across all devices.",
    },
    {
      name: "Mobile-First Development",
      description: "Design approach that prioritizes the mobile experience first, then scales up to larger screens.",
    },
    {
      name: "Touch-Optimized Interfaces",
      description: "User interfaces designed specifically for touch interactions with appropriately sized elements.",
    },
    {
      name: "Page Speed Optimization",
      description: "Performance enhancements for fast loading on mobile networks and improved user experience.",
    },
    {
      name: "Mobile SEO Implementation",
      description: "Specialized SEO techniques to improve visibility in mobile search results.",
    },
    {
      name: "Progressive Web App Features",
      description: "Implementation of PWA capabilities for app-like experiences within the browser.",
    },
  ];

  return (
    <ServicePage 
      title="Mobile-Friendly Websites" 
      subtitle="Engage Users on Every Device"
      description="Our mobile-friendly website development ensures your site provides exceptional user experiences across smartphones, tablets, and desktops, helping you reach the growing audience of mobile internet users."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    />
  );
};

export default MobileFriendly;
