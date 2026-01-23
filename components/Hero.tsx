
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Expert repair for <br />
            <span className="text-blue-600">your device.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Fast, reliable, and professional repair services for smartphones, tablets, and computers. Most repairs are completed in under 45 minutes by our certified technicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#locations"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Find a location
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
