
import React from 'react';
import ServicePage from '../ServicePage';

const InfluencerMarketing = () => {
  const services = [
    {
      name: "Influencer Identification & Selection",
      description: "Strategic identification and selection of influencers that align with your brand values and target audience.",
    },
    {
      name: "Campaign Strategy Development",
      description: "Custom influencer marketing strategies designed to meet your specific business objectives and KPIs.",
    },
    {
      name: "Content Collaboration",
      description: "Creative direction and collaboration with influencers to produce authentic and engaging branded content.",
    },
    {
      name: "Performance Tracking",
      description: "Comprehensive tracking and analysis of campaign metrics to measure engagement, reach, and ROI.",
    },
    {
      name: "Relationship Management",
      description: "Ongoing management of influencer relationships to build lasting partnerships with brand advocates.",
    },
    {
      name: "Compliance & Disclosure",
      description: "Ensuring all influencer content meets legal and platform-specific disclosure requirements.",
    },
  ];

  return (
    <ServicePage 
      title="Influencer Marketing" 
      subtitle="Harness the Power of Authentic Advocacy"
      description="Our influencer marketing services connect your brand with relevant content creators to build trust, increase reach, and drive meaningful engagement with your target audience."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
    />
  );
};

export default InfluencerMarketing;
