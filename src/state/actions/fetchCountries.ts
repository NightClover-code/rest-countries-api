//importing types
import { ActionType } from '../action-types';
//data interface
export interface CountryInterface {
  name: string;
  population: string;
  region: string;
  flag: string;
  capital: string;
  code: string;
}
//typeAction
export type CountriesAction =
  | FetchCountries
  | FetchCountriesError
  | FetchCountriesSuccess
  | SearchCountries
  | SearchCountriesSuccess
  | SearchedCountriesError
  | FilterCountries
  | FilterCountriesSuccess
  | FilterCountriesError;
//actions interface
interface FetchCountriesSuccess {
  type: ActionType.FETCH_COUNTRIES_SUCCESS;
  payload: CountryInterface[];
}
interface FetchCountries {
  type: ActionType.FETCH_COUNTRIES;
}
interface FetchCountriesError {
  type: ActionType.FETCH_COUNTRIES_ERROR;
  payload: string;
}
//action interfaces
interface SearchCountries {
  type: ActionType.SEARCH_COUNTRIES;
}
interface SearchCountriesSuccess {
  type: ActionType.SEARCH_COUNTRIES_SUCCESS;
  payload: CountryInterface[];
}
interface SearchedCountriesError {
  type: ActionType.SEARCH_COUNTRIES_ERROR;
  payload: string;
}
//filter countries
interface FilterCountries {
  type: ActionType.FILTER_COUNTRIES;
}
interface FilterCountriesSuccess {
  type: ActionType.FILTER_COUNTRIES_SUCCESS;
  payload: CountryInterface[];
}
interface FilterCountriesError {
  type: ActionType.FILTER_COUNTRIES_ERROR;
  payload: string;
}
