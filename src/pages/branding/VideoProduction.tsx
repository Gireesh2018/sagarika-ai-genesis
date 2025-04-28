
import React from 'react';
import ServicePage from '../ServicePage';

const VideoProduction = () => {
  const services = [
    {
      name: "Concept Development & Scripting",
      description: "Creative concept development and professional scriptwriting tailored to your brand and campaign objectives.",
    },
    {
      name: "Full-Service Production",
      description: "End-to-end video production including pre-production planning, filming, and post-production.",
    },
    {
      name: "Animation & Motion Graphics",
      description: "Custom 2D and 3D animations and motion graphics that bring complex ideas to life visually.",
    },
    {
      name: "Aerial & Drone Videography",
      description: "Stunning aerial footage that provides unique perspectives and elevates production value.",
    },
    {
      name: "Sound Design & Music",
      description: "Professional audio production including voice-over recording, sound effects, and custom music.",
    },
    {
      name: "Multi-Platform Optimization",
      description: "Video formatting and optimization for various platforms and devices to maximize reach and engagement.",
    },
  ];

  return (
    <ServicePage 
      title="Video Production" 
      subtitle="Captivating Stories Through Video"
      description="Our comprehensive video production services combine creative storytelling with technical expertise to produce high-quality videos that resonate with your audience and achieve your marketing goals."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1574717025058-2f8737d7e521"
    />
  );
};

export default VideoProduction;
