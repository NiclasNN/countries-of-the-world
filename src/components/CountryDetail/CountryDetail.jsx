import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async (retryCount = 3) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setCountry(data[0]);

        if (data[0].borders && data[0].borders.length > 0) {
          const borderCodes = data[0].borders.join(',');
          const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes}`);
          if (!borderResponse.ok) {
            throw new Error(`Network response was not ok: ${borderResponse.statusText}`);
          }
          const borderData = await borderResponse.json();
          setBorderCountries(borderData.map(b => b.name.common));
        }
      } catch (error) {
        if (retryCount > 0) {
          setTimeout(() => fetchCountryDetails(retryCount - 1), 1000); // Retry after 1 second
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [code]);

  return (
    <div className="country-detail-container">
      <Link to="/" className="back-button">← Back</Link>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error loading country details. Please try again later.</div>}
      {country && (
        <div className="country-detail">
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="country-flag" />
          <div className="country-info">
            <h1>{country.name.common}</h1>
            <div className="country-info-grid">
              <div>
                <p><span className="label">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="label">Region:</span> {country.region}</p>
                <p><span className="label">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
                <p><span className="label">Native name:</span> {country.name.nativeName ? Object.values(country.name.nativeName).map(n => n.common).join(', ') : 'N/A'}</p>
              </div>
              <div>
                <p><span className="label">Top Level Domain:</span> {country.tld.join(', ')}</p>
                <p><span className="label">Currencies:</span> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
                <p><span className="label">Languages:</span> {Object.values(country.languages).join(', ')}</p>
              </div>
            </div>
            <div className="border-countries">
              <p><span className="label">Border Countries:</span></p>
              {borderCountries.length > 0 ? (
                borderCountries.map((borderCountry, index) => (
                  <span key={index} className="border-country">{borderCountry}</span>
                ))
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
