import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

function Projects() {
  return (
    <motion.section 
      className="min-h-screen p-8 bg-dark-bg text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <Link 
            to={`/projects/${proj.id}`} 
            key={proj.id}
            className="group flex flex-col h-full"
          >
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col min-h-[310px] max-h-[310px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.3, delay: index * 0.1, ease: 'easeOut' },
                y: { duration: 0.3, delay: index * 0.1, ease: 'easeOut' },
                scale: { duration: 0.2, ease: 'easeOut' }
              }}
            >
            <img src={proj.image} alt={proj.title} className="h-40 object-cover w-full" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 flex-grow">{proj.description}</p>
            </div>
            </motion.div>
            </Link>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
