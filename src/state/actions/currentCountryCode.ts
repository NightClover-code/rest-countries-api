import { ActionType } from '../action-types';
//action type
export type CurrentCodeAction = CurrentCountryCodeInterface;
//action interfaces
interface CurrentCountryCodeInterface {
  type: ActionType.CURRENT_COUNTRY_CODE;
  payload: string;
}
