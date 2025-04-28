
import React from 'react';
import ServicePage from '../ServicePage';

const EcommerceWebsite = () => {
  const services = [
    {
      name: "Custom E-commerce Development",
      description: "Tailored e-commerce platforms designed specifically for your business model and product offerings.",
    },
    {
      name: "Shopping Cart Integration",
      description: "Seamless, user-friendly shopping cart experiences that minimize abandonment and maximize conversions.",
    },
    {
      name: "Payment Gateway Setup",
      description: "Integration with secure, reliable payment processors for smooth and protected customer transactions.",
    },
    {
      name: "Inventory Management Systems",
      description: "Automated systems to track stock levels, manage products, and synchronize with your sales channels.",
    },
    {
      name: "Mobile Commerce Optimization",
      description: "Responsive design ensuring perfect functionality across all devices for today's mobile shoppers.",
    },
    {
      name: "Marketing & SEO Integration",
      description: "Built-in features to boost your product visibility and implement effective marketing strategies.",
    },
  ];

  return (
    <ServicePage 
      title="E-commerce Website Design" 
      subtitle="Turn Visitors into Customers"
      description="Our e-commerce website design services create intuitive, conversion-focused online stores that showcase your products effectively and provide seamless shopping experiences across all devices."
      services={services}
      imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    />
  );
};

export default EcommerceWebsite;
