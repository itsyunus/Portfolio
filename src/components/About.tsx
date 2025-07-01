import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'yunussm0@gmail.com', href: 'mailto:yunussm0@gmail.com' },
    { icon: Phone, label: 'Mobile', value: '+91 7032708115', href: 'tel:+917032708115' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/shaikyunus01', href: 'https://linkedin.com/in/shaikyunus01' },
    { icon: Github, label: 'GitHub', value: 'github.com/itsyunus', href: 'https://github.com/itsyunus' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl backdrop-blur-sm border border-gray-700/50">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-3xl"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Passionate about transforming data into meaningful insights and building innovative software solutions. 
                Currently pursuing B.Tech in Computer Science Engineering with a focus on data science and full-stack development. 
                I thrive on solving complex problems and creating user-centric applications that make a difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-4"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <contact.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{contact.label}</p>
                  <p className="text-white font-medium">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;