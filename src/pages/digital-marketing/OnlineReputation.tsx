
import React from 'react';
import ServicePage from '../ServicePage';

const OnlineReputation = () => {
  const services = [
    {
      name: "Reputation Monitoring",
      description: "Continuous tracking of your brand mentions and sentiment across the web to identify opportunities and issues.",
    },
    {
      name: "Review Management",
      description: "Proactive management of customer reviews including response strategies and generation of positive reviews.",
    },
    {
      name: "Crisis Management",
      description: "Rapid response strategies to address negative publicity and minimize potential damage to your brand.",
    },
    {
      name: "Content Removal & Suppression",
      description: "Strategic approaches to removing or suppressing negative content about your brand when possible.",
    },
    {
      name: "Brand Sentiment Improvement",
      description: "Strategic content creation and promotion to build a positive brand narrative online.",
    },
    {
      name: "Ongoing Reputation Maintenance",
      description: "Long-term strategies to maintain and enhance your brand's online reputation.",
    },
  ];

  return (
    <ServicePage 
      title="Online Reputation Management" 
      subtitle="Build and Protect Your Digital Reputation"
      description="Our online reputation management services help businesses monitor, maintain, and improve how they're perceived online through strategic content, review management, and crisis prevention."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984"
    />
  );
};

export default OnlineReputation;
