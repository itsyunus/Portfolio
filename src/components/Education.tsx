import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const educationData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Lovely Professional University (LPU)',
      period: '2021 - 2025',
      grade: 'CGPA: 7.04',
      description: 'Focused on software development, data structures, algorithms, and data science. Active participant in coding competitions and technical projects.',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      degree: 'Intermediate (XII)',
      institution: 'Board of Intermediate Education',
      period: '2019 - 2021',
      grade: '73%',
      description: 'Specialized in Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving foundation.',
      icon: Award,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      degree: 'Matriculation (X)',
      institution: 'Board of Secondary Education',
      period: '2018 - 2019',
      grade: '80.2%',
      description: 'Comprehensive secondary education with emphasis on mathematics and sciences. Achieved distinction in academic performance.',
      icon: Calendar,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Education Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className={`relative z-10 p-4 bg-gradient-to-br ${edu.gradient} rounded-2xl shadow-2xl`}>
                  <edu.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 group">
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                    />

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{edu.degree}</h3>
                      <div className="flex flex-col md:items-end">
                        <span className="text-blue-400 font-medium">{edu.period}</span>
                        <span className={`text-lg font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    <p className="text-purple-400 font-medium mb-4">{edu.institution}</p>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;