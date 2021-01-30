//importing Link & hooks
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
//border country component
const BorderCountry: React.FC = () => {
  const { error, data } = useTypedSelector(state => state.country);
  if (data) {
    const returnedBorders = data.borders.map((border: string) => {
      return (
        <div className="border__country__container">
          <Link to="/details" className="border__country">
            {border}
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
