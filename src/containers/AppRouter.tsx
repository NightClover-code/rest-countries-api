import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import Header from './Header';
//importing provider & store
import { Provider } from 'react-redux';
import { store } from '../state';
//app routes
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Route path="/" component={App} exact />
        <Route path="/:name" component={CountryDetails} />
      </Provider>
    </BrowserRouter>
  );
};
export default AppRouter;
