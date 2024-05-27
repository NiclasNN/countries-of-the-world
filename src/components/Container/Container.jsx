import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Container.css';

const Container = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = region === 'all' ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${region}`;
    axios.get(url)
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the countries!", error);
        setLoading(false);
      });
  }, [region]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
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
        <select onChange={handleRegionChange} value={region} className="region-select">
          <option value="all" disabled hidden>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
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
