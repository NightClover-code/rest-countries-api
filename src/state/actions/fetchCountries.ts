//importing types
import { ActionType } from '../action-types';
//data interface
export interface CountryInterface {
  name: string;
  population: number;
  region: string;
  flag: string;
  capital: string;
}
//typeAction
export type CountriesAction =
  | FetchCountries
  | FetchCountriesError
  | FetchCountriesSuccess;
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
