import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/shaikyunus01',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      href: 'https://github.com/itsyunus',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: Mail,
      href: 'mailto:yunussm0@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  return (
    <footer ref={ref} className="py-16 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Shaik Mohammad Yunus
            </h3>
            <p className="text-gray-400 text-lg">
              Aspiring Data Scientist | Software Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 text-gray-400 ${link.color}`}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-500"
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f97316', '#ef4444'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <span>by Shaik Mohammad Yunus</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-gray-600 text-sm mt-4"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;