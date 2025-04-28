
import React from 'react';
import ServicePage from '../ServicePage';

const ContentMarketing = () => {
  const services = [
    {
      name: "Content Strategy",
      description: "Develop a comprehensive content strategy aligned with your business goals and target audience needs.",
    },
    {
      name: "Blog Writing",
      description: "Create engaging, SEO-optimized blog content that establishes your brand as an industry authority.",
    },
    {
      name: "Social Media Content",
      description: "Craft platform-specific content that resonates with your audience and drives engagement.",
    },
    {
      name: "Video Content Production",
      description: "Produce compelling video content that captures attention and delivers your message effectively.",
    },
    {
      name: "Email Marketing Content",
      description: "Design personalized email campaigns that nurture leads and convert customers.",
    },
    {
      name: "Content Performance Analytics",
      description: "Track and analyze content performance to continuously refine your content strategy.",
    },
  ];

  return (
    <ServicePage 
      title="Content Marketing" 
      subtitle="Engage Your Audience with Valuable Content"
      description="Our content marketing services help businesses create and distribute relevant, valuable content that attracts and engages their target audience, driving profitable customer action."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    />
  );
};

export default ContentMarketing;
