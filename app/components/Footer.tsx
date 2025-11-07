'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Top Section - 4 Columns Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1 - Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
              Temitope GX is a place on the internet where innovative web development and creative design solutions come to life, helping businesses succeed in the digital world.
            </p>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white uppercase">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base inline-flex items-center gap-2">
                  Portfolio
                  <span className="bg-green-500 text-black text-xs px-2 py-0.5 rounded-full font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Follow Us */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white uppercase">Follow us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://twitter.com/temitopegx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/temitopegx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/temitopegx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@temitopegx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm sm:text-base"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white uppercase">Stay up to date</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-200 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-black font-bold rounded hover:bg-green-600 transition-colors duration-200 whitespace-nowrap text-sm"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                By subscribing you agree to our privacy policy and provide consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Large Logo Text at Bottom - Blurry Effect */}
      <div className="relative w-full overflow-visible">
        <div className="text-green-500/25 font-antonio font-black leading-none pointer-events-none select-none text-center" style={{ filter: 'blur(4px)' }}>
          <div className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] 2xl:text-[22rem] whitespace-nowrap px-4">
            TEMITOPE GX
          </div>
        </div>
      </div>

      {/* Bottom Copyright and Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          {/* Left - Copyright */}
          <p className="text-white text-xs sm:text-sm">
            © {currentYear} Temitope GX. All rights reserved.
          </p>

          {/* Right - Footer Links */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <Link href="/terms" className="text-white hover:text-green-500 transition-colors duration-200 text-xs sm:text-sm">
                Terms
              </Link>
              <Link href="/privacy" className="text-white hover:text-green-500 transition-colors duration-200 text-xs sm:text-sm">
                Privacy
              </Link>
            </div>
            <Link href="/cookies" className="text-white hover:text-green-500 transition-colors duration-200 text-xs sm:text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
