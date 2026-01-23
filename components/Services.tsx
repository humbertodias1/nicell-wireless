
import React from 'react';
import { Smartphone, Battery, Zap, Shield } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="w-6 h-6" />,
  battery: <Battery className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Professional solutions for all your tech troubles.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl border border-gray-100 hover:border-blue-600 transition-all bg-white shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
