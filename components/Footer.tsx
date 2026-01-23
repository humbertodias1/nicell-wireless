
import React from 'react';
import { Smartphone, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Nicell
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Your local experts for professional device repair. We specialize in bringing your tech back to life with quality and speed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Our Services</a></li>
              <li><a href="#locations" className="hover:text-blue-500 transition-colors">Locations</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Book Repair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Track Repair</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-6">Get tech tips and exclusive discounts delivered to your inbox.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-12 focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nicell Device Repairs. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Built for Utah's Tech Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
