'use client';

import { useState, useEffect } from 'react';
import { FiCode, FiLayers, FiShoppingCart, FiSmartphone, FiSettings, FiZap } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    features: [
      'Responsive Design',
      'Fast Performance',
      'SEO Optimized',
      'Cross-browser Compatible',
      'Modern Frameworks (React, Next.js)',
      'Database Integration'
    ],
    icon: <FiCode className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems'
    ],
    icon: <FiLayers className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description: 'Complete online store development with payment integration',
    features: [
      'Shopping Cart Functionality',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing',
      'Customer Management',
      'Analytics & Reporting'
    ],
    icon: <FiShoppingCart className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Mobile-First Design',
    description: 'Responsive designs that work perfectly on all devices',
    features: [
      'Mobile Optimization',
      'Touch-friendly Interfaces',
      'Progressive Web Apps',
      'Cross-platform Compatibility',
      'Performance Optimization',
      'App-like Experience'
    ],
    icon: <FiSmartphone className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'Website Maintenance',
    description: 'Ongoing support and updates to keep your website running smoothly',
    features: [
      'Regular Updates',
      'Security Monitoring',
      'Performance Optimization',
      'Bug Fixes',
      'Content Updates',
      '24/7 Support'
    ],
    icon: <FiSettings className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'Consultation & Strategy',
    description: 'Expert advice on digital strategy and technology solutions',
    features: [
      'Technology Consulting',
      'Digital Strategy',
      'Project Planning',
      'Architecture Design',
      'Performance Audits',
      'Best Practices'
    ],
    icon: <FiZap className="w-8 h-8" />,
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6">
              MY{' '}
              <span className="text-green-500">SERVICES</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive web development and design solutions to bring your digital vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white border border-gray-200 p-8 hover:border-green-500 transition-colors duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 bg-green-500 flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-4">
              MY PROCESS
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'DISCOVERY',
                description: 'Understanding your needs, goals, and target audience'
              },
              {
                step: '02',
                title: 'PLANNING',
                description: 'Creating a detailed project roadmap and timeline'
              },
              {
                step: '03',
                title: 'DEVELOPMENT',
                description: 'Building your solution with regular updates and feedback'
              },
              {
                step: '04',
                title: 'LAUNCH',
                description: 'Deploying your project and providing ongoing support'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
