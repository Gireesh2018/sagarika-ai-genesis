
import React from 'react';
import ServicePage from '../ServicePage';

const AdFilm = () => {
  const services = [
    {
      name: "Creative Concept Development",
      description: "Innovative concept creation that aligns with your brand messaging and campaign objectives.",
    },
    {
      name: "Scriptwriting & Storyboarding",
      description: "Professional scriptwriting and detailed storyboarding to visualize the ad before production.",
    },
    {
      name: "Professional Filming",
      description: "High-quality filming with professional crews, equipment, and talent management.",
    },
    {
      name: "Post-Production Excellence",
      description: "Comprehensive editing, color grading, and visual effects to create polished final products.",
    },
    {
      name: "Music & Sound Design",
      description: "Custom music composition, sound design, and audio mixing to enhance the emotional impact.",
    },
    {
      name: "Format Adaptation",
      description: "Adapting ad films for different platforms including TV, cinema, digital, and social media.",
    },
  ];

  return (
    <ServicePage 
      title="Ad Film Making" 
      subtitle="Compelling Commercials That Convert"
      description="Our ad film production services help brands create memorable commercials that communicate key messages, evoke emotions, and drive consumer action across television and digital platforms."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1536240478700-b869070f9279"
    />
  );
};

export default AdFilm;
