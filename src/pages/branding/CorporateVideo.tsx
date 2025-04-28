
import React from 'react';
import ServicePage from '../ServicePage';

const CorporateVideo = () => {
  const services = [
    {
      name: "Brand Stories & Company Profiles",
      description: "Compelling visual narratives that communicate your company's history, mission, and values.",
    },
    {
      name: "Product Showcase Videos",
      description: "Dynamic video content that highlights product features, benefits, and applications.",
    },
    {
      name: "Training & Educational Content",
      description: "Instructional videos designed to educate employees, partners, or customers.",
    },
    {
      name: "Event Coverage & Recaps",
      description: "Professional documentation of corporate events, conferences, and milestones.",
    },
    {
      name: "Testimonial & Case Study Videos",
      description: "Authentic video testimonials that showcase customer success stories and build credibility.",
    },
    {
      name: "Internal Communications",
      description: "Engaging video content for internal announcements, updates, and company culture initiatives.",
    },
  ];

  return (
    <ServicePage 
      title="Corporate Video Production" 
      subtitle="Professional Video Content for Business Growth"
      description="Our corporate video production services help businesses create impactful visual content that communicates brand messages, showcases products, and engages stakeholders effectively."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4"
    />
  );
};

export default CorporateVideo;
