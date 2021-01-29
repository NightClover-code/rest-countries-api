//importing react hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//importing components
import CountriesItem from './CountriesItem';
//data interface
export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
}
//countries component
const CountriesList: React.FC = () => {
  //getting actions & state
  const { fetchCountries } = useActions();
  const { data } = useTypedSelector(state => state.countries);
  //fetching countries on first component mount
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);
  //returned country items
  const returnedItems = data.map(
    ({ name, population, region, capital, flag }: any) => {
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
  return <div className="countries__list">{returnedItems}</div>;
};

export default CountriesList;
