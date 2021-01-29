//importing react hooks & custom hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CountryInterface } from '../state/actions/fetchCountries';
//importing components
import CountriesItem from './CountriesItem';
//countries component
const CountriesList: React.FC = () => {
  //getting actions & state
  const { fetchCountries } = useActions();
  const { loading, error, data } = useTypedSelector(state => state.countries);
  //fetching countries on first component mount
  useEffect(() => {
    fetchCountries();
  }, []);
  //returned country items
  const returnedItems = data.map(
    ({ name, population, region, capital, flag }: CountryInterface) => {
      return (
        <CountriesItem
          key={name}
          name={name}
          population={population}
          region={region}
          capital={capital}
          flag={flag}
        />
      );
    }
  );
  return (
    <div className="countries__list">
      {loading && (
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      )}
      {!loading && !error && returnedItems}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default CountriesList;
