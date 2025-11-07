'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiCheck, FiMail, FiFileText, FiDollarSign, FiUsers, FiBarChart, FiShield } from 'react-icons/fi';

export default function Billio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: 'Invoice Creation',
      description: 'Create professional invoices with customizable templates and branding'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Integration',
      description: 'Send invoices directly to clients via email with tracking capabilities'
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: 'Payment Management',
      description: 'Track payments, manage due dates, and send automated reminders'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Client Management',
      description: 'Organize client information and maintain detailed contact records'
    },
    {
      icon: <FiBarChart className="w-6 h-6" />,
      title: 'Financial Reports',
      description: 'Generate comprehensive reports for better business insights'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Secure Storage',
      description: 'All data is securely stored with regular backups and encryption'
    }
  ];

  const benefits = [
    'Streamline your invoicing process',
    'Reduce payment delays with automated reminders',
    'Professional branded invoices',
    'Real-time payment tracking',
    'Comprehensive financial reporting',
    'Mobile-friendly interface',
    'Multi-currency support',
    'Tax calculation and management'
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
                  FINTECH STARTUP
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 font-antonio leading-none">
                  BILLIO
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionary invoice and payment management platform that transforms 
                  how small businesses handle their finances. Built for the modern entrepreneur.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <div className="bg-green-500 text-black px-6 py-3 font-bold">
                    LAUNCHING 2025
                  </div>
                  <div className="border border-gray-600 text-gray-300 px-6 py-3 font-semibold">
                    PRE-REGISTRATION OPEN
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-black text-white mb-2">50+</div>
                    <div className="text-sm text-gray-400">BETA TESTERS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-2">99%</div>
                    <div className="text-sm text-gray-400">UPTIME TARGET</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-2">24/7</div>
                    <div className="text-sm text-gray-400">SUPPORT</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="bg-white p-8 relative">
                  {/* Mock Invoice Interface */}
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-black flex items-center justify-center">
                        <span className="text-white font-black text-lg">B</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-500">INVOICE</div>
                        <div className="text-xl font-black text-black">#INV-001</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Web Development</span>
                      <span className="font-semibold text-black">$2,500.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">UI/UX Design</span>
                      <span className="font-semibold text-black">$1,800.00</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-black">
                        <span>TOTAL</span>
                        <span className="text-green-500">$4,300.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500 text-white text-center py-3 font-semibold">
                    SEND INVOICE
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 text-sm font-bold">
                  PAID
                </div>
                <div className="absolute -bottom-4 -left-4 bg-black text-white px-4 py-2 text-sm font-semibold">
                  AUTO-REMINDER
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-black mb-8">
                THE PROBLEM WE'RE SOLVING
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-black mb-2">MANUAL PROCESSES</h3>
                  <p className="text-gray-600">
                    Small businesses waste hours creating invoices manually, leading to errors and delays
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-black mb-2">PAYMENT DELAYS</h3>
                  <p className="text-gray-600">
                    Poor tracking systems result in late payments and cash flow problems
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-black mb-2">UNPROFESSIONAL APPEARANCE</h3>
                  <p className="text-gray-600">
                    Basic invoices don't reflect business quality, affecting client perception
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-black mb-6">CURRENT PAIN POINTS</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <span className="text-gray-700">Average 3-5 hours per week on invoicing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <span className="text-gray-700">30% of invoices paid late</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <span className="text-gray-700">Lost revenue due to forgotten follow-ups</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <span className="text-gray-700">Difficulty tracking business performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-green-500 text-white px-4 py-2 font-bold text-sm mb-6">
              OUR SOLUTION
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-8">
              BILLIO TRANSFORMS YOUR WORKFLOW
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive platform that automates invoicing, tracks payments, 
              and provides insights to grow your business faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 border-l-4 border-green-500 hover:transform hover:scale-105 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Before vs After */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-black mb-6">BEFORE BILLIO</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">✗</span>
                  </div>
                  <span className="text-gray-700">Manual invoice creation takes hours</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">✗</span>
                  </div>
                  <span className="text-gray-700">Forgetting to follow up on payments</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">✗</span>
                  </div>
                  <span className="text-gray-700">No clear overview of business finances</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">✗</span>
                  </div>
                  <span className="text-gray-700">Unprofessional invoice appearance</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-black mb-6">WITH BILLIO</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-4 mt-1">
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Create invoices in under 2 minutes</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-4 mt-1">
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Automated payment reminders</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-4 mt-1">
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Real-time financial dashboard</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-4 mt-1">
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Professional branded invoices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-6">
              WHY CHOOSE BILLIO?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <FiCheck className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-12">
            PERFECT FOR
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">FREELANCERS</h3>
              <p className="text-gray-600">
                Independent professionals who need to manage multiple clients 
                and projects with professional invoicing
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">SMALL BUSINESSES</h3>
              <p className="text-gray-600">
                Growing businesses that need efficient financial management 
                and professional client communication
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">CONSULTANTS</h3>
              <p className="text-gray-600">
                Service providers who require detailed invoicing with 
                time tracking and project-based billing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            INTERESTED IN BILLIO?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to know when Billio launches and get early access
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
