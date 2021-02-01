import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import Header from './Header';
//importing hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//app routes
const AppRouter: React.FC = () => {
  //getting actions & state
  const { setCurrentCode } = useActions();
  const currentCode = useTypedSelector(state => state.currentCode);
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
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={App} exact />
      <Route path="/:code" component={CountryDetails} />
    </BrowserRouter>
  );
};
export default AppRouter;
