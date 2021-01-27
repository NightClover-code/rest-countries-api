const CountriesItem = () => {
  return (
    <div className="countries__card">
      <div className="countries__card__container">
        <div className="flag">
          <img src="./images/flag.jpg" alt="country-flag" />
        </div>
        <div className="text__content">
          <h2 className="name">United States</h2>
          <ul className="country__details__list">
            <li>
              Population:{' '}
              <span className="detail">81,555,111</span>
            </li>
            <li>
              Region:{' '}
              <span className="detail">United States</span>
            </li>
            <li>
              Capital:{' '}
              <span className="detail">Washington</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountriesItem;
