//importing styles
import '../styles/css/details.css';
//random id"s
import { v4 as uuidv4 } from 'uuid';
//importing hooks & types
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
//importing components
import PreviousButton from './PreviousButton';
import DetailContent from '../containers/DetailContent';
//details component
const CountryDetails: React.FC = () => {
  //redux actions & state
  const { fetchCountry } = useActions();
  const { loading, error, data } = useTypedSelector(state => state.country);
  const currentCode = useTypedSelector(state => state.currentCode);
  const isLightMode = useTypedSelector(state => state.isLightMode);
  //fetching country
  useEffect(() => {
    fetchCountry(currentCode);
  }, [currentCode, fetchCountry]);
  //returning detail content item;
  const returnDetail = () => {
    //returned country
    if (data) {
      const {
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
      } = data;
      return (
        <DetailContent
          key={uuidv4()}
          name={name}
          population={population}
          region={region}
          capital={capital}
          flag={flag}
          nativeName={nativeName}
          subregion={subregion}
          topLevelDomain={topLevelDomain}
          currencies={currencies}
          languages={languages}
        />
      );
    }
  };
  return (
    <div
      className={`details__container ${isLightMode ? 'details__light' : ''}`}
    >
      {loading && (
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      )}
      <div className="wrapper">
        <PreviousButton />
      </div>
      <div className="container">
        {!loading && !error && returnDetail()}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default CountryDetails;
