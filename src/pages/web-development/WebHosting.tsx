
import React from 'react';
import ServicePage from '../ServicePage';

const WebHosting = () => {
  const services = [
    {
      name: "Managed Hosting Solutions",
      description: "Fully managed hosting services with technical maintenance, updates, and security handled by our experts.",
    },
    {
      name: "High-Performance Servers",
      description: "Optimized server environments that ensure fast loading times and smooth operation of your website.",
    },
    {
      name: "Enhanced Security Measures",
      description: "Comprehensive security protocols including firewalls, malware scanning, and intrusion detection.",
    },
    {
      name: "Regular Backups",
      description: "Automated backup systems to protect your website data and enable quick recovery if needed.",
    },
    {
      name: "Scalable Resources",
      description: "Flexible hosting packages that can grow with your business to accommodate increased traffic and needs.",
    },
    {
      name: "24/7 Technical Support",
      description: "Round-the-clock expert assistance to resolve any hosting issues and minimize downtime.",
    },
  ];

  return (
    <ServicePage 
      title="Web Hosting" 
      subtitle="Reliable Infrastructure for Your Online Presence"
      description="Our web hosting services provide secure, high-performance environments for your website with expert technical support, ensuring your online presence remains consistently available and fast for your visitors."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    />
  );
};

export default WebHosting;
