'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiCode, FiLayers, FiGithub, FiMail } from 'react-icons/fi';
import Star from './components/Star';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Green Gradient Circle */}
        <div className="absolute top-32 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-green-400/40 to-green-500/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-green-300/25 to-green-400/15 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Profile Image - Mobile only */}
            <div className="flex justify-center mb-12 lg:hidden">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/20240615_100914.jpg"
                  alt="Temitope GX Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Main Layout */}
            <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start lg:space-y-0">
              {/* Mobile: WEB DEVELOPER First */}
              <div className="space-y-8 lg:order-1">
                <div className="text-center lg:text-left">
                  <div className="text-lg font-medium text-black mb-2">WEB</div>
                  <div className="text-7xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black text-black leading-none font-antonio">
                    DEVELOPER
                  </div>
                </div>
                
                {/* Description Text - Only show on desktop */}
                <div className="hidden lg:block">
                  <p className="text-gray-600 leading-relaxed mb-8">
                    I'm a creative Graphic Designer, Web Designer & Developer, and Live Event Streamer 
                    with a passion for turning ideas into engaging visuals and interactive experiences. 
                    I love blending creativity with technology to help brands stand out, 
                    connect with their audience, and make lasting impressions 
                    both online and in real-time events.
                  </p>
                </div>
              </div>
              
              {/* Mobile: WEB/GRAPHIC DESIGNER Second */}
              <div className="space-y-8 lg:text-right lg:order-2 lg:mt-40">
                {/* View Recent Project Button - Desktop only */}
                <div className="hidden lg:flex justify-end mb-8">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-8 py-4 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    VIEW RECENT PROJECT
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center lg:text-right">
                    <div className="text-lg font-medium text-black mb-2 hidden lg:block">WEB/GRAPHIC</div>
                    <div className="text-7xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black text-black leading-none font-antonio">
                      DESIGNER
                    </div>
                  </div>
                  
                  {/* View Recent Project Button - Mobile: under DESIGNER text */}
                  <div className="flex justify-center lg:hidden">
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200 text-sm"
                    >
                      VIEW RECENT PROJECT
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Mobile: Description Text at bottom */}
              <div className="max-w-full lg:hidden">
                <p className="text-gray-600 leading-relaxed text-center">
                  I'm a creative Graphic Designer, Web Designer & Developer, and Live Event Streamer 
                  with a passion for turning ideas into engaging visuals and interactive experiences. 
                  I love blending creativity with technology to help brands stand out, 
                  connect with their audience, and make lasting impressions 
                  both online and in real-time events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <section className="bg-black py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="flex items-center space-x-8 text-white font-bold text-lg font-antonio">
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              WEB DESIGNER
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              GRAPHIC DESIGNER
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              LIVE EVENT PRODUCTION
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              WEB DESIGNER
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              GRAPHIC DESIGNER
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              LIVE EVENT PRODUCTION
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              WEB DESIGNER
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-4 text-white" />
              GRAPHIC DESIGNER
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-black p-8 border border-gray-800">
              <div className="text-4xl font-black text-white mb-2">3+</div>
              <div className="text-lg font-semibold text-gray-300">YEARS OF EXPERIENCE</div>
            </div>
            <div className="bg-black p-8 border border-gray-800">
              <div className="text-4xl font-black text-white mb-2">300+</div>
              <div className="text-lg font-semibold text-gray-300">PROJECTS COMPLETED</div>
            </div>
            <div className="bg-black p-8 border border-gray-800">
              <div className="text-4xl font-black text-white mb-2">99%</div>
              <div className="text-lg font-semibold text-gray-300">POSITIVE REVIEWS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              WHAT I DO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining technical expertise with creative design to deliver exceptional digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 mx-auto mb-6 flex items-center justify-center">
                <FiCode className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">FRONT-END DEVELOPMENT</h3>
              <p className="text-gray-600 leading-relaxed">
                Building fast, responsive, and scalable web applications using modern technologies like React, Next.js, and WordPress.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 mx-auto mb-6 flex items-center justify-center">
                <FiLayers className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">WORDPRESS EXPERT</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating custom WordPress themes and plugins, optimizing performance, and building content management systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's collaborate and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Start a Project
            </Link>
            <a
              href="https://github.com/temitopegx"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-200"
          >
              <FiGithub className="w-5 h-5 mr-2" />
              View GitHub
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}
