import { Link } from 'react-router-dom';
//buttin component
const PreviousButton: React.FC = () => {
  return (
    <div className="previous__button__container">
      <Link to="/" className="previous__button">
        <div className="arrow__icon">
          <img src="./images/arrow-left-white-big.png" alt="left-arrow" />
        </div>
        <span>Back</span>
      </Link>
    </div>
  );
};

export default PreviousButton;
