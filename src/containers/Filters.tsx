//importing hooks
import { useState } from 'react';
//filters component
const Filters: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  //toggling filters & rotate animation class
  const isOpenClass = isOpen ? 'active' : '';
  const rotateClass = isOpen ? 'rotate' : '';
  return (
    <div className="filters__container">
      <div className="toggle__filters" onClick={() => setIsOpen(!isOpen)}>
        <div className="toggle__filters__text">Filter by Region</div>
        <div className={`chevron__right__icon ${rotateClass}`}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={`regions ${isOpenClass}`}>
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
