'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiCode, FiLayers, FiGithub, FiMail, FiSmartphone, FiSettings, FiZap, FiShield } from 'react-icons/fi';
import Star from './components/Star';
import Image from 'next/image';
import FallingText from './components/FallingText';

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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-black p-6">
              <div className="text-3xl font-black text-white mb-2">3+</div>
              <div className="text-sm font-semibold text-gray-300">YEARS OF EXPERIENCE</div>
            </div>
            <div className="bg-black p-6">
              <div className="text-3xl font-black text-white mb-2">300+</div>
              <div className="text-sm font-semibold text-gray-300">PROJECTS COMPLETED</div>
            </div>
            <div className="bg-black p-6">
              <div className="text-3xl font-black text-white mb-2">99%</div>
              <div className="text-sm font-semibold text-gray-300">POSITIVE REVIEWS</div>
            </div>
            <div className="bg-black p-6">
              <div className="text-3xl font-black text-white mb-2">24/7</div>
              <div className="text-sm font-semibold text-gray-300">SUPPORT AVAILABLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me / CEO Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Image - Hidden on mobile */}
            <div className="order-2 lg:order-1 hidden lg:block">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src="/20240615_100914.jpg"
                    alt="Temitope GX - CEO & Founder"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
                  ABOUT ME
                </h2>
                <h3 className="text-xl font-semibold text-green-500 mb-8">
                  CEO & FOUNDER
                </h3>
                
                <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                  <p>
                    Hello! I'm <strong className="text-black">Temitope GX</strong>, a passionate web developer and designer 
                    with over 3 years of experience in creating digital solutions that make a difference.
                  </p>
                  
                  <p>
                    My journey began with a simple curiosity about how websites work, which evolved into a 
                    deep passion for crafting exceptional user experiences. I specialize in front-end development, 
                    WordPress solutions, and creative design that helps businesses stand out in the digital landscape.
                  </p>
                  
                  <p>
                    When I'm not coding or designing, you'll find me exploring new technologies, mentoring 
                    upcoming developers, or working on innovative projects that push the boundaries of 
                    what's possible on the web.
                  </p>
                </div>


                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
                  >
                    LET'S WORK TOGETHER
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-8 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    VIEW MY WORK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Startups Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-green-500 text-black px-4 py-2 font-bold text-sm mb-6">
              ENTREPRENEUR
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 font-antonio">
              MY STARTUPS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building innovative solutions that solve real problems and create value for businesses and communities
            </p>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {/* Billio Card */}
            <div className="grid lg:grid-cols-12 gap-8 items-center relative">
              {/* Cool Number */}
              <div className="absolute -top-8 left-0 lg:left-8">
                <div className="text-8xl lg:text-9xl font-black text-white/10 font-antonio leading-none">01</div>
              </div>
              
              <div className="lg:col-span-2 lg:col-start-1 relative z-10">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white border-4 border-green-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-black font-black text-3xl">B</span>
                  </div>
                  <div className="bg-green-500 text-black px-4 py-2 font-bold text-sm inline-block">
                    LAUNCHING 2025
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-4 relative z-10">
                <div className="text-center lg:text-left">
                  <div className="text-sm font-semibold text-green-400 mb-2">FINTECH STARTUP</div>
                  <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 font-antonio">BILLIO</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Professional invoice and payment management platform designed to streamline 
                    billing processes for small businesses and freelancers worldwide.
                  </p>
                  <Link
                    href="/billio"
                    className="inline-flex items-center bg-white text-black px-8 py-4 font-bold hover:bg-gray-100 transition-colors duration-200"
                  >
                    EXPLORE BILLIO
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Agroconnect Card */}
            <div className="grid lg:grid-cols-12 gap-8 items-center relative">
              {/* Cool Number */}
              <div className="absolute -top-8 right-0 lg:right-8">
                <div className="text-8xl lg:text-9xl font-black text-white/10 font-antonio leading-none">02</div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-3 order-2 lg:order-1 relative z-10">
                <div className="text-center lg:text-right">
                  <div className="text-sm font-semibold text-green-400 mb-2">AGTECH STARTUP</div>
                  <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 font-antonio">AGROCONNECT</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Revolutionary agricultural marketplace that connects farmers directly to buyers, 
                    eliminating middlemen and creating fair pricing for everyone.
                  </p>
                  <Link
                    href="/agroconnect"
                    className="inline-flex items-center bg-white text-black px-8 py-4 font-bold hover:bg-gray-100 transition-colors duration-200"
                  >
                    EXPLORE AGROCONNECT
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-2 lg:col-start-11 order-1 lg:order-2 relative z-10">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white border-4 border-green-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-black font-black text-3xl">A</span>
                  </div>
                  <div className="bg-green-500 text-black px-4 py-2 font-bold text-sm inline-block">
                    LAUNCHING 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Interested in collaborating or learning more about these projects?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              LET'S DISCUSS
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header with FallingText */}
          <div className="text-center mb-20">
            <div className="inline-block bg-black text-white px-6 py-3 font-black text-sm mb-8">
              SERVICES & EXPERTISE
            </div>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-black mb-8 font-antonio leading-none">
              WHAT I
              <span className="block text-green-500">CREATE</span>
            </h2>
            
            {/* FallingText Interactive Element */}
            <div className="h-32 mb-12">
              <FallingText
                text="Brand Identity Web Development UI/UX Design Frontend Magic Digital Marketing Product Launch"
                highlightWords={["Brand", "Web", "UI/UX", "Frontend", "Digital", "Product"]}
                trigger="scroll"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.8}
                fontSize="1.5rem"
                mouseConstraintStiffness={0.9}
              />
            </div>
          </div>

          {/* Simple Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Identity */}
            <div className="group p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:bg-gray-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mr-4">
                  <FiLayers className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-black">01</div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">BRAND IDENTITY DESIGN</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating memorable brand identities, logos, and visual systems that communicate your brand's unique story.
              </p>
            </div>

            {/* Web Development */}
            <div className="group p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:bg-gray-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mr-4">
                  <FiCode className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-black">02</div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">WEB DEVELOPMENT</h3>
              <p className="text-gray-600 leading-relaxed">
                Building fast, responsive, and scalable websites using modern technologies like React and Next.js.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="group p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:bg-gray-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mr-4">
                  <FiSmartphone className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-black">03</div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">UI/UX DESIGN</h3>
              <p className="text-gray-600 leading-relaxed">
                Designing intuitive user interfaces and experiences that delight users and drive business results.
              </p>
            </div>

            {/* Frontend Development */}
            <div className="group p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:bg-gray-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mr-4">
                  <FiSettings className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-black">04</div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">FRONTEND DEVELOPMENT</h3>
              <p className="text-gray-600 leading-relaxed">
                Transforming designs into interactive, high-performance web applications with clean code.
              </p>
            </div>

            {/* Digital Marketing */}
            <div className="group p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:bg-gray-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mr-4">
                  <FiZap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-black">05</div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">DIGITAL MARKETING</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic digital marketing campaigns to increase brand visibility and convert visitors into customers.
              </p>
            </div>

            {/* Product Launch */}
            <div className="group p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:bg-gray-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mr-4">
                  <FiShield className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-black">06</div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">PRODUCT LAUNCH</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end product launch strategies, from market research to go-to-market execution.
              </p>
            </div>
          </div>

          {/* Interactive CTA with FallingText */}
          <div className="mt-20 text-center">
            <div className="bg-black p-12">
              <h3 className="text-4xl font-black text-white mb-8">READY TO CREATE SOMETHING AMAZING?</h3>
              <div className="h-24 mb-8">
                <FallingText
                  text="Let's collaborate and bring your vision to life with creativity and innovation"
                  highlightWords={["collaborate", "vision", "creativity", "innovation"]}
                  trigger="hover"
                  backgroundColor="transparent"
                  wireframes={false}
                  gravity={0.6}
                  fontSize="1.2rem"
                  mouseConstraintStiffness={0.8}
                />
              </div>
              <Link
                href="/contact"
                className="inline-block bg-green-500 text-black px-12 py-4 font-black text-lg hover:bg-white hover:text-black transition-colors duration-300"
              >
                LET'S TALK
              </Link>
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
