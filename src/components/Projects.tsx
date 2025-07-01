import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Database, Monitor, Brain, Keyboard } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      icon: Monitor,
      title: 'LiveLife.org.in',
      description: 'NGO platform connecting volunteers with meaningful causes through a comprehensive web application.',
      tech: ['MongoDB', 'ElectronJS', 'Node.js', 'Express'],
      contributions: [
        'Designed and implemented full-stack architecture',
        'Integrated volunteer management system',
        'Built responsive UI with modern design patterns'
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Database,
      title: 'CRM Dashboard',
      description: 'Comprehensive customer relationship management dashboard with advanced analytics and reporting.',
      tech: ['Power BI', 'Excel', 'SQL', 'Python'],
      contributions: [
        'Created interactive data visualizations',
        'Implemented automated reporting systems',
        'Optimized database queries for performance'
      ],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Brain,
      title: 'Small LLM Model',
      description: 'Custom language model with evaluation metrics for text generation and analysis.',
      tech: ['Streamlit', 'Python', 'TensorFlow', 'NLTK'],
      contributions: [
        'Developed model architecture and training pipeline',
        'Implemented BLEU and perplexity evaluation metrics',
        'Built interactive web interface for testing'
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Keyboard,
      title: 'Auto Typer',
      description: 'Desktop automation tool with system tray integration and customizable hotkey support.',
      tech: ['Python', 'PyQt5', 'Threading', 'System APIs'],
      contributions: [
        'Built cross-platform desktop application',
        'Implemented hotkey system and tray integration',
        'Created user-friendly configuration interface'
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                />

                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${project.gradient} bg-opacity-20 rounded-2xl`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-300" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-300" />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Contributions</h4>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`} />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;