//importing styles
import '../styles/css/details.css';
//importing components
import PreviousButton from '../components/PreviousButton';
import DetailContent from '../containers/DetailContent';
//details component
const CountryDetails: React.FC = () => {
  return (
    <div className="details__container">
      <div className="wrapper">
        <PreviousButton />
      </div>
      <div className="container">
        <DetailContent />
      </div>
    </div>
  );
};

export default CountryDetails;
