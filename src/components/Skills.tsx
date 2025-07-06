
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 },
        { name: 'Sass/SCSS', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 65 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 60 },
        { name: 'Figma', level: 75 },
        { name: 'Photoshop', level: 70 },
        { name: 'Linux', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive set of technical skills acquired throughout my professional journey
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `skillBar 1.5s ease-out ${categoryIndex * 0.2 + skillIndex * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground text-lg">
                I believe in the importance of continuous learning in the fast-evolving world of technology. 
                Currently learning Next.js and React Native to expand my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skillBar {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
