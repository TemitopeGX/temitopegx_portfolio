'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiCode, FiLayers, FiGithub, FiMail, FiSmartphone, FiSettings, FiZap, FiShield } from 'react-icons/fi';
import Star from './components/Star';
import Image from 'next/image';
import FallingText from './components/FallingText';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Frontend');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = {
    Frontend: [
      { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/800px-React_Logo_SVG.svg.png' },
      { name: 'Next.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Next.js_wordmark.svg/1920px-Next.js_wordmark.svg.png' },
      { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png' },
      { name: 'Three.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/800px-Three.js_Icon.svg.png' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png' },
      { name: 'Framer Motion', icon: 'https://www.framer.com/images/framer-logo.png' },
    ],
    Backend: [
      { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png' },
      { name: 'Express', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
      { name: 'MongoDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1024px-MongoDB_Logo.svg.png' },
      { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PostgreSQL_logo.3colors.svg/1024px-PostgreSQL_logo.3colors.svg.png' },
      { name: 'Prisma', icon: 'https://prismalens.vercel.app/header/logo-dark.svg' },
      { name: 'GraphQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png' },
    ],
    Design: [
      { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1024px-Figma-logo.svg.png' },
      { name: 'Adobe XD', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1024px-Adobe_XD_CC_icon.svg.png' },
      { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png' },
      { name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1024px-Adobe_Illustrator_CC_icon.svg.png' },
      { name: 'Sketch', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1024px-Sketch_Logo.svg.png' },
      { name: 'Principle', icon: 'https://principleformac.com/images/icon.png' },
    ],
    Tools: [
      { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png' },
      { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png' },
      { name: 'Vercel', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/1024px-Vercel_logo_black.svg.png' },
      { name: 'Docker', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1024px-Docker_%28container_engine%29_logo.svg.png' },
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' },
      { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Notion_app_logo.png/1024px-Notion_app_logo.png' },
    ],
  };

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
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-black text-white px-6 py-3 font-black text-sm mb-8">
              SERVICES & EXPERTISE
            </div>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-black mb-8 font-antonio leading-none">
              WHAT I
              <span className="block text-green-500">CREATE</span>
            </h2>
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

          {/* FallingText Interactive Element */}
          <div className="mt-16 mb-8">
            <div className="h-32">
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
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block bg-black text-white px-4 py-2 sm:px-6 sm:py-3 font-black text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8">
              TECHNOLOGY & TOOLS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-4 sm:mb-6 lg:mb-8 font-antonio">
              TECH STACK
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Cutting-edge technologies and tools I use to build exceptional digital experiences
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-2">
            {['Frontend', 'Backend', 'Design', 'Tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 font-bold text-xs sm:text-sm transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-green-500 text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {techStack[activeTab]?.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 bg-gray-50 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:bg-white"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center">
            <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="object-contain group-hover:scale-110 transition-transform duration-300 w-full h-full"
                    unoptimized
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 group-hover:text-black transition-colors duration-300 text-center font-medium leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block bg-green-500 text-black px-4 py-2 sm:px-6 sm:py-3 font-black text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8">
              COLLABORATION
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8 font-antonio">
              HOW WE WORK
              <span className="block text-green-500">TOGETHER</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              A streamlined process designed to deliver exceptional results while keeping you involved every step of the way
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20">
            {/* Left Side - Process Steps */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="flex items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 flex items-center justify-center mr-4 sm:mr-5 lg:mr-6 flex-shrink-0">
                  <span className="text-black font-black text-lg sm:text-xl">01</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">DISCOVERY & STRATEGY</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    We start by understanding your business goals, target audience, and project requirements. 
                    This phase includes research, competitor analysis, and strategic planning.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 flex items-center justify-center mr-4 sm:mr-5 lg:mr-6 flex-shrink-0">
                  <span className="text-black font-black text-lg sm:text-xl">02</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">DESIGN & PROTOTYPE</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Creating wireframes, mockups, and interactive prototypes. You'll see exactly how 
                    your project will look and function before we start development.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 flex items-center justify-center mr-4 sm:mr-5 lg:mr-6 flex-shrink-0">
                  <span className="text-black font-black text-lg sm:text-xl">03</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">DEVELOPMENT & TESTING</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Building your project with clean, scalable code. Regular updates and testing 
                    ensure everything works perfectly across all devices and browsers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 flex items-center justify-center mr-4 sm:mr-5 lg:mr-6 flex-shrink-0">
                  <span className="text-black font-black text-lg sm:text-xl">04</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">LAUNCH & SUPPORT</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Deploying your project and providing ongoing support. I ensure smooth launch 
                    and offer maintenance to keep everything running optimally.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div className="bg-white p-6 sm:p-8 lg:p-12 border-l-4 border-green-500">
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-6 sm:mb-8">WHY THIS PROCESS WORKS</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <FiCode className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-black mb-1">TRANSPARENT COMMUNICATION</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Regular updates and clear timelines keep you informed throughout the project.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <FiLayers className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-black mb-1">COLLABORATIVE APPROACH</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Your input and feedback are valued at every stage of the development process.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <FiZap className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-black mb-1">QUALITY ASSURANCE</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Rigorous testing and optimization ensure your project exceeds expectations.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <FiShield className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-black mb-1">ONGOING SUPPORT</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Continued maintenance and support ensure long-term success of your project.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-black text-white px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base hover:bg-green-500 hover:text-black transition-colors duration-300 w-full sm:w-auto justify-center"
                >
                  START YOUR PROJECT
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
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
