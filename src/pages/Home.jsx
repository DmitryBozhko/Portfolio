import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Dmitry Bozhko
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Computer Science Student at CSUF
      </p>
      <motion.a 
        href="/projects" 
        className="inline-block bg-ocean-blue text-dark-bg font-semibold px-6 py-3 rounded shadow hover:opacity-90 mb-10"
        whileHover={{ scale: 1.05 }}
      >
        View Projects
      </motion.a>

      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full gap-6">
        <motion.img 
          src="/images/profile.jpg" 
          alt="Dmitry Bozhko" 
          className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        />
        <div className="text-gray-300 text-left">
          <h2 className="text-2xl font-semibold mb-2 text-white">About Me</h2>
          <p>
            I'm a passionate computer science student at California State University, Fullerton, 
            with interests in software development, cybersecurity, and creative coding. 
            I enjoy building useful tools, experimenting with UI/UX, and learning how things work under the hood.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
