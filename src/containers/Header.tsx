const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Where in the world?</h1>
        <div className="mode__container">
          <div className="mode__icon">
            <i className="fas fa-moon"></i>
          </div>
          <div className="mode">Dark Mode</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
