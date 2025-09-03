import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Attention to Detail",
      description: "Thoroughly identifying bugs and edge cases to ensure flawless user experiences"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Quality Assurance",
      description: "Ensuring software meets functional, UI, and performance standards"
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Analytical Thinking",
      description: "Strong problem-solving skills to investigate defects and validate fixes"
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: "Passion Driven",
      description: "Continuous learning and staying updated with latest technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Turning Ideas Into Digital Reality
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate full stack developer with over 3 years of experience building 
              web applications that solve real-world problems. My journey started with curiosity 
              about how websites work, and has evolved into a deep love for creating seamless 
              digital experiences.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open source projects, or mentoring aspiring developers. I believe in writing 
              code that not only works but is also clean, maintainable, and scalable.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                3+ Years Experience
              </div>
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                15+ Projects Completed
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;