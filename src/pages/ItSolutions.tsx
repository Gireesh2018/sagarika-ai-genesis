
import React from 'react';
import ServicePage from './ServicePage';

const ItSolutions = () => {
  const services = [
    {
      name: "IT Consulting",
      description: "Expert guidance to help you make informed technology decisions aligned with your business goals and industry best practices.",
    },
    {
      name: "Cloud Services",
      description: "Comprehensive cloud solutions including migration, management, and optimization to improve scalability and reduce costs.",
    },
    {
      name: "Cybersecurity",
      description: "Protect your business with robust security assessments, implementation, and ongoing monitoring to mitigate cyber threats.",
    },
    {
      name: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business challenges and streamline operations.",
    },
    {
      name: "IT Infrastructure Management",
      description: "Proactive management of your IT infrastructure to ensure optimal performance, reliability, and security.",
    },
    {
      name: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    },
  ];

  return (
    <ServicePage 
      title="IT Solutions" 
      subtitle="Technology Solutions for Business Success"
      description="Our comprehensive IT solutions empower businesses with the technology infrastructure, security, and support needed to operate efficiently and stay ahead in the digital age."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    />
  );
};

export default ItSolutions;
