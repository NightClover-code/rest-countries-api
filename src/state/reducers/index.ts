import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import filteredCountriesReducer from './filteredCountriesReducer';
//combining reducers
const reducers = combineReducers({
  countries: countriesReducer,
  filteredCountries: filteredCountriesReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
