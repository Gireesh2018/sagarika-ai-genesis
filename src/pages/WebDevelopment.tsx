
import React from 'react';
import ServicePage from './ServicePage';

const WebDevelopment = () => {
  const services = [
    {
      name: "Custom Website Development",
      description: "Tailored websites designed to meet your specific business needs, providing a solid foundation for your online presence.",
    },
    {
      name: "E-commerce Development",
      description: "Powerful online stores with seamless shopping experiences that drive conversions and increase revenue.",
    },
    {
      name: "Web Application Development",
      description: "Custom web applications that streamline operations, enhance productivity, and solve complex business challenges.",
    },
    {
      name: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging experiences to delight your customers and keep them coming back.",
    },
    {
      name: "CMS Development",
      description: "Custom content management systems that make it easy to update and manage your website content.",
    },
    {
      name: "Website Maintenance & Support",
      description: "Ongoing maintenance and support services to keep your website secure, up-to-date, and performing optimally.",
    },
  ];

  return (
    <ServicePage 
      title="Web Development" 
      subtitle="Cutting-Edge Web Solutions for Your Business"
      description="Our expert web development team creates responsive, user-friendly websites and applications that engage visitors, showcase your brand, and drive business growth."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    />
  );
};

export default WebDevelopment;
