import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import filteredCountriesReducer from './filteredCountriesReducer';
import countryReducer from './countryReducer';
import currentCodeReducer from './currentCodeReducer';
import changeModeReducer from './changeModeReducer';
//combining reducers
const reducers = combineReducers({
  countries: countriesReducer,
  filteredCountries: filteredCountriesReducer,
  country: countryReducer,
  currentCode: currentCodeReducer,
  isLightMode: changeModeReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
