//importing hooks
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//header component
const Header: React.FC = () => {
  //getting state & actions
  const { changeColorMode } = useActions();
  const isLightMode = useTypedSelector(state => state.isLightMode);
  return (
    <header className={isLightMode ? 'header__light' : ''}>
      <div className="container">
        <h1>Where in the world?</h1>
        <div className="mode__container" onClick={() => changeColorMode()}>
          <div className="mode__icon">
            <i className={`fas ${isLightMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </div>
          <div className="mode">{isLightMode ? 'Dark Mode' : 'Light Mode'}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
