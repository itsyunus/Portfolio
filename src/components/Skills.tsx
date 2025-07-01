import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'C', 'HTML', 'CSS', 'Java'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Tools & Technologies',
      skills: ['MySQL', 'Tableau', 'Google Colab', 'Excel', 'Hadoop', 'Spark SQL'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Teamwork', 'Adaptability', 'Communication', 'Leadership', 'Critical Thinking'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                />
                
                <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-2xl mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="relative group/skill"
                    >
                      <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 text-center group-hover/skill:bg-gray-700/50">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-10 rounded-xl transition-opacity duration-300`}
                        />
                        <span className="text-sm font-medium text-gray-300 relative z-10">{skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;