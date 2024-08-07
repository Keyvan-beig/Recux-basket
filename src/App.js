import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
