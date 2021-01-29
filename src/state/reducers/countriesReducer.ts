//importing types
import { ActionType } from '../action-types';
import { CountriesAction } from '../actions/fetchCountries';
import { CountryInterface } from '../actions/fetchCountries';
//state interface
interface CountriesState {
  loading: boolean;
  data: CountryInterface[];
  error: string | null;
}
//initialState
const initialState = {
  loading: false,
  error: null,
  data: [],
};
//reducer
const countriesReducer = (
  state: CountriesState = initialState,
  action: CountriesAction
) => {
  switch (action.type) {
    case ActionType.FETCH_COUNTRIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_COUNTRIES:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_COUNTRIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.SEARCH_COUNTRIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_COUNTRIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_COUNTRIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default countriesReducer;
