
import React from 'react';
import ServicePage from '../ServicePage';

const TheatreAdvertising = () => {
  const services = [
    {
      name: "Cinema Ad Production",
      description: "High-impact cinema commercials designed specifically for the big screen experience.",
    },
    {
      name: "On-Screen Advertising",
      description: "Strategic placement of pre-show ads, trailers, and branded content in movie theaters.",
    },
    {
      name: "Lobby Displays & Promotions",
      description: "Eye-catching lobby displays, standees, and interactive brand activations in cinema venues.",
    },
    {
      name: "Theatre Sampling & Merchandising",
      description: "Product sampling and branded merchandise distribution to engaged theatre audiences.",
    },
    {
      name: "Sponsored Screenings",
      description: "Custom-branded film screenings and premiere events for maximum brand exposure.",
    },
    {
      name: "Cross-Promotion Campaigns",
      description: "Strategic partnerships with films and theatres for integrated marketing campaigns.",
    },
  ];

  return (
    <ServicePage 
      title="Theatre Advertising" 
      subtitle="Captivate Audiences on the Big Screen"
      description="Our theatre advertising services help brands connect with captive audiences in cinema environments through impactful on-screen ads, lobby displays, and experiential marketing opportunities."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c"
    />
  );
};

export default TheatreAdvertising;
