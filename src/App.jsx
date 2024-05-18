import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Container from './components/Container/Container.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Container>
        {/* Här kan du lägga till land-komponenter eller annan innehåll */}
        <div className="country-item">Land 1</div>
        <div className="country-item">Land 2</div>
        <div className="country-item">Land 3</div>
        {/* Lägg till fler land-komponenter här */}
      </Container>
    </>
  );
}

export default App;
