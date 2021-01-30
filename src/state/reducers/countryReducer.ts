//importing types
import { ActionType } from '../action-types';
import {
  DetailedCountryAction,
  DetailedCountryInterface,
} from '../actions/fetchCountry';
//state interface
interface DetailedCountryState {
  loading: boolean;
  error: string | null;
  data: DetailedCountryInterface[];
}
//initialState
const initialState = {
  loading: false,
  error: null,
  data: [],
};
//reducer
const fetchCountry = (
  state: DetailedCountryState = initialState,
  action: DetailedCountryAction
) => {
  switch (action.type) {
    case ActionType.FETCH_COUNTRY:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_COUNTRY_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.FETCH_COUNTRY_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default fetchCountry;
