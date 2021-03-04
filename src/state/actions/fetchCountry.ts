//importing types
import { ActionType } from '../action-types';
import { DetailedCountryInterface } from '../detailedCountry';

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
