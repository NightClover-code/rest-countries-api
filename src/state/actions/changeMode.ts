import { ActionType } from '../action-types';
//action type
export type ChangeModeAction = ChangeModeInterface;
//action interfaces
interface ChangeModeInterface {
  type: ActionType.CHANGE_CURRENT_MODE;
}
