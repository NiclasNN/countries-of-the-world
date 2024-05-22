import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [code]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error loading country details. Please try again later.</div>;
  }

  if (!country) {
    return <div className="error">No country found.</div>;
  }

  const nativeName = country.name.nativeName ? Object.values(country.name.nativeName).map(n => n.common).join(', ') : 'N/A';

  return (
    <div className="country-detail-container">
      <Link to="/" className="back-button">← Back</Link>
      <div className="country-detail">
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="country-flag" />
        <div className="country-info">
          <h1>{country.name.common}</h1>
          <div className="country-info-grid">
            <div>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
              <p><strong>Native name:</strong> {nativeName}</p>
            </div>
            <div>
              <p><strong>Top Level Domain:</strong> {country.tld.join(', ')}</p>
              <p><strong>Currencies:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
              <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
            </div>
          </div>
          <div className="border-countries">
            <p><strong>Border Countries:</strong></p>
            {country.borders ? (
              country.borders.map(border => (
                <span key={border} className="border-country">{border}</span>
              ))
            ) : (
              <p>No border countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
