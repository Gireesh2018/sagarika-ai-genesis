
import React from 'react';
import ServicePage from '../ServicePage';

const GoogleAds = () => {
  const services = [
    {
      name: "Search Campaigns",
      description: "Targeted ads that appear when users search for relevant keywords, capturing high-intent traffic.",
    },
    {
      name: "Display Campaigns",
      description: "Visual ads across Google's network of websites to build brand awareness and drive consideration.",
    },
    {
      name: "Video Campaigns",
      description: "Engaging video ads on YouTube and across the web to connect with your audience.",
    },
    {
      name: "Shopping Campaigns",
      description: "Product listings that appear in Google search results and the shopping tab to drive e-commerce sales.",
    },
    {
      name: "Remarketing Campaigns",
      description: "Strategic ads that target users who have previously engaged with your website or app.",
    },
    {
      name: "Campaign Optimization",
      description: "Continuous monitoring and refinement of campaigns to maximize ROI and performance.",
    },
  ];

  return (
    <ServicePage 
      title="Google Ads" 
      subtitle="Drive Qualified Traffic with Google Ads"
      description="Our Google Ads services help businesses leverage the world's largest search engine to connect with customers actively searching for their products or services."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd"
    />
  );
};

export default GoogleAds;
