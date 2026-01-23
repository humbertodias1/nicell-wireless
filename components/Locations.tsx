
import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600">Find the nearest Nicell expert repair center in Utah.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{loc.name}</h3>
                
                <div className="space-y-6">
                  {/* The Address is the direct link as requested */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 shrink-0 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-400 uppercase font-bold tracking-wider mb-1">Address</p>
                      <a 
                        href={loc.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors block leading-tight"
                      >
                        {loc.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 mt-1 shrink-0 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-400 uppercase font-bold tracking-wider mb-1">Phone</p>
                      <span className="text-lg font-semibold text-gray-900">{loc.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-gray-600">
                    <Clock className="w-5 h-5 mt-1 shrink-0 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-400 uppercase font-bold tracking-wider mb-1">Hours</p>
                      <span className="text-lg font-semibold text-gray-900">{loc.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-blue-700 transition-all"
                >
                  Get Directions
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
