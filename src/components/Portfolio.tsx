import React from "react";
import { ExternalLink, Github, Briefcase, GraduationCap } from "lucide-react";

const Portfolio: React.FC = () => {
  // -------------------- Projects --------------------
  const projects = [
    {
      title: "Adactin Hotel Management Application",
      description:
        "Hotel booking platform enabling users to register, login, search, book, and cancel hotels online. QA scope included functional and regression testing manually and automating key flows using Selenium WebDriver + Java.",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Selenium", "Java", "TestNG"],
      githubUrl: "https://github.com/kusamrajesh/KusamRajesh-Portfolio",
      liveUrl: "https://adactinhotelapp.com",
      // featured: true, 
    },
    {
      title: "HR Management System (HRMS)",
      description:
        "Web-based HR application for managing Employee Information, Leave Requests, Payroll, and Recruitment. Included manual and automated testing of end-to-end workflows using Selenium + Java.",
      image:
        "https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Selenium", "Java"],
      githubUrl: "https://github.com/kusamrajesh/KusamRajesh-Portfolio",
      liveUrl: "#",
    },
  ];

  // -------------------- Work Experience (Single Role, Two Projects) --------------------
  const experience = {
    role: "Associate Software Engineer",
    company: "ATTIVO TECHNOLOGY SOLUTIONS Pvt. Ltd.",
    location: "Hyderabad",
    period: "Nov 2022 – Present (2.8 Years)",
    projects: [
      {
        name: "Adactin Hotel Management Application",
        domain: "Travel & Hospitality",
        description:
          "QA scope included validating functional and regression workflows manually and automating key flows using Selenium WebDriver + Java.",
        responsibilities: [
          "Reviewed requirements and prepared test scenarios, test cases, and test data.",
          "Performed Functional, Integration, Regression, Smoke, and Sanity testing.",
          "Validated complete booking workflow: Login → Search → Select → Book → Confirm → Cancel.",
          "Conducted cross-browser and UI testing on Chrome, Firefox, and Edge.",
          "Logged and tracked defects using JIRA and collaborated with developers.",
          "Automated Login, Search Hotel, and Booking Confirmation modules using Selenium WebDriver + Java.",
        ],
      },
      {
        name: "HR Management System (HRMS)",
        domain: "HR / Enterprise Solutions",
        description:
          "HRMS manages Employee Information, Leave Requests, Payroll, and Recruitment. QA scope included manual and automated testing.",
        responsibilities: [
          "Tested end-to-end workflows: Employee Onboarding → Leave Requests → Payroll.",
          "Designed and executed test scenarios, test cases, and prepared RTM.",
          "Performed Functional, Regression, and Integration testing across modules.",
          "Automated Login and Leave Approval workflows using Selenium WebDriver + Java.",
        ],
      },
    ],
  };

  return (
    <>
      {/* -------------------- Work Experience Section -------------------- */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional experience and key projects under my current role
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-blue-700 flex items-center space-x-2">
                <Briefcase size={22} />
                <span>{experience.role}</span>
              </h3>
              <span className="text-sm text-gray-500">{experience.period}</span>
            </div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">
              {experience.company} - {experience.location}
            </h4>

            {/* Projects under this role */}
            {experience.projects.map((proj, i) => (
              <div key={i} className="mb-6">
                <h5 className="text-xl font-semibold text-gray-700 mb-2">{proj.name}</h5>
                <p className="text-gray-600 mb-2">{proj.domain}</p>
                <p className="text-gray-600 mb-2">{proj.description}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {proj.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- Projects Section -------------------- */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Additional projects and demos showcasing my skills
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
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

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
        </div>
      </section>
    </>
  );
};

export default Portfolio;
