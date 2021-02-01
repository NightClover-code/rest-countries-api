//importing hooks
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//filters component
const Filters: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  //toggling filters & rotate animation class
  const isOpenClass = isOpen ? 'active' : '';
  const rotateClass = isOpen ? 'rotate' : '';
  //getting actions & state
  const { filterCountries } = useActions();
  const isLightMode = useTypedSelector(state => state.isLightMode);
  //on click handler
  const onClickHandler = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    setIsOpen(!isOpen);
    const el = event.target as HTMLInputElement;
    filterCountries(el.getAttribute('id'));
  };
  return (
    <div
      className={`filters__container ${isLightMode ? 'filters__light' : ''}`}
    >
      <div className="toggle__filters" onClick={() => setIsOpen(!isOpen)}>
        <div className="toggle__filters__text">Filter by Region</div>
        <div className={`chevron__right__icon ${rotateClass}`}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={`regions ${isOpenClass}`}>
        <ul className="regions__list" onClick={onClickHandler}>
          <li id="africa">Africa</li>
          <li id="americas">America</li>
          <li id="asia">Asia</li>
          <li id="europe">Europe</li>
          <li id="oceania">Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
