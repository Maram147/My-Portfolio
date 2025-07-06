
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred email service or backend
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'ahmed@example.com',
      link: 'mailto:ahmed@example.com'
    },
    {
      icon: Phone,
      title: 'رقم الهاتف',
      value: '+966 50 123 4567',
      link: 'tel:+966501234567'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'الرياض، السعودية',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      link: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      name: 'Email',
      link: 'mailto:ahmed@example.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              تواصل <span className="text-gradient">معي</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              هل لديك مشروع مثير أو فرصة عمل؟ أحب أن أسمع منك!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                دعنا نتحدث
              </h3>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                أنا دائماً متحمس للعمل على مشاريع جديدة ومثيرة. سواء كان لديك سؤال، 
                فكرة مشروع، أو تريد فقط أن تقول مرحباً، لا تتردد في التواصل معي.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">تابعني على</h4>
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

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  أرسل رسالة
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        الاسم *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        البريد الإلكتروني *
                      </label>
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
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      الموضوع *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="موضوع الرسالة"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                مستعد لبدء مشروعك القادم؟
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                دعنا نحول أفكارك إلى واقع رقمي مذهل
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:ahmed@example.com"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  راسلني الآن
                </a>
                <a
                  href="tel:+966501234567"
                  className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  اتصل بي
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
