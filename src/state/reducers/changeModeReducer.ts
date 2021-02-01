import { ActionType } from '../action-types';
import { ChangeModeAction } from '../actions/changeMode';
//reducer
const changeModeReducer = (
  state: boolean = false,
  action: ChangeModeAction
) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_MODE:
      return !state;
    default:
      return state;
  }
};
export default changeModeReducer;
