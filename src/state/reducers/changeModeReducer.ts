import { ActionType } from '../action-types';
import { ModeAction } from '../actions/changeMode';
//reducer
const changeModeReducer = (
  state: boolean = false,
  action: ModeAction
): boolean => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_MODE:
      return !state;
    case ActionType.SET_CURRENT_MODE:
      return action.payload;
    default:
      return state;
  }
};
export default changeModeReducer;
