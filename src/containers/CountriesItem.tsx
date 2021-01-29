interface Props {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}
const CountriesItem: React.FC<Props> = ({
  name,
  population,
  region,
  capital,
  flag,
}) => {
  return (
    <div className="countries__card">
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
    </div>
  );
};

export default CountriesItem;
