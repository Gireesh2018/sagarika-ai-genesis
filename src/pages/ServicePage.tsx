
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  services: Array<{
    name: string;
    description: string;
  }>;
  imageSrc: string;
}

const ServicePage = ({ 
  title, 
  subtitle, 
  description, 
  services,
  imageSrc 
}: ServicePageProps) => {
  return (
    <>
      <Navigation />
      
      <header className="py-16 md:py-24 px-4 bg-sagarika-gray">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-sagarika-navy mb-4">
                {title}
              </h1>
              <p className="text-xl text-sagarika mb-6">{subtitle}</p>
              <p className="text-gray-600 mb-8">
                {description}
              </p>
              <Button className="bg-sagarika hover:bg-sagarika-dark text-white">
                Get Started
              </Button>
            </div>
            <div className="flex-1">
              <div className="rounded-xl overflow-hidden shadow-lg relative">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 w-24 h-24 bg-sagarika transform rotate-45 translate-x-12 -translate-y-12 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-sagarika-navy mb-12 text-center">
            Our {title} Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-sagarika-navy mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-4 bg-sagarika-navy">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your {title}?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our {title} services can help your business grow and succeed.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-sagarika hover:bg-sagarika-dark text-white px-8">
              Contact Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ServicePage;
