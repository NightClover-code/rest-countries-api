import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
//combining reducers
const reducers = combineReducers({
  countries: countriesReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
