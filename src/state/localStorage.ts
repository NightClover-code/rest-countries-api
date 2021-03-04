//importing actions
import { setColorMode, setCurrentCode } from './action-creators';
//hooks
import { useCallback } from 'react';

// //getting current mode / code from local storage
// export const getCurrent = useCallback(
//   (currentString: current) => {
//     const jsonParam = currentString === 'currentCode' ? '' : false;
//     if (localStorage.getItem(currentString) === null) {
//       localStorage.setItem(currentString, JSON.stringify(jsonParam));
//     } else {
//       let currentLocal = JSON.parse(localStorage.getItem(currentString)!);
//       currentString === 'currentCode'
//         ? setCurrentCode(currentLocal)
//         : setColorMode(currentLocal);
//     }
//   },
//   [setCurrentCode, setColorMode]
// );
