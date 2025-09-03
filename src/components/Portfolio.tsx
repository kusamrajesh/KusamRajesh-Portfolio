import React from "react";
import { ExternalLink, Github, Briefcase } from "lucide-react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Adactin Hotel Testing",
      description:
        "Manual and automated testing project for the Adactin Hotel Application. Includes test case design, execution, defect reporting, and automation using Selenium with Java and TestNG. Covered functional, regression, and end-to-end booking scenarios.",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Selenium", "Java", "TestNG"],
      githubUrl: "https://github.com/your-username/adactin-hotel-testing",
      liveUrl: "https://adactinhotelapp.com",
      featured: true,
    },
  ];

  const experiences = [
    {
      role: "Software Test Engineer",
      company: "XYZ Technologies",
      period: "Jan 2022 – Present",
      description:
        "Worked on manual and automated testing of web applications. Created test cases, executed regression suites, and automated workflows using Selenium, Java, and TestNG. Collaborated with developers to ensure bug-free releases.",
      technologies: ["Selenium", "Java", "TestNG", "Postman", "Jira"],
    },
    {
      role: "QA Intern",
      company: "ABC Solutions",
      period: "Jun 2021 – Dec 2021",
      description:
        "Assisted in testing multiple client projects, documenting defects, and preparing test reports. Learned agile testing practices and gained exposure to real-time project workflows.",
      technologies: ["Manual Testing", "Agile", "Excel", "Bugzilla"],
    },
  ];

  return (
    <>
      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional experience and key responsibilities from my career
              journey
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-blue-700 flex items-center space-x-2">
                    <Briefcase size={20} />
                    <span>{exp.role}</span>
                  </h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {exp.company}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my development skills and
              creativity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  project.featured ? "lg:col-span-2" : ""
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
    </>
  );
};

export default Portfolio;
