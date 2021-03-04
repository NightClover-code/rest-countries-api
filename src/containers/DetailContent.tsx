import React from 'react';
import { DetailedCountryInterface } from '../state';
import BorderCountries from './BorderCountries';
//detail content component
const DetailContent: React.FC<DetailedCountryInterface> = ({
  name,
  population,
  region,
  nativeName,
  flag,
  capital,
  subregion,
  topLevelDomain,
  currencies,
  languages,
}) => {
  return (
    <div className="detail__content">
      <div className="flag__container">
        <div className="flag">
          <img src={flag} alt="flag" />
        </div>
      </div>
      <div className="details__text__content">
        <h1>{name}</h1>
        <div className="detail__lists">
          <ul className="first__list">
            <li>
              Native Name: <span>{nativeName}</span>
            </li>
            <li>
              Population: <span>{population}</span>
            </li>
            <li>
              Region: <span>{region}</span>
            </li>
            <li>
              Sub Region: <span>{subregion !== '' ? subregion : 'none'}</span>
            </li>
            <li>
              Capital: <span>{capital !== '' ? capital : 'none'}</span>
            </li>
          </ul>
          <ul className="second__list">
            <li>
              Top Level Domain: <span>{topLevelDomain}</span>
            </li>
            <li>
              Currencies: <span>{currencies}</span>
            </li>
            <li>
              Languages: <span>{languages}</span>
            </li>
          </ul>
        </div>
        <BorderCountries />
      </div>
    </div>
  );
};

export default DetailContent;
