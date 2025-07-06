
import React from 'react';
import { Code, Palette, Database, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'تطوير Frontend',
      description: 'خبرة في React، Vue.js، و TypeScript'
    },
    {
      icon: Database,
      title: 'تطوير Backend',
      description: 'Node.js، Express.js، و قواعد البيانات'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام'
    },
    {
      icon: Globe,
      title: 'تطوير شامل',
      description: 'حلول متكاملة من الفكرة إلى التنفيذ'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              نبذة <span className="text-gradient">عني</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                مطور متحمس ومبدع
              </h3>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  أنا مطور Full Stack بخبرة 3+ سنوات في تطوير تطبيقات الويب الحديثة. 
                  أتميز بالشغف للتعلم المستمر ومواكبة أحدث التقنيات في عالم البرمجة.
                </p>
                
                <p>
                  أؤمن بأن التقنية يجب أن تخدم الإنسان، لذلك أركز على إنشاء حلول عملية 
                  تحل مشاكل حقيقية وتوفر تجربة مستخدم استثنائية.
                </p>
                
                <p>
                  عملت على أكثر من 20 مشروع مختلف، من المواقع الشخصية إلى التطبيقات 
                  المعقدة للشركات الكبيرة، مما أكسبني خبرة واسعة في مختلف جوانب التطوير.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">مشروع مكتمل</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">سنوات خبرة</div>
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
