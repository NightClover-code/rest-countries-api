const SearchBar: React.FC = () => {
  return (
    <div className="search__bar">
      <div className="search__bar__container">
        <div className="search__icon">
          <i className="fas fa-search"></i>
        </div>
        <input type="text" placeholder="Search for a country..." />
      </div>
    </div>
  );
};

export default SearchBar;
