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
      featured: true,
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

  // -------------------- Work Experience --------------------
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "ATTIVO TECHNOLOGY SOLUTIONS Pvt. Ltd.",
      location: "Hyderabad",
      period: "Nov 2022 – Present (2.8 Years)",
      project: "Adactin Hotel Management Application",
      domain: "Travel & Hospitality",
      description:
        "Adactin Hotel App is a hotel booking platform. QA scope included functional and regression testing manually and automating key flows using Selenium WebDriver + Java.",
      responsibilities: [
        "Reviewed requirements and prepared test scenarios, test cases, and test data.",
        "Performed Functional, Integration, Regression, Smoke, and Sanity testing.",
        "Validated complete booking workflow: Login → Search → Select → Book → Confirm → Cancel.",
        "Conducted cross-browser and UI testing on Chrome, Firefox, and Edge.",
        "Logged and tracked defects using JIRA and worked closely with developers.",
        "Prepared RTM (Requirement Traceability Matrix) and test execution reports.",
        "Participated in Agile ceremonies (daily stand-ups, sprint planning, retrospectives).",
      ],
      automationContribution: [
        "Automated Login, Search Hotel, and Booking Confirmation modules using Selenium WebDriver + Java.",
        "Applied XPath, CSS Selectors, ID, and Name locators for element identification.",
        "Used TestNG for regression suite execution and reporting.",
        "Created data-driven tests for hotel search with multiple input values.",
        "Automated repetitive regression cases, reducing manual effort by ~20%.",
      ],
      achievements: [
        "Improved test coverage by documenting detailed test cases.",
        "Reduced defect leakage into UAT by enhancing regression coverage.",
        "Contributed automation scripts for critical flows, saving ~15–20% manual testing time.",
      ],
    },
    {
      role: "QA Engineer – HR Management System (HRMS)",
      company: "ATTIVO TECHNOLOGY SOLUTIONS Pvt. Ltd.",
      period: "Nov 2022 – Present",
      domain: "HR / Enterprise Solutions",
      description:
        "HRMS is a web-based application to manage Employee Information, Leave Requests, Payroll, and Recruitment. Included manual and automated testing of workflows.",
      responsibilities: [
        "Tested end-to-end workflows: Employee Onboarding → Leave Requests → Payroll.",
        "Designed and executed test scenarios, test cases, and prepared RTM to ensure requirement coverage.",
        "Performed Functional, Regression, and Integration testing across modules.",
        "Logged and tracked defects in JIRA, collaborated with developers, and retested after fixes.",
        "Conducted cross-browser testing (Chrome, Firefox, Edge) to ensure compatibility.",
      ],
      automationContribution: [
        "Automated Login and Leave Approval workflows using Selenium WebDriver + Java.",
        "Generated automation execution reports.",
      ],
      achievements: [
        "Reduced manual effort in regression testing by automating repetitive workflows (~15–20% time saving).",
      ],
    },
  ];

  // -------------------- Education --------------------
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
      {/* -------------------- Work Experience Section -------------------- */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional experience and key responsibilities from my career journey
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
                  {exp.company} {exp.location ? `- ${exp.location}` : ""}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                <h5 className="font-semibold text-gray-700 mb-2">Key Responsibilities:</h5>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                {exp.automationContribution && (
                  <>
                    <h5 className="font-semibold text-gray-700 mb-2">Automation Contribution:</h5>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                      {exp.automationContribution.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </>
                )}

                {exp.achievements && (
                  <>
                    <h5 className="font-semibold text-gray-700 mb-2">Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </>
                )}
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
              A selection of projects that showcase my testing expertise and quality assurance skills
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
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
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
