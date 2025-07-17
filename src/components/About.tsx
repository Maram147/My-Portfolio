import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Code, Palette, Database, Globe } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Passionate and Creative Developer
              </h3>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  My name is Maram Mahmoud, a fourth-year student at South Valley National University, Faculty of Computers and Artificial Intelligence. I participated in the ICPC competition for two consecutive years and served as a mentor in the university's ICPC community, where I taught problem solving and C++. I also completed an internship at NetArabia and finished the Route Frontend Diploma.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="200">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 100}
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
