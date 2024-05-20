import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Importera stilmallen för Navbar
import Darkmode from '../darkmode/Darkmode.jsx'; // Justera sökvägen för Darkmode-komponenten
import '../darkmode/Darkmode.css'; // Justera sökvägen för stilmallen för Darkmode

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <span className={`navbar-title ${darkMode ? 'text-color-light' : ''}`}>
            The Flag App
          </span>
        </div>
        <div className="navbar-center">
          <img src="/techover-logo-dark.png" alt="Techover Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <Darkmode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
