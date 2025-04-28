
import React from 'react';
import ServicePage from '../ServicePage';

const VideoEditing = () => {
  const services = [
    {
      name: "Professional Video Editing",
      description: "Expert editing to create compelling narrative flow, pacing, and visual continuity in your videos.",
    },
    {
      name: "Color Grading & Correction",
      description: "Advanced color grading to establish mood, enhance visuals, and ensure consistency across your content.",
    },
    {
      name: "Motion Graphics & Animations",
      description: "Custom motion graphics, text animations, and visual effects to enhance your video content.",
    },
    {
      name: "Sound Editing & Mixing",
      description: "Professional audio editing, noise reduction, sound effects, and music integration for optimal sound quality.",
    },
    {
      name: "Format Conversion & Optimization",
      description: "Video formatting and optimization for different platforms, devices, and distribution channels.",
    },
    {
      name: "Revision & Collaborative Editing",
      description: "Flexible revision process with collaborative tools to ensure the final product meets your expectations.",
    },
  ];

  return (
    <ServicePage 
      title="Video Editing" 
      subtitle="Professional Post-Production Services"
      description="Our video editing services transform raw footage into polished, professional content through expert editing, color grading, motion graphics, and sound design."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1536240478700-b869070f9279"
    />
  );
};

export default VideoEditing;
