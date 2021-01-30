import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import filteredCountriesReducer from './filteredCountriesReducer';
import countryReducer from './countryReducer';
//combining reducers
const reducers = combineReducers({
  countries: countriesReducer,
  filteredCountries: filteredCountriesReducer,
  country: countryReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
