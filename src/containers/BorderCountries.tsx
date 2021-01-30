//importing Link
import { Link } from 'react-router-dom';
//border countries component
const BorderCountries: React.FC = () => {
  return (
    <div className="border__countries__container">
      <div className="title__container">
        <h4>Border countries:</h4>
      </div>
      <div className="border__countries">
        <div className="border__country__container">
          <Link to="/details" className="border__country">
            France
          </Link>
        </div>
        <div className="border__country__container">
          <Link to="/details" className="border__country">
            Germany
          </Link>
        </div>
        <div className="border__country__container">
          <Link to="/details" className="border__country">
            Belgium
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BorderCountries;
