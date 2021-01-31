//importing Link & hooks & random id's
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
//iso alpha 3 to name converter
import countries from 'i18n-iso-countries';
//border country component
const BorderCountry: React.FC = () => {
  //iniitalizinig the converter with english language
  countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
  //getting state
  const { error, data } = useTypedSelector(state => state.country);
  //returning border components
  if (data) {
    //mapping over 3 borders only
    const lessBorders = data.borders.slice(0, 3);
    const returnedBorders = lessBorders.map((border: string) => {
      return (
        <div className="border__country__container" key={uuidv4()}>
          <Link to="/details" className="border__country">
            {countries.getName(border, 'en', { select: 'official' })}
          </Link>
        </div>
      );
    });
    return (
      <div className="border__countries">
        {data.borders.length !== 0 ? returnedBorders : 'none'}
      </div>
    );
  }
  return <div className="error">{error}</div>;
};

export default BorderCountry;
