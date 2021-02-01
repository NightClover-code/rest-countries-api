//importing react hooks & custom hooks
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//search bar component
const SearchBar: React.FC = () => {
  //local state
  const [term, setTerm] = useState('');
  //getting state & actions
  const { searchCountries } = useActions();
  const isLightMode = useTypedSelector(state => state.isLightMode);
  //submit handler
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (term) {
      searchCountries(term);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className={`search__bar ${isLightMode ? 'search__bar__light' : ''}`}
    >
      <div className="search__bar__container">
        <button className="search__icon">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          placeholder="Search for a country..."
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
