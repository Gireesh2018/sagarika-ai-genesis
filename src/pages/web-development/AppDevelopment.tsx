
import React from 'react';
import ServicePage from '../ServicePage';

const AppDevelopment = () => {
  const services = [
    {
      name: "Mobile App Development",
      description: "Native and cross-platform applications designed for iOS and Android devices with optimal performance.",
    },
    {
      name: "Web Application Development",
      description: "Complex browser-based applications with desktop-like functionality and responsive interfaces.",
    },
    {
      name: "Progressive Web Apps",
      description: "Hybrid solutions offering app-like experiences through web browsers with offline capabilities.",
    },
    {
      name: "Custom Software Solutions",
      description: "Tailor-made software applications designed to address specific business challenges and needs.",
    },
    {
      name: "App UI/UX Design",
      description: "Intuitive, engaging user interfaces and experiences designed specifically for application contexts.",
    },
    {
      name: "App Maintenance & Updates",
      description: "Ongoing support, feature enhancements, and compatibility updates to keep your app relevant and functioning.",
    },
  ];

  return (
    <ServicePage 
      title="App Development" 
      subtitle="Powerful Applications for Modern Businesses"
      description="Our app development services create custom mobile and web applications that extend your digital reach, streamline operations, and provide unique value to your customers across multiple platforms."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    />
  );
};

export default AppDevelopment;
