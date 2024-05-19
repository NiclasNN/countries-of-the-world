import React, { useState } from 'react';
import './Darkmode.css';
import { FaMoon } from 'react-icons/fa'; // Lägg till react-icons för ikoner

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Lägg till logik här för att aktivera dark mode i hela appen senare
  };

  return (
    <div className="darkmode-container">
      <button onClick={toggleDarkMode} className={`darkmode-button ${darkMode ? 'dark' : ''}`}>
        <FaMoon className="darkmode-icon" />
        <span>Dark Mode</span>
      </button>
    </div>
  );
};

export default Darkmode;
