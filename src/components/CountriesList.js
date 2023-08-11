import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className=".col-md-4">
          <ul className="list-group">
            {countries.map((country) => (
              <li key={country.alpha3Code} className="list-group-item">

                <Link to={`/${country.alpha3Code}`}>{country.name.common}
                <img style={{ width: '40px', height: '30px' }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;