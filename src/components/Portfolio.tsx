import React from "react";
import { ExternalLink, Github, Briefcase, GraduationCap } from "lucide-react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Adactin Hotel Testing",
      description:
        "Manual and automated testing project for the Adactin Hotel Application. Includes test case design, execution, defect reporting, and automation using Selenium with Java and TestNG. Covered functional, regression, and end-to-end booking scenarios.",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Selenium", "Java", "TestNG"],
      githubUrl: "https://github.com/kusamrajesh/KusamRajesh-Portfolio",
      liveUrl: "https://adactinhotelapp.com",
      featured: true,
    },
  ];

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Attivo Technology Solutions",
      period: "June 2025 – Present",
      description:
        "Worked on manual and automated testing of web applications. Created test cases, executed regression suites, and automated workflows using Selenium, Java, and TestNG. Collaborated with developers to ensure bug-free releases.",
      technologies: ["Selenium", "Java", "TestNG"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) - Mechanical Engineering",
      college: "BITS Warangal",
      period: "2019 – 2022",
      description:
        "Built a strong foundation in engineering concepts, problem-solving, and logical thinking. Transitioned into software testing by applying analytical skills and attention to detail in technology-driven environments.",
      highlights: [
        "Focused on core mechanical and analytical problem-solving",
        "Learned structured project management and documentation",
        "Developed passion for software quality and automation",
      ],
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
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-blue-700 flex items-center space-x-2">
                    <Briefcase size={22} />
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

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Academic background and learning journey
            </p>
          </div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white border-l-8 border-orange-500 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-orange-600 flex items-center space-x-2">
                  <GraduationCap size={26} />
                  <span>{edu.degree}</span>
                </h3>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                {edu.college}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {edu.description}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {edu.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my testing expertise and
              quality assurance skills
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
