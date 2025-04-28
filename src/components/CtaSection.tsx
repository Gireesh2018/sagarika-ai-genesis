
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-sagarika-navy to-sagarika-blue rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-white/90 mb-8 max-w-xl">
                Partner with us for innovative digital solutions that drive growth, engagement, and results. Let's transform your digital presence together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-sagarika hover:bg-sagarika-dark text-white font-medium px-8 py-6">
                  Get Started
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 relative min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 bg-sagarika/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-sagarika-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
