import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <motion.section 
        className="min-h-screen p-8 bg-dark-bg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <p>Project not found.</p>
      </motion.section>
    );
  }

  return (
    <motion.section 
      className="min-h-screen p-8 bg-dark-bg text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Link to="/projects" className="text-ocean-blue hover:underline">&larr; Back to Projects</Link>
      <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="mb-4">{project.details}</p>

          {project.link && (
            <div className="mt-6">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ocean-blue underline hover:opacity-80 text-lg"
              >
              View Project
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectDetail;
