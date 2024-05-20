import React from 'react';
import './Darkmode.css'; // Importera stilmallen för Darkmode

const Darkmode = ({ toggleDarkMode, darkMode }) => {
  return (
    <button className="darkmode-button" onClick={toggleDarkMode}>
      {darkMode ? (
        <>
          <i className="fas fa-sun"></i> Light Mode
        </>
      ) : (
        <>
          <i className="fas fa-moon"></i> Dark Mode
        </>
      )}
    </button>
  );
};

export default Darkmode;
