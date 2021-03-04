//importing hooks
import { useMemo } from 'react';
//current type
type current = 'currentMode' | 'currentCode';
//custom hook
export const useSaveToLocal = () => {
  return useMemo(
    () => (currentString: current, currentValue: string | boolean) => {
      localStorage.setItem(currentString, JSON.stringify(currentValue));
    },
    []
  );
};
