
import React from 'react';
import ServicePage from '../ServicePage';

const InfluencerMarketing = () => {
  const services = [
    {
      name: "Influencer Strategy",
      description: "Develop a customized influencer marketing strategy aligned with your brand goals and target audience.",
    },
    {
      name: "Influencer Research & Selection",
      description: "Identify and vet relevant influencers who align with your brand values and audience demographics.",
    },
    {
      name: "Campaign Management",
      description: "End-to-end campaign planning, execution, and monitoring to ensure successful influencer partnerships.",
    },
    {
      name: "Content Collaboration",
      description: "Work with influencers to create authentic, engaging content that resonates with their audience.",
    },
    {
      name: "Performance Tracking",
      description: "Measure campaign results through comprehensive analytics and reporting to demonstrate ROI.",
    },
    {
      name: "Long-term Influencer Relationships",
      description: "Build sustainable partnerships with key influencers for consistent brand advocacy.",
    },
  ];

  return (
    <ServicePage 
      title="Influencer Marketing" 
      subtitle="Amplify Your Brand Through Trusted Voices"
      description="Our influencer marketing services connect brands with relevant content creators to build authentic relationships, reach new audiences, and drive engagement through trusted recommendations."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6"
    />
  );
};

export default InfluencerMarketing;
