import { ActionType } from '../action-types';
//action type
export type ModeAction = ChangeModeInterface | SetModeInterface;
//action interfaces
interface ChangeModeInterface {
  type: ActionType.CHANGE_CURRENT_MODE;
}
interface SetModeInterface {
  type: ActionType.SET_CURRENT_MODE;
  payload: boolean;
}
