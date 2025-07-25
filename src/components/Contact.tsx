import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mahmoudmaram002@gmail.com',
      link: 'mailto:mahmoudmaram002@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+201021579696',
      link: 'tel:+201021579696'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Qena, Egypt',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      link: 'https://github.com/Maram147',
      color: 'hover:text-gray-600'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/devmaraam',
      color: 'hover:text-blue-600'
    },
    // {
    //   icon: FaFacebook,
    //   name: 'Facebook',
    //   link: 'https://www.facebook.com/share/16Yac2bpx9/',
    //   color: 'hover:text-blue-600'
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or a job opportunity? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-foreground mb-8">Let's Talk</h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-200">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card rounded-full border border-border hover:shadow-lg transition-all duration-200 hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Message Subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center" data-aos="zoom-in">
            <div className="bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to start your next project?</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Let's turn your ideas into a stunning digital experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:mahmoudmaram002@gmail.com"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Contact Me
                </a>
                <a
                  href="tel:+201021579696"
                  className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
