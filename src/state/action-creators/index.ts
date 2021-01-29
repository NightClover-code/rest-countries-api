//importing types & api request file
import { Dispatch } from 'redux';
import countriesAPI from '../../api/coutries';
import { CountriesAction } from '../actions/fetchCountries';
import { ActionType } from '../action-types';
//action creator
export const fetchCountries = () => async (
  dispatch: Dispatch<CountriesAction>
) => {
  try {
    //getting countries data
    const { data } = await countriesAPI.get('/all');
    //saving data
    const countries = data.map((country: any) => {
      return {
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        flag: country.flag,
      };
    });
    //dispatching results
    dispatch({
      type: ActionType.FETCH_COUNTRIES_SUCCESS,
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
