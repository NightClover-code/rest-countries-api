import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import Header from './Header';
//app routes
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={App} exact />
      <Route path="/details" component={CountryDetails} />
    </BrowserRouter>
  );
};
export default AppRouter;
