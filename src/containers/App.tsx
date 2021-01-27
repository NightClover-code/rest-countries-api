//improting styles
import '../styles/css/app.css';
import CountriesList from './CountriesList';
//importing components
import Header from './Header';
import SearchBar from './SearchBar';
//app component
const App = () => {
  return (
    <div className="app__container">
      <Header />
      <div className="wrapper">
        <SearchBar />
        <CountriesList />
      </div>
    </div>
  );
};
export default App;
