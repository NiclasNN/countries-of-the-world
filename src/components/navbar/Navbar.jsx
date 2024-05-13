import React from 'react';
import './Navbar.css'; // Importera stilmallen för Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/techover-logo-dark.png" alt="Techover Logo" className="navbar-logo" />
      {/* Andra delar av navbaren, t.ex. navigationslänkar, kan läggas till här */}
    </nav>
  );
}

export default Navbar;
