//importing actions
import { setColorMode, setCurrentCode } from './action-creators';
//saving currentCode to local storage based on currentCode change
export const saveToLocal = (
  currentString: current,
  currentValue: string | boolean
) => {
  localStorage.setItem(currentString, JSON.stringify(currentValue));
};
//getting current mode / code from local storage
export const getCurrent = (currentString: current) => {
  const jsonParam = currentString === 'currentCode' ? '' : false;
  if (localStorage.getItem(currentString) === null) {
    localStorage.setItem(currentString, JSON.stringify(jsonParam));
  } else {
    let currentLocal = JSON.parse(localStorage.getItem(currentString)!);
    currentString === 'currentCode'
      ? setCurrentCode(currentLocal)
      : setColorMode(currentLocal);
  }
};
type current = 'currentMode' | 'currentCode';
