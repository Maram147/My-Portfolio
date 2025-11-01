import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { motion ,Variants } from 'framer-motion';
import freshcart from '../assets/images/Fresh-Cart.png';
import recipeapp from '../assets/images/Recipe-App.png';
import dwayee from '../assets/images/Dwayee.png';
import restaurant from '../assets/images/Restaurant-Platform.png'

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", 
    },
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Dwayee',
      description: 'Dwayee - دوائي is a smart, pharmacy-focused platform designed to revolutionize the way users search for and order medications.',
      image: dwayee,
      technologies: ['React', 'Tailwind', 'My SQL', 'Laravel'],
      category: 'Front-End',
      demoLink: 'https://dwayee-1.vercel.app/',
      githubLink: 'https://github.com/Maram147/Dwayee',
      featured: true
    },
    {
      id: 2,
      title: 'Fresh-Cart',
      description:'The Fresh Cart Ecommerce is a modern web application designed to simplify the process of browsing, purchasing, and managing products.',
      image: freshcart,
      technologies: ['React', 'Tailwind', 'My SQL', 'Laravel'],
      category: 'Front-End',
      demoLink: 'https://fresh-cart-five-murex.vercel.app/',
      githubLink: 'https://github.com/Maram147/Fresh-Cart',
      featured: false
    },
    {
      id: 3,
      title: 'Recipe-App',
      description: 'A React web app that helps users discover meals by category, origin, and ingredients',
      image: recipeapp,
      technologies: ['React', 'Tailwind','SASS', 'My SQL', 'Laravel'],
      category: 'Front-End',
      demoLink: 'https://recipe-app-three-jade.vercel.app/',
      githubLink: 'https://github.com/Maram147/Recipe-app',
      featured: true
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      description: 'A comprehensive system for managing restaurant operations, including order processing, inventory management, and customer interactions.',
      image: restaurant,
      technologies: ['React', 'Tailwind','Next', 'shadcn-ui'],
      category: 'Front-End',
      demoLink: 'https://restaurant-platform-final.vercel.app/',
      githubLink: 'https://github.com/Maram147/Restaurant-Platform',
      featured: true
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    // { id: 'fullstack', label: 'Full Stack' },
    // { id: 'Front-End', label: 'Front-End' },
    // { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of the best projects I've worked on recently.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-accent border border-border'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-blue-400/20 h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.demoLink} className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors duration-200">
                      <Eye className="h-5 w-5 text-white" />
                    </a>
                    <a href={project.githubLink} className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors duration-200">
                      <FaGithub className="h-5 w-5 text-white" />
                    </a>
                    <a href={project.demoLink} className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors duration-200">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <a href={project.demoLink} className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors duration-200">
                      <FaGithub className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={4}
          >
            <div className="bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Do you have a project in mind?
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Let's talk about how I can help you turn your idea into a digital reality.
              </p>
              <a href="#contact">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105">
                Contact me now
              </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
