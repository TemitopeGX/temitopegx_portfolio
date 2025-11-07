'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiCheck, FiTruck, FiUsers, FiDollarSign, FiMapPin, FiSmartphone, FiShield } from 'react-icons/fi';

export default function Agroconnect() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Direct Connection',
      description: 'Connect farmers directly with buyers, eliminating middleman markups'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location-Based',
      description: 'Find local farmers and buyers in your area for fresher produce'
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: 'Fair Pricing',
      description: 'Transparent pricing that benefits both farmers and buyers'
    },
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: 'Logistics Support',
      description: 'Integrated delivery and transportation coordination'
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Mobile First',
      description: 'Easy-to-use mobile app designed for farmers and buyers'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Rating system and quality verification for all products'
    }
  ];

  const farmerBenefits = [
    'Sell directly to buyers at better prices',
    'Eliminate middleman commissions',
    'Access to wider market reach',
    'Real-time market price information',
    'Secure payment processing',
    'Build direct customer relationships'
  ];

  const buyerBenefits = [
    'Access to fresh, local produce',
    'Competitive pricing from farmers',
    'Know the source of your food',
    'Support local agriculture',
    'Bulk purchasing options',
    'Seasonal produce notifications'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors duration-200"
            >
              <FiArrowLeft className="w-4 h-4 mr-2" />
              BACK TO HOME
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-block bg-green-500 text-black px-4 py-2 font-bold text-sm mb-6">
                  AGTECH STARTUP
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 font-antonio leading-none">
                  AGRO<span className="block">CONNECT</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionary agricultural marketplace connecting farmers directly to buyers, 
                  eliminating middlemen and creating a fairer, more transparent food system.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <div className="bg-green-500 text-black px-6 py-3 font-bold">
                    LAUNCHING 2025
                  </div>
                  <div className="border border-gray-600 text-gray-300 px-6 py-3 font-semibold">
                    PILOT PROGRAM ACTIVE
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-black text-white mb-2">30%</div>
                    <div className="text-sm text-gray-400">HIGHER FARMER INCOME</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-2">25%</div>
                    <div className="text-sm text-gray-400">LOWER BUYER COSTS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-2">100+</div>
                    <div className="text-sm text-gray-400">FARMERS REGISTERED</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="bg-white p-8 relative">
                  {/* Mock Marketplace Interface */}
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-black flex items-center justify-center">
                        <span className="text-white font-black text-lg">A</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-500">MARKETPLACE</div>
                        <div className="text-xl font-black text-black">FRESH PRODUCE</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-black">Organic Tomatoes</div>
                        <div className="text-sm text-gray-600">Farm: Johnson's Organic</div>
                        <div className="text-xs text-green-500">2.5km away</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-500">$3.50/kg</div>
                        <div className="text-xs text-gray-500">500kg available</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-black">Fresh Lettuce</div>
                        <div className="text-sm text-gray-600">Farm: Green Valley</div>
                        <div className="text-xs text-green-500">1.8km away</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-500">$2.20/kg</div>
                        <div className="text-xs text-gray-500">200kg available</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500 text-white text-center py-3 font-semibold">
                    CONNECT WITH FARMER
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 text-sm font-bold">
                  FRESH
                </div>
                <div className="absolute -bottom-4 -left-4 bg-black text-white px-4 py-2 text-sm font-semibold">
                  NO MIDDLEMAN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-8">
              THE AGRICULTURAL CRISIS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The current food system is broken, creating unfair conditions for both farmers and consumers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Farmer Problems */}
            <div className="bg-red-50 p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-black mb-6">FARMERS STRUGGLE</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Low Prices</div>
                    <div className="text-sm text-gray-600">Receive only 20-30% of final retail price</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Limited Market Access</div>
                    <div className="text-sm text-gray-600">Dependent on local middlemen</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Payment Delays</div>
                    <div className="text-sm text-gray-600">Wait weeks or months for payment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middleman Issues */}
            <div className="bg-yellow-50 p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-black mb-6">MIDDLEMAN MARKUP</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">$</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">High Commissions</div>
                    <div className="text-sm text-gray-600">Take 40-60% of the final price</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">$</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">No Transparency</div>
                    <div className="text-sm text-gray-600">Hidden costs and unclear pricing</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">$</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Quality Loss</div>
                    <div className="text-sm text-gray-600">Multiple handling reduces freshness</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consumer Impact */}
            <div className="bg-blue-50 p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-black mb-6">CONSUMERS PAY MORE</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">↑</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Higher Prices</div>
                    <div className="text-sm text-gray-600">Pay 2-3x what farmers receive</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">↑</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Less Fresh Produce</div>
                    <div className="text-sm text-gray-600">Longer supply chain = older food</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">↑</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Unknown Origin</div>
                    <div className="text-sm text-gray-600">No connection to food source</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-16 bg-gray-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-8">THE NUMBERS DON'T LIE</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-black text-red-500 mb-2">70%</div>
                <div className="text-sm text-gray-600">OF FOOD PRICE GOES TO MIDDLEMEN</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-500 mb-2">40%</div>
                <div className="text-sm text-gray-600">OF PRODUCE WASTED IN SUPPLY CHAIN</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-500 mb-2">5-7</div>
                <div className="text-sm text-gray-600">DAYS FROM FARM TO CONSUMER</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-500 mb-2">0</div>
                <div className="text-sm text-gray-600">DIRECT FARMER-BUYER CONNECTION</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-6">
              THE SOLUTION
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AgroConnect creates a direct marketplace where farmers and buyers 
              can connect, trade, and build relationships without intermediaries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 hover:border-green-500 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Both Sides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-6">
              BENEFITS FOR EVERYONE
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Farmer Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                FOR FARMERS
              </h3>
              <div className="space-y-4">
                {farmerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buyer Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                FOR BUYERS
              </h3>
              <div className="space-y-4">
                {buyerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-6">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                REGISTER
              </h3>
              <p className="text-gray-600">
                Farmers and buyers create profiles with their location, 
                products, and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                CONNECT
              </h3>
              <p className="text-gray-600">
                Our platform matches farmers with nearby buyers based on 
                product availability and demand
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                TRADE
              </h3>
              <p className="text-gray-600">
                Negotiate prices, arrange delivery, and complete transactions 
                securely through the platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-12">
            WHO WE SERVE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">SMALL-SCALE FARMERS</h3>
              <p className="text-gray-600">
                Individual farmers and small farming cooperatives looking to 
                sell their produce directly to consumers and businesses
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">LOCAL BUYERS</h3>
              <p className="text-gray-600">
                Restaurants, grocery stores, markets, and individual consumers 
                seeking fresh, local agricultural products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            JOIN THE AGRICULTURAL REVOLUTION
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the movement to create a fairer, more transparent agricultural marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              GET EARLY ACCESS
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              BACK TO PORTFOLIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
