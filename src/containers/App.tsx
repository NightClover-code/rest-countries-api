//improting styles
import '../styles/css/app.css';
import CountriesList from './CountriesList';
import Filters from './Filters';
//importing components
import SearchBar from './SearchBar';
//importing hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//app component
const App: React.FC = () => {
  //getting state & actions
  const { setCurrentCode } = useActions();
  const isLightMode = useTypedSelector(state => state.isLightMode);
  useEffect(() => {
    setCurrentCode('');
  }, [setCurrentCode]);
  return (
    <div className={`app__container ${isLightMode ? 'app__light' : ''}`}>
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
