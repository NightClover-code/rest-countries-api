//importing types & api request file
import { Dispatch } from 'redux';
import countriesAPI from '../../api/countries';
import { CountriesAction, CountryInterface } from '../actions/fetchCountries';
import {
  DetailedCountryAction,
  DetailedCountryInterface,
} from '../actions/fetchCountry';
import { ActionType } from '../action-types';
import { RootState } from '../reducers';
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
        flag: country.flag,
        capital: country.capital,
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
//fetch country
export const fetchCountry = (name: string) => async (
  dispatch: Dispatch<DetailedCountryAction>
) => {
  try {
    //loading
    dispatch({
      type: ActionType.FETCH_COUNTRY,
    });
    //getting country data
    const response = await countriesAPI.get(`/name/${name}`);
    //saving country detailed info
    const country: DetailedCountryInterface[] = response.data.map(
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
      }: any) => {
        return {
          name,
          population: numbersWithCommas(population),
          region,
          flag,
          capital,
          nativeName,
          subregion,
          topLevelDomain: topLevelDomain[0],
          currencies: currencies.map((currency: any) => currency.name),
          languages: languages.map((lang: any) => lang.name),
        };
      }
    );
    //dispatching results
    dispatch({
      type: ActionType.FETCH_COUNTRY_SUCCESS,
      payload: country,
    });
  } catch (err) {
    //dispatching errors
    dispatch({
      type: ActionType.FETCH_COUNTRY_ERROR,
      payload: err.message,
    });
  }
};
//cuurent country name
export const setCurrentName = (name: string) => {
  return {
    type: ActionType.CURRENT_COUNTRY_NAME,
    payload: name,
  };
};
