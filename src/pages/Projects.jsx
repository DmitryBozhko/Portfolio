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
          <motion.div 
            key={proj.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <img src={proj.image} alt={proj.title} className="h-40 object-cover w-full" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 flex-grow">{proj.description}</p>
              <Link 
                to={`/projects/${proj.id}`} 
                className="mt-4 text-ocean-blue hover:underline self-start"
              >
                View Details &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
