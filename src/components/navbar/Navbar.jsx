import React, { useState } from 'react';
import './Navbar.css'; // Importera stilmallen för Navbar
import Darkmode from '../darkmode/Darkmode.jsx'; // Justera sökvägen för Darkmode-komponenten
import '../darkmode/Darkmode.css'; // Justera sökvägen för stilmallen för Darkmode

function Navbar() {
  // State för att hålla reda på om Dark Mode är aktiverat
  const [darkMode, setDarkMode] = useState(false);

  // Funktion för att byta tillståndet för Dark Mode
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
      {/* Andra delar av navbaren, t.ex. navigationslänkar, kan läggas till här */}
      <Darkmode /> {/* Använd Darkmode-komponenten här */}
    </nav>
  );
}

export default Navbar;
