import React from "react";
import { motion, Variants } from "framer-motion";

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

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "WordPress", level: 75 },
        { name: "Sass/SCSS", level: 80 },
        { name: "Bootstrap", level: 70 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Photoshop", level: 70 },
        { name: "Linux", level: 65 },
        { name: "Postman", level: 80  },
        
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive set of technical skills acquired throughout my
              professional journey
            </p>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                custom={categoryIndex}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      custom={skillIndex}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                            transition: {
                              delay: 0.2 + skillIndex * 0.1,
                              duration: 1.2,
                              ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
                            },
                          }}
                          className="bg-gradient-to-r from-primary to-primary h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground text-lg">
                I believe in the importance of continuous learning in the
                fast-evolving world of technology. Currently learning Next.js
                and React Native to expand my skill set.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
