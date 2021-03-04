//importing types
import { Dispatch } from 'redux';
import { CountriesAction } from '../actions/fetchCountries';
import { DetailedCountryAction } from '../actions/fetchCountry';
import { ActionType } from '../action-types';
import { RootState } from '../reducers';
import { CountryInterface } from '../country';
import { DetailedCountryInterface } from '../detailedCountry';
//importing api
import countriesAPI from '../../api/countries';
//format population number
const numbersWithCommas = (x: number): string => {
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
    const countries: CountryInterface[] = response.data.map(
      (country: any): CountryInterface => {
        return {
          name: country.name,
          population: numbersWithCommas(country.population),
          region: country.region,
          capital: country.capital,
          flag: country.flag,
          code: country.alpha3Code,
        };
      }
    );
    //dispatching results
    dispatch({
      type: ActionType.FETCH_COUNTRIES_SUCCESS,
      payload: countries,
    });
    //linking filtered countries with countries
    dispatch({
      type: ActionType.FILTER_COUNTRIES,
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
        flag: country.flag,
        code: country.alpha3Code,
        capital: country.capital,
      };
    });
    //dispatching results
    dispatch({
      type: ActionType.SEARCH_COUNTRIES_SUCCESS,
      payload: countries,
    });
    dispatch({
      type: ActionType.FILTER_COUNTRIES,
      payload: countries,
    });
  } catch (err) {
    //dispatching errors
    dispatch({
      type: ActionType.SEARCH_COUNTRIES_ERROR,
      payload: "Can't find the country you're looking for",
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
    type: ActionType.FILTER_COUNTRIES,
    payload: filteredCountries,
  });
};
//fetch country
export const fetchCountry = (code: string) => async (
  dispatch: Dispatch<DetailedCountryAction>
) => {
  try {
    //loading
    dispatch({
      type: ActionType.FETCH_COUNTRY,
    });
    //getting country data
    const response = await countriesAPI.get(`/alpha/${code}`);
    //destructuring info from data
    const {
      name,
      population,
      region,
      nativeName,
      flag,
      capital,
      subregion,
      topLevelDomain,
      currencies,
      borders,
      languages,
    } = response.data;
    //saving country detailed info
    const country: DetailedCountryInterface = {
      name,
      population: numbersWithCommas(population),
      region,
      flag,
      capital,
      nativeName,
      borders,
      subregion,
      topLevelDomain: topLevelDomain[0],
      currencies: currencies.map((currency: any, index: number) => {
        if (currencies.length - 1 === index) {
          return `${currency.name}`;
        }
        return `${currency.name}, `;
      }),
      languages: languages.map((lang: any, index: number) => {
        if (languages.length - 1 === index) {
          return `${lang.name}`;
        }
        return `${lang.name}, `;
      }),
    };
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
//current country code
export const setCurrentCode = (code: string) => {
  return {
    type: ActionType.CURRENT_COUNTRY_CODE,
    payload: code,
  };
};
//changing color mode
export const changeColorMode = () => {
  return {
    type: ActionType.CHANGE_CURRENT_MODE,
  };
};
//setting color mode
export const setColorMode = (value: boolean) => {
  return {
    type: ActionType.SET_CURRENT_MODE,
    payload: value,
  };
};
