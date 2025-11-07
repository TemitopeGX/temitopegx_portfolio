'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="text-xl font-black text-black">
            TEMITOPE GX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com/temitopegx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
            >
              GITHUB
            </a>
            <Link
              href="/contact"
              className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              LET'S TALK
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="px-6 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <a
                  href="https://github.com/temitopegx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-medium text-gray-600 hover:text-black"
                >
                  GITHUB
                </a>
                <Link
                  href="/contact"
                  className="block px-6 py-3 bg-black text-white text-center text-base font-medium hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LET'S TALK
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
