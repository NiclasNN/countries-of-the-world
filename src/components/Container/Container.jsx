import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Container.css';

const regionMap = {
  Americas: 'America',
};

const Container = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the countries!", error);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    const newRegion = selectedRegion === 'All' ? '' : (selectedRegion === 'America' ? 'Americas' : selectedRegion);
    setRegion(newRegion);
    localStorage.setItem('selectedRegion', newRegion);
  };
  const filteredCountries = countries.filter(country => 
    (region === '' || country.region.toLowerCase() === region.toLowerCase()) &&
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="controls">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select onChange={handleRegionChange} className="region-select" defaultValue="Filter by Region">
        <option value="Filter by Region" hidden>Filter by Region</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option> {/* Displayed as "America" */}
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="countries-grid">
          {filteredCountries.map(country => (
            <Link key={country.cca3} to={`/country/${country.cca3}`} className="country-card">
              <img src={country.flags.svg} alt={`${country.name.common} flag`} />
              <h3>{country.name.common}</h3>
              <p><span className="label">Population:</span> {country.population.toLocaleString()}</p>
              <p><span className="label">Region:</span> {country.region}</p>
              <p><span className="label">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
