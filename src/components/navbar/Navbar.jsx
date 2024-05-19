import React, { useState } from 'react';
import './Navbar.css'; // Importera stilmallen för Navbar
import Darkmode from '../darkmode/Darkmode.jsx'; // Justera sökvägen för Darkmode-komponenten
import '../darkmode/Darkmode.css'; // Justera sökvägen för stilmallen för Darkmode

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-left">
        <span className={darkMode ? 'text-color-light' : ''}>
          The Flag App
        </span>
      </div>
      <img src="/techover-logo-dark.png" alt="Techover Logo" className="navbar-logo" />
      <Darkmode /> {/* Använd Darkmode-komponenten här */}
    </nav>
  );
}

export default Navbar;
