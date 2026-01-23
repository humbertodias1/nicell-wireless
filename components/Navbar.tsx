
import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-600' : 'text-blue-600'}`}>
              Nicell
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#locations"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#locations"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-5 py-4 rounded-xl text-lg font-semibold"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
