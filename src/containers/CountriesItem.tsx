import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CountryInterface } from '../state';
//countries item component
const CountriesItem: React.FC<CountryInterface> = ({
  name,
  population,
  region,
  capital,
  flag,
  code,
}) => {
  //getting state & actions
  const { setCurrentCode } = useActions();
  const isLightMode = useTypedSelector(state => state.isLightMode);
  return (
    <Link
      to={`/${code}`}
      className={`countries__card ${
        isLightMode ? 'countries__card__light' : ''
      }`}
      onClick={() => setCurrentCode(code)}
    >
      <div className="countries__card__container">
        <div className="flag">
          <img src={flag} alt="country-flag" />
        </div>
        <div className="text__content">
          <h2 className="name">{name}</h2>
          <ul className="country__details__list">
            <li>
              Population: <span className="detail">{population}</span>
            </li>
            <li>
              Region: <span className="detail">{region}</span>
            </li>
            <li>
              Capital: <span className="detail">{capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountriesItem;
