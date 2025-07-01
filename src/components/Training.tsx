import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Training = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: 'DSA using C++',
      provider: 'Board Infinity',
      description: 'Comprehensive data structures and algorithms course covering advanced problem-solving techniques.',
      skills: ['Algorithm Design', 'Data Structures', 'Problem Solving', 'C++ Programming'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Networking Fundamentals',
      provider: 'Coursera',
      description: 'In-depth networking concepts including protocols, network architecture, and security.',
      skills: ['Network Protocols', 'TCP/IP', 'Network Security', 'System Administration'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Data Scientist',
      provider: 'LinkedIn Learning',
      description: 'Professional data science certification covering machine learning and statistical analysis.',
      skills: ['Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Python'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mastering Data Science',
      provider: 'Udemy',
      description: 'Advanced data science course with hands-on projects and real-world applications.',
      skills: ['Advanced Analytics', 'Deep Learning', 'Big Data', 'Model Deployment'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

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
            Training & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Certification cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const isActive = index === currentIndex || index === (currentIndex + 1) % certifications.length;
              
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    inView
                      ? {
                          opacity: isActive ? 1 : 0.4,
                          scale: isActive ? 1 : 0.95,
                          y: isActive ? 0 : 20,
                        }
                      : {}
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group ${isActive ? 'z-10' : 'z-0'}`}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                    />

                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${cert.gradient} bg-opacity-20 rounded-2xl`}>
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-300" />
                      </motion.button>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-white">{cert.title}</h3>
                    <p className="text-blue-400 font-medium mb-4">{cert.provider}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Skills Acquired</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex || index === (currentIndex + 1) % certifications.length
                    ? 'bg-blue-500'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;