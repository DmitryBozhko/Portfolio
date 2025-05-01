import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const technicalSkills = [
    { name: 'JavaScript', image: '/images/javascript.png' },
    { name: 'React', image: '/images/react.png' },
    { name: 'Node.js', image: '/images/node.png' },
    { name: 'HTML5', image: '/images/html5.png' },
    { name: 'CSS3', image: '/images/css3.png' },
    { name: 'C++', image: '/images/C++.png' },
    { name: 'AWS', image: '/images/AWS.png' },
    { name: 'Python', image: '/images/python.png' },
  ];

  const nonTechnicalSkills = [
    { name: 'Teamwork', image: '/images/teamwork.png' },
    { name: 'Problem Solving', image: '/images/problem-solving.png' },
    { name: 'Communication', image: '/images/communication.png' },
    { name: 'Time Management', image: '/images/time-management.png' },
    { name: 'Adaptability', image: '/images/adaptability.png' },
  ];

  return (
    <motion.section 
      className="min-h-screen p-8 bg-dark-bg text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>

      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {technicalSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="flex flex-col items-center w-[100px]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <img src={skill.image} alt={skill.name} className="h-12 mb-2" />
              <span className="text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white mb-6">Non-Technical Skills</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {nonTechnicalSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="flex flex-col items-center w-[100px]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <img src={skill.image} alt={skill.name} className="h-12 mb-2" />
              <span className="text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
