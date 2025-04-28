
import React from 'react';
import ServicePage from '../ServicePage';

const SocialMediaMarketing = () => {
  const services = [
    {
      name: "Social Media Strategy",
      description: "Develop a tailored social media strategy that aligns with your business goals and target audience demographics.",
    },
    {
      name: "Content Creation",
      description: "Create engaging, brand-consistent content tailored for different social platforms to maximize engagement.",
    },
    {
      name: "Community Management",
      description: "Build and nurture your online community with timely responses and meaningful interactions.",
    },
    {
      name: "Social Media Advertising",
      description: "Target specific demographics with paid social campaigns to increase reach and conversions.",
    },
    {
      name: "Analytics & Reporting",
      description: "Track key performance metrics and optimize your social strategy with data-driven insights.",
    },
    {
      name: "Influencer Collaborations",
      description: "Connect with relevant influencers to extend your reach and build credibility with new audiences.",
    },
  ];

  return (
    <ServicePage 
      title="Social Media Marketing" 
      subtitle="Grow Your Brand with Strategic Social Media"
      description="Our social media marketing services help businesses build meaningful connections with their audiences, increase brand awareness, and drive engagement across all relevant platforms."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1611926653458-09294b3142bf"
    />
  );
};

export default SocialMediaMarketing;
