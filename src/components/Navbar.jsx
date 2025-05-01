// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-16 flex items-center justify-between px-8 bg-dark-bg border-b border-gray-800 z-50">
      {/* Logo/Brand Name */}
      <div className="text-xl font-bold text-white">
        Dmitry Bozhko
      </div>
      {/* Navigation Links */}
      <div className="space-x-4 text-sm">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            (isActive ? 'text-ocean-blue' : 'text-gray-300 hover:text-ocean-blue') + ' transition-colors'
          }
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            (isActive ? 'text-ocean-blue' : 'text-gray-300 hover:text-ocean-blue') + ' transition-colors'
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            (isActive ? 'text-ocean-blue' : 'text-gray-300 hover:text-ocean-blue') + ' transition-colors'
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => 
            (isActive ? 'text-ocean-blue' : 'text-gray-300 hover:text-ocean-blue') + ' transition-colors'
          }
        >
          Skills
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            (isActive ? 'text-ocean-blue' : 'text-gray-300 hover:text-ocean-blue') + ' transition-colors'
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
