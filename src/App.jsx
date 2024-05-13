import React, { useState } from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* Annat innehåll här */}
    </>
  );
}

export default App;