'use client';

import { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure payments.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'CSS3'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Restaurant Website',
    description: 'Beautiful restaurant website with online reservation system, menu showcase, and responsive design optimized for mobile devices.',
    image: '/api/placeholder/600/400',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    category: 'Web Design',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Portfolio Dashboard',
    description: 'Interactive portfolio dashboard for showcasing projects with analytics, visitor tracking, and content management system.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Express.js', 'Chart.js', 'MongoDB', 'SCSS'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Mobile Banking UI',
    description: 'Modern mobile banking application UI/UX design with focus on security, usability, and seamless user experience.',
    image: '/api/placeholder/600/400',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    category: 'UI/UX Design',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 6,
    title: 'Social Media Platform',
    description: 'Full-stack social media platform with real-time messaging, post sharing, and advanced privacy controls.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'GraphQL', 'Apollo', 'Node.js', 'Redis'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

const categories = ['All', 'Web Development', 'Web Design', 'UI/UX Design'];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6">
              MY{' '}
              <span className="text-green-500">PORTFOLIO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A showcase of my recent projects and creative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-8 text-center">
            FEATURED PROJECTS
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <div
                key={project.id}
                className={`bg-white border border-gray-200 overflow-hidden hover:border-green-500 transition-colors duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-64 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 bg-gray-200 mx-auto mb-2"></div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 px-6 py-3 bg-green-500 text-white text-center font-medium hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 text-center font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <FiGithub className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-8 text-center">
            ALL PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white border border-gray-200 overflow-hidden hover:border-green-500 transition-colors duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-48 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-12 h-12 bg-gray-200 mx-auto mb-2"></div>
                      <p className="text-xs">Screenshot</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...` 
                      : project.description
                    }
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="flex-1 px-4 py-2 bg-green-500 text-white text-center text-sm font-medium hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
                    >
                      <FiExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-center text-sm font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <FiGithub className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create something amazing for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Start a Project
            </a>
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
