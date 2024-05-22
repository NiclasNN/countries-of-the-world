import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import CountryDetail from './components/CountryDetail/CountryDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/country/:code" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;