//importing types
import { ActionType } from '../action-types';
import { CountryInterface } from '../country';
//typeAction
export type CountriesAction =
  | FetchCountries
  | FetchCountriesError
  | FetchCountriesSuccess
  | SearchCountries
  | SearchCountriesSuccess
  | SearchedCountriesError
  | FilterCountries;
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
//search Countries
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
  payload: CountryInterface[];
}
