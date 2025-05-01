// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  // Form state placeholders (not functional)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: handle form submission (e.g., send to API or service)
    console.log('Form submitted:', formData);
    // Reset form or provide feedback as needed
  };

  return (
    <motion.section 
      className="min-h-screen p-8 bg-dark-bg text-gray-300 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm" htmlFor="name">Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              required 
              className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-ocean-blue"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-ocean-blue"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-ocean-blue"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full bg-ocean-blue text-dark-bg font-semibold px-4 py-2 rounded hover:opacity-90">
            Send Message
          </button>
        </form>
        {/* Social Links */}
        <div className="mt-8 text-center">
          <p>Or find me on:</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Update the href with your actual profiles and ensure icons in /public/images */}
            <a href="https://github.com/DmitryBozhko" target="_blank" rel="noopener noreferrer">
              <img src="/images/github.png" alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/dmitry-bozhko-78b79731b/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
