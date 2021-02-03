import { BrowserRouter, Route } from 'react-router-dom';
//importing hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//importing components
import CountryDetails from './CountryDetails';
import App from './App';
import Header from './Header';
import Attribution from '../components/Attribution';
//app routes
const AppRouter: React.FC = () => {
  //getting actions & state
  const { setCurrentCode, setColorMode } = useActions();
  const currentCode = useTypedSelector(state => state.currentCode);
  const isLightMode = useTypedSelector(state => state.isLightMode);
  useEffect(() => {
    //getting code from local storage
    const getCurrentCode = () => {
      if (localStorage.getItem('currentCode') === null) {
        localStorage.setItem('currentCode', JSON.stringify(''));
      } else {
        let currentCodeLocal = JSON.parse(localStorage.getItem('currentCode')!);
        setCurrentCode(currentCodeLocal);
      }
    };
    //saving items to localStorage on first render
    getCurrentCode();
  }, []);
  useEffect(() => {
    //saving currentCode to local storage based on currentCode change
    const saveToLocal = () => {
      localStorage.setItem('currentCode', JSON.stringify(currentCode));
    };
    saveToLocal();
  }, [currentCode]);
  useEffect(() => {
    //getting color mode from local storage
    const getCurrentMode = () => {
      if (localStorage.getItem('currentMode') === null) {
        localStorage.setItem('currentMode', JSON.stringify(false));
      } else {
        let currentModeLocal = JSON.parse(localStorage.getItem('currentMode')!);
        setColorMode(currentModeLocal);
      }
    };
    //saving items to localStorage on first render
    getCurrentMode();
  }, []);
  useEffect(() => {
    //saving currentMode to local storage based on currentMode change
    const saveToLocal = () => {
      localStorage.setItem('currentMode', JSON.stringify(isLightMode));
    };
    saveToLocal();
  }, [isLightMode]);
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={App} exact />
      <Route path="/:code" component={CountryDetails} />
      <Attribution />
    </BrowserRouter>
  );
};
export default AppRouter;
