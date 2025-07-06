
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Full Stack Developer',
      company: 'شركة التقنيات المتقدمة',
      location: 'الرياض، السعودية',
      duration: '2022 - الآن',
      description: [
        'قيادة فريق من 5 مطورين في تطوير تطبيقات ويب متقدمة',
        'تطوير وصيانة أكثر من 10 مشاريع للعملاء الكبار',
        'تحسين أداء التطبيقات بنسبة 40% باستخدام تقنيات التحسين الحديثة',
        'تدريب المطورين الجدد على أفضل الممارسات في البرمجة'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      current: true
    },
    {
      id: 2,
      position: 'Frontend Developer',
      company: 'وكالة الإبداع الرقمي',
      location: 'دبي، الإمارات',
      duration: '2021 - 2022',
      description: [
        'تطوير واجهات مستخدم تفاعلية لأكثر من 15 موقع ويب',
        'العمل مع فرق التصميم لتحويل التصاميم إلى كود فعال',
        'تحسين تجربة المستخدم وزيادة معدلات التحويل بنسبة 25%',
        'إنشاء مكتبة مكونات قابلة لإعادة الاستخدام'
      ],
      technologies: ['Vue.js', 'Sass', 'JavaScript', 'Figma', 'Git'],
      current: false
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'شركة الحلول الذكية',
      location: 'القاهرة، مصر',
      duration: '2020 - 2021',
      description: [
        'تطوير وصيانة مواقع الويب للشركات الصغيرة والمتوسطة',
        'العمل على تحسين أداء وسرعة المواقع الإلكترونية',
        'تعلم وتطبيق أحدث تقنيات تطوير الويب',
        'المشاركة في جميع مراحل دورة تطوير البرمجيات'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      current: false
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'بكالوريوس علوم الحاسوب',
      institution: 'جامعة الملك سعود',
      location: 'الرياض، السعودية',
      duration: '2016 - 2020',
      gpa: '3.8/4.0',
      description: 'تخصص في هندسة البرمجيات وقواعد البيانات'
    },
    {
      id: 2,
      degree: 'شهادة React Developer المتقدمة',
      institution: 'Meta (Facebook)',
      location: 'أونلاين',
      duration: '2021',
      gpa: null,
      description: 'برنامج تدريبي شامل في تطوير تطبيقات React'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              الخبرة <span className="text-gradient">المهنية</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              رحلتي المهنية في عالم تطوير البرمجيات والتقنيات الحديثة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                الخبرة العملية
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.id}
                    className="relative bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -right-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                    
                    {/* Current Job Indicator */}
                    {exp.current && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        حالياً
                      </div>
                    )}

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
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
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

            {/* Education */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                التعليم والشهادات
              </h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className="relative bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -right-3 top-8 w-6 h-6 bg-blue-500 rounded-full border-4 border-background"></div>
                    
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

                        {edu.gpa && (
                          <div className="mb-3">
                            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                              المعدل: {edu.gpa}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  شهادات إضافية
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div>• AWS Certified Solutions Architect</div>
                  <div>• Google Analytics Certified</div>
                  <div>• Scrum Master Certification</div>
                  <div>• MongoDB Developer Certification</div>
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
