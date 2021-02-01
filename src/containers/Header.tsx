//importing hooks
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
//header component
const Header: React.FC = () => {
  //getting state & actions
  const { changeColorMode } = useActions();
  return (
    <header>
      <div className="container">
        <h1>Where in the world?</h1>
        <div className="mode__container">
          <div className="mode__icon">
            <i className="fas fa-moon"></i>
          </div>
          <div className="mode" onClick={() => changeColorMode()}>
            Dark Mode
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
