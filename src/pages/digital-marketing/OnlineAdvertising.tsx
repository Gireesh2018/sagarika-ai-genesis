
import React from 'react';
import ServicePage from '../ServicePage';

const OnlineAdvertising = () => {
  const services = [
    {
      name: "Display Advertising",
      description: "Visually engaging ads placed on websites, apps, and social media platforms to increase brand awareness and drive traffic.",
    },
    {
      name: "Retargeting Campaigns",
      description: "Strategic ad delivery to users who have previously visited your website to increase conversion opportunities.",
    },
    {
      name: "Native Advertising",
      description: "Seamlessly integrated ads that match the look and feel of the platform they appear on for higher engagement.",
    },
    {
      name: "Programmatic Advertising",
      description: "Automated buying and optimization of digital advertising space to reach specific audiences.",
    },
    {
      name: "Video Advertising",
      description: "Engaging video ads across platforms like YouTube, social media, and streaming services.",
    },
    {
      name: "Performance Tracking",
      description: "Comprehensive analytics and reporting to measure campaign performance and ROI.",
    },
  ];

  return (
    <ServicePage 
      title="Online Advertising" 
      subtitle="Drive Results with Targeted Digital Ads"
      description="Our online advertising services help businesses reach their target audience at the right time and place with compelling digital ads that drive awareness, engagement, and conversions."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1611926653458-09294b3142bf"
    />
  );
};

export default OnlineAdvertising;
