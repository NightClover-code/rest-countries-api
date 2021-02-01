import { Link } from 'react-router-dom';
//importing hooks
import { useTypedSelector } from '../hooks/useTypedSelector';
//button component
const PreviousButton: React.FC = () => {
  //getting state
  const isLightMode = useTypedSelector(state => state.isLightMode);
  //black or white arrow class
  const arrowColor = isLightMode ? 'black' : 'white';
  return (
    <div
      className={`previous__button__container ${
        isLightMode ? 'previous__button__light' : ''
      }`}
    >
      <Link to="/" className="previous__button">
        <div className="arrow__icon">
          <img
            src={`./images/arrow-left-${arrowColor}-big.png`}
            alt="left-arrow"
          />
        </div>
        <span>Back</span>
      </Link>
    </div>
  );
};

export default PreviousButton;
