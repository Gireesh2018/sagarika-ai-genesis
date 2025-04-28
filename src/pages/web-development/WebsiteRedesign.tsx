
import React from 'react';
import ServicePage from '../ServicePage';

const WebsiteRedesign = () => {
  const services = [
    {
      name: "UX/UI Analysis",
      description: "Comprehensive analysis of your current website's user experience and interface to identify improvement opportunities.",
    },
    {
      name: "Modern Design Implementation",
      description: "Transform your outdated website with contemporary design trends, engaging visuals, and improved aesthetics.",
    },
    {
      name: "Performance Optimization",
      description: "Enhance page load times, responsiveness, and overall site performance for better user experience and SEO.",
    },
    {
      name: "Content Restructuring",
      description: "Reorganize and optimize your content for better readability, engagement, and conversion potential.",
    },
    {
      name: "SEO Preservation & Enhancement",
      description: "Maintain existing search rankings while implementing improvements for better search visibility.",
    },
    {
      name: "Post-Launch Support",
      description: "Ongoing assistance and fine-tuning after the redesign to ensure optimal performance and user satisfaction.",
    },
  ];

  return (
    <ServicePage 
      title="Website Redesign" 
      subtitle="Transform Your Online Presence"
      description="Our website redesign services help businesses rejuvenate their digital presence with modern, user-friendly designs that drive engagement and conversions while preserving brand identity and SEO value."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    />
  );
};

export default WebsiteRedesign;
