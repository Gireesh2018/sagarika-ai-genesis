
import React from 'react';
import ServicePage from './ServicePage';

const DigitalMarketing = () => {
  const services = [
    {
      name: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility in search engine results with our comprehensive SEO strategies tailored to your business goals.",
    },
    {
      name: "Social Media Marketing",
      description: "Build a strong presence on social media platforms with engaging content and targeted campaigns that connect with your audience.",
    },
    {
      name: "Pay-Per-Click Advertising",
      description: "Drive immediate traffic and conversions with strategically managed PPC campaigns across Google, Bing, and social platforms.",
    },
    {
      name: "Email Marketing",
      description: "Nurture leads and build customer loyalty with personalized email marketing campaigns that deliver real results.",
    },
    {
      name: "Content Marketing",
      description: "Engage your audience with valuable, relevant content that establishes your authority and drives organic growth.",
    },
    {
      name: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and regular performance reports that track your ROI.",
    },
  ];

  return (
    <ServicePage 
      title="Digital Marketing" 
      subtitle="Drive Growth with Strategic Digital Marketing"
      description="Our comprehensive digital marketing solutions help businesses connect with their target audience, increase brand awareness, drive engagement, and convert prospects into loyal customers."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    />
  );
};

export default DigitalMarketing;
