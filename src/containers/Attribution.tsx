//importing hooks
import { useTypedSelector } from '../hooks/useTypedSelector';
//attribution component
const Attribution = () => {
  //store state
  const isLightMode = useTypedSelector(state => state.isLightMode);
  return (
    <div className={`attribution ${isLightMode ? 'attribution__light' : ''}`}>
      Copyright &copy;2021, coded with 💖 by{' '}
      <a href="https://github.com/NightClover-code">NightClover-code</a>
    </div>
  );
};

export default Attribution;
