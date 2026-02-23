
import React from 'react';
import { MapPin } from 'lucide-react';
import { LOCATIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-12 pb-16 px-4 font-['Inter']">
      {/* Header Logo - Enlarged */}
      <div className="mb-16 flex justify-center">
        <h1 className="text-6xl font-extrabold tracking-tighter flex items-center">
          <span className="text-blue-600 ml-0.5 flex items-center relative">Nice</span>
          <span className="text-blue-600 ml-0.5 flex items-center relative">
            ll
            <span className="absolute -right-8 -top-1">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 5C18.8638 6.86384 20 9.43192 20 12C20 14.5681 18.8638 17.1362 17 19" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M14 8C15.1183 9.1183 15.8 10.6591 15.8 12.2C15.8 13.7409 15.1183 15.2817 14 16.4" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          </span>
        </h1>
      </div>

      {/* Credit Message & Strategic Note */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black text-blue-600 mb-3 tracking-tight">$10 Store Credit</h2>
        <p className="text-gray-600 font-semibold text-xl">has been added to your account. 🎉</p>
        <div className="mt-4 px-6 py-2 bg-blue-50/50 rounded-full inline-block">
          <p className="text-gray-500 text-xs italic">
            *Valid towards repair services only. Expires in 6 months.
          </p>
        </div>
      </div>

      {/* Locations Box - Matching Screenshot Tint */}
      <div className="w-full max-w-md bg-[#F1F7FF] rounded-[3rem] border border-[#DCE9FF] p-10 mb-12 shadow-sm">
        <h3 className="text-center text-blue-900 font-bold tracking-[0.3em] text-[10px] mb-8 pb-4 border-b border-blue-200/50">
          VISIT US AT
        </h3>
        
        <div className="space-y-8">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="flex items-start gap-5">
              <div className="mt-1 flex-shrink-0">
                <div className="w-7 h-7 rounded-full border border-blue-300 flex items-center justify-center bg-white shadow-sm">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-black font-black text-[18px] mb-0.5 leading-tight tracking-tight">
                  {loc.name}
                </span>
                <a 
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-gray-500 leading-snug hover:text-blue-600 transition-colors"
                >
                  {loc.address}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call Button - 3D Styled */}
      <a 
        href="tel:8016130024"
        className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] transition-all text-xl mb-24 active:translate-y-1 active:shadow-lg uppercase tracking-wider"
      >
        Call Us Now (801) 613-0024
      </a>

      {/* Footer */}
      <footer className="text-center mt-auto pb-8">
        <p className="text-gray-400 text-[10px] mb-1 font-bold tracking-[0.1em] uppercase">
          © {new Date().getFullYear()} NICELL WIRELESS. ALL RIGHTS RESERVED.
        </p>
        <p className="text-gray-300 text-[9px] font-medium">
          Powered by Porto AI
        </p>
      </footer>
    </div>
  );
};

export default App;
