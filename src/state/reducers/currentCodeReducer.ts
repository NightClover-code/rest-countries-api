import { ActionType } from '../action-types';
import { CurrentCodeAction } from '../actions/currentCountryCode';
//reducer
const currentCodeReducer = (
  state: string = '',
  action: CurrentCodeAction
): string => {
  switch (action.type) {
    case ActionType.CURRENT_COUNTRY_CODE:
      return action.payload;
    default:
      return state;
  }
};
export default currentCodeReducer;
