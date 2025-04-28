
import React from 'react';
import ServicePage from '../ServicePage';

const GraphicDesign = () => {
  const services = [
    {
      name: "Brand Identity Design",
      description: "Comprehensive visual identity creation including logos, color palettes, typography, and brand guidelines.",
    },
    {
      name: "Print Design",
      description: "Professional design for brochures, business cards, packaging, and other printed marketing materials.",
    },
    {
      name: "Digital Design",
      description: "Custom graphics for websites, social media, emails, and digital marketing campaigns.",
    },
    {
      name: "Illustration & Iconography",
      description: "Custom illustrations and icon sets that enhance your visual communication and brand personality.",
    },
    {
      name: "Infographic Design",
      description: "Visual representations of data and information that communicate complex concepts clearly and engagingly.",
    },
    {
      name: "Marketing & Advertising Graphics",
      description: "Eye-catching designs for advertisements, banners, billboards, and promotional materials.",
    },
  ];

  return (
    <ServicePage 
      title="Graphic Design" 
      subtitle="Visuals That Communicate & Convert"
      description="Our graphic design services deliver impactful visual solutions that strengthen your brand identity, communicate your message effectively, and engage your target audience across all touchpoints."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d"
    />
  );
};

export default GraphicDesign;
