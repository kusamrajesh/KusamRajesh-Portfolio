import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Automation & Tools",
      skills: [
        { name: "Selenium WebDriver", color: "bg-blue-500" },
        { name: "TestNG (basic)", color: "bg-blue-600" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java (basic)", color: "bg-orange-500" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL (basic queries)", color: "bg-green-500" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", color: "bg-teal-500" },
        { name: "CSS", color: "bg-indigo-500" },
        { name: "JavaScript (basic)", color: "bg-yellow-500" },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", color: "bg-gray-500" },
        { name: "Linux (basic commands)", color: "bg-gray-700" },
      ],
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Agile Scrum", color: "bg-purple-500" },
        { name: "Waterfall", color: "bg-purple-700" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern software testing tools, frameworks, and methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
