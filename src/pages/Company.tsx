
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Company = () => {
  return (
    <>
      <Navigation />
      
      <header className="py-16 md:py-24 px-4 bg-sagarika-gray">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sagarika-navy mb-4">
              About Sagarika Digital
            </h1>
            <p className="text-xl text-gray-600">
              Empowering businesses with innovative digital solutions since 2010
            </p>
          </div>
        </div>
      </header>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-sagarika-navy mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Sagarika Digital began with a simple mission: to help businesses thrive in the digital world through innovative, results-driven solutions.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate digital enthusiasts has grown into a comprehensive digital marketing and technology agency serving clients across multiple industries.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be recognized as a leader in the digital space, helping businesses of all sizes achieve their goals through strategic digital marketing, cutting-edge web development, creative branding, and robust IT solutions.
              </p>
            </div>
            <div className="flex-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Sagarika Digital Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-sagarika-gray">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-sagarika-navy mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Innovation"
              description="We constantly explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve."
              iconPath="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
            
            <ValueCard 
              title="Excellence"
              description="We are committed to delivering exceptional quality in everything we do, striving for excellence in every project we undertake."
              iconPath="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
            
            <ValueCard 
              title="Integrity"
              description="We operate with transparency and honesty, building trust through ethical business practices and long-term client partnerships."
              iconPath="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sagarika-navy mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals who are passionate about digital marketing and technology. Check out our open positions and join our growing team.
            </p>
            <Button className="bg-sagarika hover:bg-sagarika-dark text-white">
              View Careers
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

const ValueCard = ({ title, description, iconPath }: { title: string; description: string; iconPath: string }) => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-md text-center">
      <div className="mb-4 mx-auto w-16 h-16 bg-sagarika/10 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sagarika">
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-sagarika-navy mb-3">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default Company;
