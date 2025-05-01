import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <motion.img 
        src="/images/profile.jpg" 
        alt="Dmitry Bozhko" 
        className="w-40 md:w-48 rounded-2xl shadow-lg object-cover mb-6 md:mb-0 md:mr-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="mb-2">
          I'm Dmitry Bozhko, a software engineer with a proven track record at Cosa Nostra Design And Renovations,
          where I specialize in system design and deployment. I'm proficient in JavaScript, React, Node.js, Python, C++, and AWS, 
          and have a strong interest in solving complex technical problems, building secure systems, and optimizing performance.
        </p>
        <p className="mb-2">
          I currently study Computer Science at California State University, Fullerton, and am expected to graduate in June 2026.
          During my time there, I’ve built a strong foundation in software development and systems engineering, and enjoy both individual and team-based projects.
        </p>
        <p className="mb-2">
          In my recent professional experience as an IT Specialist, I’ve handled system monitoring, hardware/software configuration, 
          and network troubleshooting to ensure reliability and security across the organization.
        </p>
        <p className="mb-2">
          Beyond coding, I'm passionate about road trips, video games, AI, and animation. I love exploring new technologies and am always working on improving my skills.
        </p>
        <p className="mt-4">
           <a 
            href="/Dmitry_Bozhko_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-ocean-blue underline hover:opacity-80"
          >
            Download My Resume (PDF)
          </a>
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
