
import React from 'react';
import ServicePage from '../ServicePage';

const DigitalTransformation = () => {
  const services = [
    {
      name: "Digital Strategy Consulting",
      description: "Develop a comprehensive digital transformation roadmap tailored to your organization's specific needs and goals.",
    },
    {
      name: "Process Automation",
      description: "Identify and implement automation opportunities to streamline operations and reduce manual workload.",
    },
    {
      name: "Legacy System Modernization",
      description: "Update and transform outdated systems into modern, scalable digital solutions.",
    },
    {
      name: "Cloud Migration",
      description: "Safely and efficiently move your business operations to cloud-based infrastructure.",
    },
    {
      name: "Digital Workplace Solutions",
      description: "Create collaborative digital environments that enhance productivity and enable remote work capabilities.",
    },
    {
      name: "Change Management",
      description: "Guide your team through the digital transformation process with targeted training and support.",
    },
  ];

  return (
    <ServicePage 
      title="Digital Transformation Service" 
      subtitle="Revolutionize Your Business with Digital Solutions"
      description="Our digital transformation services help businesses evolve to meet the demands of the digital age, implementing technologies and processes that drive efficiency and growth."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    />
  );
};

export default DigitalTransformation;
