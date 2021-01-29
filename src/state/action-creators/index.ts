//importing types & api request file
import { Dispatch } from 'redux';
import countriesAPI from '../../api/coutries';
import { CountriesAction } from '../actions/fetchCountries';
import { ActionType } from '../action-types';
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
  } catch (err) {
    //dispatching errors
    dispatch({
      type: ActionType.FETCH_COUNTRIES_ERROR,
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
  } catch (err) {
    //dispatching errors
    dispatch({
      type: ActionType.SEARCH_COUNTRIES_ERROR,
      payload: err.message,
    });
  }
};
