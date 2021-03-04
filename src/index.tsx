import ReactDOM from 'react-dom';
import AppRouter from './containers/AppRouter';
//importing provider & store
import { Provider } from 'react-redux';
import { store } from './state';
//rendering
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
