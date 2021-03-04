import { BrowserRouter, Route } from 'react-router-dom';
//importing hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//importing components
import CountryDetails from './CountryDetails';
import App from './App';
import Header from './Header';
import Attribution from './Attribution';
//importing local Storage logic
import { getCurrent, saveToLocal } from '../state';
//app routes
const AppRouter: React.FC = () => {
  //reudux store state
  const currentCode = useTypedSelector(state => state.currentCode);
  const isLightMode = useTypedSelector(state => state.isLightMode);
  //saving items to localStorage on first render
  useEffect(() => {
    getCurrent('currentCode');
  }, []);
  //saving currentCode to local storage based on currentCode change
  useEffect(() => {
    saveToLocal('currentCode', currentCode);
  }, [currentCode]);
  //saving items to localStorage on first render
  useEffect(() => {
    getCurrent('currentMode');
  }, []);
  //saving currentMode to local storage based on currentMode change
  useEffect(() => {
    saveToLocal('currentMode', isLightMode);
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
