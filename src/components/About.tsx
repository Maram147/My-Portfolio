
import React from 'react';
import { Code, Palette, Database, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Expertise in React, Vue.js, and TypeScript'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express.js, and databases'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating attractive and user-friendly interfaces'
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description: 'Complete solutions from concept to implementation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Passionate and Creative Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a Full Stack Developer with 3+ years of experience in developing modern web applications. 
                  I'm passionate about continuous learning and staying up-to-date with the latest technologies in the programming world.
                </p>
                
                <p>
                  I believe that technology should serve humanity, so I focus on creating practical solutions 
                  that solve real problems and provide exceptional user experiences.
                </p>
                
                <p>
                  I've worked on more than 20 different projects, from personal websites to complex applications 
                  for large companies, giving me extensive experience in various aspects of development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Completed Projects</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
