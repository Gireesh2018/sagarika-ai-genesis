
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="flex-1 animate-fade-in">
            <div className="mb-2">
              <p className="uppercase text-sm md:text-base font-medium text-sagarika-navy tracking-wider">
                Digital Marketing Company
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sagarika-navy mb-4">
              GROWTH <br />
              <span className="text-sagarika">REDEFINED</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              The epitome of dedication and perseverance, our team focuses on the exponential growth of the clients through tireless commitment.
            </p>
            <Button className="bg-sagarika-navy hover:bg-sagarika text-white px-8 py-6 rounded-full text-lg">
              Contact Us
            </Button>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative">
              <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Professional in digital marketing" 
                  className="w-full h-full object-cover" 
                />
                {/* Geometric overlays */}
                <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-sagarika-blue transform rotate-45 z-0"></div>
                <div className="absolute bottom-[-30px] left-[-30px] w-60 h-20 bg-sagarika transform -rotate-12 z-0"></div>
                <div className="absolute top-1/4 right-[-15px] w-3 h-32 bg-sagarika transform z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
