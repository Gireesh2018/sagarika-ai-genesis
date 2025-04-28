
import React from 'react';
import ServicePage from '../ServicePage';

const CustomWebsite = () => {
  const services = [
    {
      name: "Brand-Aligned Design",
      description: "Unique website designs that perfectly reflect your brand identity, values, and positioning.",
    },
    {
      name: "Custom Functionality Development",
      description: "Specialized features and functionality tailored to your specific business needs and objectives.",
    },
    {
      name: "Interactive Elements",
      description: "Engaging animations, microinteractions, and UI components that enhance user experience.",
    },
    {
      name: "Content Management Systems",
      description: "Customized CMS solutions that make updating and managing your website content effortless.",
    },
    {
      name: "Integration Services",
      description: "Seamless connections with third-party tools and services essential for your business operations.",
    },
    {
      name: "Performance Optimization",
      description: "Specialized code and architecture designed for optimal loading speeds and performance.",
    },
  ];

  return (
    <ServicePage 
      title="Custom Website Design" 
      subtitle="Unique Websites for Unique Businesses"
      description="Our custom website design services create distinctive, high-performance websites that stand out from templates and deliver exactly what your business needs to succeed online."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    />
  );
};

export default CustomWebsite;
