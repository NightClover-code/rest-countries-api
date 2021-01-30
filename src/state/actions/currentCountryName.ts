import { ActionType } from '../action-types';
//action type
export type CurrentNameAction = CurrentCountryNameInterface;
//action interfaces
interface CurrentCountryNameInterface {
  type: ActionType.CURRENT_COUNTRY_NAME;
  payload: string;
}
