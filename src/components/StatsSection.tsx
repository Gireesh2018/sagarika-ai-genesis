
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-sagarika relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sagarika-green opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sagarika-light opacity-20 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            value="250+" 
            label="Happy Clients" 
          />
          
          <StatCard 
            value="500+" 
            label="Projects Completed" 
          />
          
          <StatCard 
            value="15+" 
            label="Years Experience" 
          />
          
          <StatCard 
            value="30+" 
            label="Expert Team Members" 
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-sagarika-green font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatsSection;
