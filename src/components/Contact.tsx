import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: "kusamrajesh184@example.com",
      link: "mailto:kusamrajesh184@example.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-teal-600" />,
      title: "Phone",
      details: "+918499805644",
      link: "Mob : 8499805644"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-600" />,
      title: "Location",
      details: "Hyderabad",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/kusam-rajesh-094379191/" 
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/kusamrajesh/KusamRajesh-Portfolio" 
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;