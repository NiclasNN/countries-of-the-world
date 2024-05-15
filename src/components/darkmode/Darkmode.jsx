import React, { useState, useEffect } from 'react';
import './Darkmode.css';

function Darkmode() {
  // State för att hålla reda på om Dark Mode är aktiverat
  const [darkMode, setDarkMode] = useState(false);

  // Funktion för att byta tillståndet för Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Effekt för att uppdatera sidans utseende när Dark Mode ändras
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button className="darkmode-button" onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default Darkmode;
