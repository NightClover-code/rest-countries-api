//importing types
import { ActionType } from '../action-types';
//typeAction
export type CountriesAction =
  | FetchCountries
  | FetchCountriesError
  | FetchCountriesSuccess;
//actions interface
interface FetchCountriesSuccess {
  type: ActionType.FETCH_COUNTRIES_SUCCESS;
  payload: object[];
}
interface FetchCountries {
  type: ActionType.FETCH_COUNTRIES;
}
interface FetchCountriesError {
  type: ActionType.FETCH_COUNTRIES_ERROR;
  payload: string;
}
