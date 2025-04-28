
import React from 'react';
import ServicePage from '../ServicePage';

const SearchEngineOptimization = () => {
  const services = [
    {
      name: "Technical SEO",
      description: "Optimize your website's technical infrastructure to ensure search engines can effectively crawl and index your content.",
    },
    {
      name: "On-Page SEO",
      description: "Optimize content, meta tags, and internal linking structure to improve individual page rankings.",
    },
    {
      name: "Content Strategy",
      description: "Develop SEO-friendly content that satisfies both user intent and search engine algorithms.",
    },
    {
      name: "Link Building",
      description: "Build high-quality backlinks to increase your website's authority and improve rankings.",
    },
    {
      name: "Local SEO",
      description: "Optimize your online presence to attract more business from local searches.",
    },
    {
      name: "SEO Audits & Reporting",
      description: "Regular analysis of your website's performance with actionable recommendations for improvement.",
    },
  ];

  return (
    <ServicePage 
      title="Search Engine Optimization" 
      subtitle="Improve Your Visibility in Search Results"
      description="Our comprehensive SEO services are designed to increase your organic visibility, drive targeted traffic, and improve your website's ranking on search engine results pages."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1596742578443-7682ef5251cd"
    />
  );
};

export default SearchEngineOptimization;
