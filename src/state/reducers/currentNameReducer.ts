import { ActionType } from '../action-types';
import { CurrentNameAction } from '../actions/currentCountryName';
//reducer
const currentNameReducer = (state: string = '', action: CurrentNameAction) => {
  switch (action.type) {
    case ActionType.CURRENT_COUNTRY_NAME:
      return action.payload;
    default:
      return state;
  }
};
export default currentNameReducer;
