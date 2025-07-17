import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      id: 1,
      position: 'Web Development Intern (WordPress)',
      company: 'NetArabia',
      location: 'Qena, Egypt',
      duration: 'Sep 2024',
      description: [
        'Developed an e-commerce website using WordPress and Laragon.',
        'Improved user interface and experience design.',
        'Tested and enhanced website performance.',
        'Participated in the full software development cycle.'
      ],
      technologies: ['WordPress', 'HTML', 'CSS', 'PHP', 'MySQL'],
      current: false
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'South Valley National University',
      location: 'Qena, Egypt',
      duration: '2022 - Present',
      description: 'Senior year student at the Faculty of Computers and Artificial Intelligence – Computer Science Major'
    },
    {
      id: 2,
      degree: 'Frontend Developer Diploma',
      institution: 'Route Academy',
      location: 'Online',
      duration: 'Sep 2024 – Feb 2025',
      description: 'Comprehensive diploma focusing on React.js, JavaScript, and Tailwind CSS for modern web development'
    },
    {
      id: 3,
      degree: 'Software Engineering Fundamentals',
      institution: 'ITI – Information Technology Institute',
      location: 'Online',
      duration: '2024',
      description: 'Covered the basics of software development lifecycle, clean code, and modern tools'
    }
  ];

  const certifications = [
    'ICPC – ECPC Finalist (2023 – 2024)',
    'Mentor in ICPC Community at South Valley University',
    'HR Head at Google Developer Student Club – SVU',
    'Web Developer Intern – NetArabia',
    'Frontend Developer Diploma – Route Academy',
    'Software Engineering Certificate – ITI'
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through internships, development roles, and technical contributions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div data-aos="fade-up">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                Professional Experience
              </h3>

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up"
                  >
                    <div className="absolute -right-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {exp.position}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                Education & Certificates
              </h3>

              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up"
                  >
                    <div className="absolute -right-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20" data-aos="fade-up">
                <a href="https://drive.google.com/drive/folders/1DkMFyWInjCGLw_8lQDDYLzkm9Ch7oywC?usp=drive_link">
                  <h4 className="text-lg font-bold text-foreground mb-4 text-[#c8912b] flex items-center gap-2">
                    Certifications & Achievements <ExternalLink />
                  </h4>
                </a>
                <div className="space-y-2 text-muted-foreground">
                  {certifications.map((cert, index) => (
                    <div key={index}>• {cert}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
