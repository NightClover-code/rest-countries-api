//importing hooks
import { useMemo } from 'react';
import { useActions } from './useActions';
//current type
type current = 'currentMode' | 'currentCode';
//custom hook
export const useGetCurrent = () => {
  const { setColorMode, setCurrentCode } = useActions();
  return useMemo(
    () => (currentString: current) => {
      const jsonParam = currentString === 'currentCode' ? '' : false;
      if (localStorage.getItem(currentString) === null) {
        localStorage.setItem(currentString, JSON.stringify(jsonParam));
      } else {
        let currentLocal = JSON.parse(localStorage.getItem(currentString)!);
        currentString === 'currentCode'
          ? setCurrentCode(currentLocal)
          : setColorMode(currentLocal);
      }
    },
    [setCurrentCode, setColorMode]
  );
};
