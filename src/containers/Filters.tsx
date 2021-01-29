const Filters: React.FC = () => {
  return (
    <div className="filters__container">
      <div className="toggle__filters">
        <div className="toggle__filters__text">Filter by Region</div>
        <div className="chevron__right__icon">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="regions">
        <ul className="regions__list">
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
