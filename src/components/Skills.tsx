import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Software Tester",
      skills: [
        { name: "Manual", color: "bg-blue-500" },
        { name: "Automation", color: "bg-blue-600" },
        { name: "Selenium", color: "bg-yellow-500" },
        { name: "Core Java", color: "bg-orange-500" },
        { name: "HTML", color: "bg-teal-500" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", color: "bg-green-600" },
        { name: "Python", color: "bg-blue-500" },
        { name: "PostgreSQL", color: "bg-blue-700" },
        { name: "MongoDB", color: "bg-green-500" },
        { name: "Express.js", color: "bg-gray-700" },
        { name: "GraphQL", color: "bg-pink-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", color: "bg-orange-600" },
        { name: "Docker", color: "bg-blue-600" },
        { name: "AWS", color: "bg-orange-500" },
        { name: "Figma", color: "bg-purple-500" },
        { name: "Jest", color: "bg-red-600" },
        { name: "Webpack", color: "bg-blue-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-all duration-200 hover:shadow-md">
                    <div className={`w-3 h-3 rounded-full ${skill.color} transition-transform duration-200 group-hover:scale-125`}></div>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;