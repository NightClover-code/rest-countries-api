//improting styles
import '../styles/css/app.css';
import CountriesList from './CountriesList';
import Filters from './Filters';
//importing components
import SearchBar from './SearchBar';
//importing hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
//app component
const App: React.FC = () => {
  //getting state & actions
  const { setCurrentCode } = useActions();
  useEffect(() => {
    setCurrentCode('');
  }, [setCurrentCode]);
  return (
    <div className="app__container">
      <div className="wrapper">
        <div className="flex__container">
          <SearchBar />
          <Filters />
        </div>
        <CountriesList />
      </div>
    </div>
  );
};
export default App;
