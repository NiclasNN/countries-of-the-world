import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="country-card">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
    </Link>
  );
};

export default CountryCard;
