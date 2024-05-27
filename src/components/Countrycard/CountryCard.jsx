import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="country-card">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p><span>Population:</span> {country.population.toLocaleString()}</p>
      <p><span>Region:</span> {country.region}</p>
      <p><span>Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
    </Link>
  );
};

export default CountryCard;
