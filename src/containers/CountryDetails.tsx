//importing styles
import '../styles/css/details.css';
//random id"s
import { v4 as uuidv4 } from 'uuid';
//importing hooks & types
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
//importing components
import PreviousButton from '../components/PreviousButton';
import DetailContent from '../containers/DetailContent';
import { DetailedCountryInterface } from '../state/actions/fetchCountry';
//details component
const CountryDetails: React.FC = () => {
  //getting actions & state
  const { fetchCountry } = useActions();
  const { loading, error, data } = useTypedSelector(state => state.country);
  //fetching countries on first component mount
  useEffect(() => {
    fetchCountry('Albania');
  }, []);
  //returned country
  const returnedItem = data.map(
    ({
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
    }: DetailedCountryInterface) => {
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
  );
  return (
    <div className="details__container">
      <div className="wrapper">
        <PreviousButton />
      </div>
      <div className="container">{returnedItem}</div>
    </div>
  );
};

export default CountryDetails;
