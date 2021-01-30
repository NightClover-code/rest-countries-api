import React from 'react';
import BorderCountries from './BorderCountries';
//props
interface Props {
  name: string;
  population: string;
  region: string;
  flag: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
}
//detail content component
const DetailContent: React.FC<Props> = ({
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
              Sub Region: <span>{subregion}</span>
            </li>
            <li>
              Capital: <span>{capital}</span>
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
