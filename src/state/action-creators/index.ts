//importing types & api request file
import { Dispatch } from 'redux';
import countriesAPI from '../../api/countries';
import { CountriesAction } from '../actions/fetchCountries';
import { ActionType } from '../action-types';
import { RootState } from '../reducers';
import { CountryInterface } from '../actions/fetchCountries';
//format population number
const numbersWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
//action creators
export const fetchCountries = () => async (
  dispatch: Dispatch<CountriesAction>
) => {
  try {
    //loading
    dispatch({
      type: ActionType.FETCH_COUNTRIES,
    });
    dispatch({
      type: ActionType.FILTER_COUNTRIES,
    });
    //getting countries data
    const response = await countriesAPI.get('/all');
    //saving data
    const countries: CountryInterface[] = response.data.map((country: any) => {
      return {
        name: country.name,
        population: numbersWithCommas(country.population),
        region: country.region,
        capital: country.capital,
        flag: country.flag,
      };
    });
    //dispatching results
    dispatch({
      type: ActionType.FETCH_COUNTRIES_SUCCESS,
      payload: countries,
    });
    dispatch({
      type: ActionType.FILTER_COUNTRIES_SUCCESS,
      payload: countries,
    });
  } catch (err) {
    //dispatching errors
    dispatch({
      type: ActionType.FETCH_COUNTRIES_ERROR,
      payload: err.message,
    });
    dispatch({
      type: ActionType.FILTER_COUNTRIES_ERROR,
      payload: err.message,
    });
  }
};
//search countries
export const searchCountries = (term: string) => async (
  dispatch: Dispatch<CountriesAction>
) => {
  try {
    //loading
    dispatch({
      type: ActionType.SEARCH_COUNTRIES,
    });
    dispatch({
      type: ActionType.FILTER_COUNTRIES,
    });
    //getting countries data
    const response = await countriesAPI.get(`/name/${term}`);
    //saving data
    const countries: CountryInterface[] = response.data.map((country: any) => {
      return {
        name: country.name,
        population: numbersWithCommas(country.population),
        region: country.region,
        capital: country.capital,
        flag: country.flag,
      };
    });
    //dispatching results
    dispatch({
      type: ActionType.SEARCH_COUNTRIES_SUCCESS,
      payload: countries,
    });
    dispatch({
      type: ActionType.FILTER_COUNTRIES_SUCCESS,
      payload: countries,
    });
  } catch (err) {
    //dispatching errors
    dispatch({
      type: ActionType.SEARCH_COUNTRIES_ERROR,
      payload: err.message,
    });
    dispatch({
      type: ActionType.FILTER_COUNTRIES_ERROR,
      payload: err.message,
    });
  }
};
//filter countries
export const filterCountries = (countryId: string | null) => (
  dispatch: Dispatch<CountriesAction>,
  getState: () => RootState
) => {
  //filtering countries
  const countries = getState().countries;
  const filteredCountries = countries.data.filter(
    (country: CountryInterface) => country.region.toLowerCase() === countryId
  );
  //dispatching results
  dispatch({
    type: ActionType.FILTER_COUNTRIES_SUCCESS,
    payload: filteredCountries,
  });
};
