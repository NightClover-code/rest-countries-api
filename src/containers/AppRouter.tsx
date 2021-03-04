import { BrowserRouter, Route } from 'react-router-dom';
//importing hooks
import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useSaveToLocal } from '../hooks/useSaveToLocal';
import { useGetCurrent } from '../hooks/useGetCurrent';
//importing components
import CountryDetails from './CountryDetails';
import App from './App';
import Header from './Header';
import Attribution from './Attribution';
//app routes
const AppRouter: React.FC = () => {
  //reudux store state
  const currentCode = useTypedSelector(state => state.currentCode);
  const isLightMode = useTypedSelector(state => state.isLightMode);
  //local storage custom hooks
  const getCurrent = useGetCurrent();
  const saveToLocal = useSaveToLocal();
  //saving items to localStorage on first render
  useEffect(() => {
    getCurrent('currentCode');
    getCurrent('currentMode');
  }, [getCurrent]);
  //saving currentCode to local storage based on currentCode change
  useEffect(() => {
    saveToLocal('currentCode', currentCode);
  }, [saveToLocal, currentCode]);
  //saving currentMode to local storage based on currentMode change
  useEffect(() => {
    saveToLocal('currentMode', isLightMode);
  }, [isLightMode, saveToLocal]);
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
