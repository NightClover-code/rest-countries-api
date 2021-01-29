//improting styles
import '../styles/css/app.css';
import CountriesList from './CountriesList';
import Filters from './Filters';
//importing provider & store
import { Provider } from 'react-redux';
import { store } from '../state';
//importing components
import Header from './Header';
import SearchBar from './SearchBar';
//app component
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app__container">
        <Header />
        <div className="wrapper">
          <div className="flex__container">
            <SearchBar />
            <Filters />
          </div>
          <CountriesList />
        </div>
      </div>
    </Provider>
  );
};
export default App;
