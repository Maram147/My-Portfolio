
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'متجر إلكتروني متكامل',
      description: 'منصة تجارة إلكترونية مطورة بـ React و Node.js مع نظام دفع آمن وإدارة المخزون',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق ويب لإدارة المهام والمشاريع مع واجهة سهلة الاستخدام وإشعارات فورية',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Express', 'Socket.io'],
      category: 'frontend',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 3,
      title: 'نظام إدارة المحتوى',
      description: 'CMS مخصص للمدونات والمواقع الإخبارية مع محرر نصوص متقدم',
      image: '/placeholder.svg',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 4,
      title: 'موقع شركة تقنية',
      description: 'موقع تسويقي احترافي لشركة تقنية مع تصميم responsive وأداء متميز',
      image: '/placeholder.svg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      category: 'frontend',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 5,
      title: 'API للطقس',
      description: 'RESTful API لبيانات الطقس مع documentation شامل وأداء عالي',
      image: '/placeholder.svg',
      technologies: ['Node.js', 'Express', 'Redis', 'Swagger'],
      category: 'backend',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'لوحة تحكم إحصائيات',
      description: 'dashboard تفاعلي لعرض الإحصائيات والبيانات مع charts ديناميكية',
      image: '/placeholder.svg',
      technologies: ['React', 'D3.js', 'Chart.js'],
      category: 'frontend',
      demoLink: '#',
      githubLink: '#',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'جميع المشاريع' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              أحدث <span className="text-gradient">المشاريع</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مجموعة مختارة من أفضل المشاريع التي عملت عليها مؤخراً
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground hover:bg-accent border border-border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-blue-400/20 h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      مميز
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.demoLink}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors duration-200"
                    >
                      <Eye className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={project.demoLink}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors duration-200"
                    >
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
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      عرض المشروع
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      الكود
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                هل لديك مشروع في ذهنك؟
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                دعنا نتحدث حول كيف يمكنني مساعدتك في تحويل فكرتك إلى واقع رقمي
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105">
                تواصل معي الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
