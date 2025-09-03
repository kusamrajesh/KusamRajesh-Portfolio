import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://example-ecommerce.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/example/taskapp",
      liveUrl: "https://example-tasks.com",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "D3.js", "Express", "Weather API"],
      githubUrl: "https://github.com/example/weather",
      liveUrl: "https://example-weather.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media managers with data visualization, automated reporting, and performance insights.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "Django", "Chart.js"],
      githubUrl: "https://github.com/example/analytics",
      liveUrl: "https://example-analytics.com",
      featured: true
    },
    {
      title: "Recipe Sharing Platform",
      description: "A community-driven platform for sharing and discovering recipes with advanced search, ratings, and meal planning features.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
      githubUrl: "https://github.com/example/recipes",
      liveUrl: "https://example-recipes.com",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course creation tools, progress tracking, interactive quizzes, and video streaming capabilities.",
      image: "https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      githubUrl: "https://github.com/example/lms",
      liveUrl: "https://example-learning.com",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my development skills and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;