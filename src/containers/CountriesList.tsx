//importing react hooks & custom hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CountryInterface } from '../state';
//random id's
import { v4 as uuidv4 } from 'uuid';
//importing components
import CountriesItem from './CountriesItem';
//countries component
const CountriesList: React.FC = () => {
  //redux actions & state
  const { fetchCountries } = useActions();
  const {
    filteredCountries: { loading, error, data },
    isLightMode,
  } = useTypedSelector(state => state);
  //fetching countries on first component mount
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);
  //returned country items
  const returnedItems = data.map(
    ({ name, population, region, flag, capital, code }: CountryInterface) => {
      return (
        <CountriesItem
          key={uuidv4()}
          name={name}
          population={population}
          region={region}
          capital={capital}
          flag={flag}
          code={code}
        />
      );
    }
  );
  return (
    <div className="countries__list">
      {loading && (
        <div className={`ui active ${isLightMode ? 'inverted' : ''} dimmer`}>
          <div className="ui loader"></div>
        </div>
      )}
      {!loading && !error && returnedItems}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CountriesList;
