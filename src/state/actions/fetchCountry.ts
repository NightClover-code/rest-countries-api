//importing types
import { ActionType } from '../action-types';
//data interface
export interface DetailedCountryInterface {
  name: string;
  population: string;
  region: string;
  flag: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  borders: string[];
  currencies: string[];
  languages: string[];
}
//type action
export type DetailedCountryAction =
  | FetchCountry
  | FetchCountryError
  | FetchCountrySuccess;
//action interfaces
interface FetchCountry {
  type: ActionType.FETCH_COUNTRY;
}
interface FetchCountrySuccess {
  type: ActionType.FETCH_COUNTRY_SUCCESS;
  payload: DetailedCountryInterface;
}
interface FetchCountryError {
  type: ActionType.FETCH_COUNTRY_ERROR;
  payload: string;
}
