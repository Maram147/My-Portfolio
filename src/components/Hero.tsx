
import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-6xl font-bold text-gray-600">
                A
              </div>
            </div>
          </div>

          {/* Main content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            مرحباً، أنا{' '}
            <span className="text-gradient">أحمد محمد</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
            مطور Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            متخصص في تطوير تطبيقات الويب الحديثة باستخدام React، Node.js وتقنيات أخرى. 
            أحب إنشاء حلول رقمية مبتكرة تجمع بين الوظائف والتصميم الجميل.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <Download className="h-5 w-5" />
              تحميل السيرة الذاتية
            </button>
            
            <button 
              onClick={scrollToAbout}
              className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              تعرف علي أكثر
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-200 hover:scale-110"
            >
              <Github className="h-6 w-6 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-200 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-foreground" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
