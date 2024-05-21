import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <h3>{country.name.common}</h3>
      <Link to={`/country/${country.cca3}`}>Learn More</Link>
    </div>
  );
};

export default CountryCard;
