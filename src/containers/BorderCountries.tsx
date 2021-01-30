//importing components
import BorderCountry from './BorderCountry';
//border countries component
const BorderCountries: React.FC = () => {
  return (
    <div className="border__countries__container">
      <div className="title__container">
        <h4>Border countries:</h4>
      </div>
      <BorderCountry />
    </div>
  );
};

export default BorderCountries;
