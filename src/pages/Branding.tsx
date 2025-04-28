
import React from 'react';
import ServicePage from './ServicePage';

const Branding = () => {
  const services = [
    {
      name: "Brand Strategy",
      description: "Develop a comprehensive brand strategy that defines your purpose, values, positioning, and competitive advantage.",
    },
    {
      name: "Visual Identity Design",
      description: "Create a distinctive visual identity including logos, color schemes, typography, and design elements that reflect your brand.",
    },
    {
      name: "Brand Guidelines",
      description: "Establish clear brand guidelines to ensure consistent application of your brand across all touchpoints.",
    },
    {
      name: "Rebranding",
      description: "Refresh or completely transform your existing brand to better align with your current business goals and target audience.",
    },
    {
      name: "Brand Messaging",
      description: "Craft compelling brand messaging that resonates with your audience and clearly communicates your value proposition.",
    },
    {
      name: "Brand Experience Design",
      description: "Create holistic brand experiences that build emotional connections with your audience across physical and digital touchpoints.",
    },
  ];

  return (
    <ServicePage 
      title="Branding" 
      subtitle="Build a Powerful Brand Identity"
      description="Our strategic branding services help businesses create authentic, memorable brand identities that connect with target audiences and stand out in competitive markets."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    />
  );
};

export default Branding;
