//importing types
import { ActionType } from '../action-types';
import { CountriesAction, CountryInterface } from '../actions/fetchCountries';
//state interface
export interface CountriesState {
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
const filteredCountriesReducer = (
  state: CountriesState = initialState,
  action: CountriesAction
) => {
  switch (action.type) {
    case ActionType.FILTER_COUNTRIES:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};
export default filteredCountriesReducer;
