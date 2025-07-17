import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-20 mt-20">
          {/* Left: Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Maram Mahmoud</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gold mb-6 font-medium min-h-[2.5rem]">
              <Typewriter
                words={['Front-End Developer', 'Software Engineer']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>

            <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Specialized in developing modern web applications using React, Node.js, and other cutting-edge technologies.
              I love creating innovative digital solutions that combine functionality with beautiful design.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a
                href="/public/CV  Maram Mahmoud.pdf"
                download
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
              <button
                onClick={scrollToAbout}
                className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              >
                Learn More About Me
              </button>
            </div>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/Maram147" className="p-3 rounded-full bg-secondary hover:bg-accent transition hover:scale-110">
                <FaGithub className="h-5 w-5 text-foreground" />
              </a>
              <a href="https://linkedin.com/devmaraam" className="p-3 rounded-full bg-secondary hover:bg-accent transition hover:scale-110">
                <FaLinkedin className="h-5 w-5 text-foreground" />
              </a>
              <a href="mailto:mahmoudmaram002@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-accent transition hover:scale-110">
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="/public/maram.jpeg"
              alt="Maram"
              className="rounded-full object-cover w-80 h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-lg shadow-[#c8912b] hover:rotate-2 transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
