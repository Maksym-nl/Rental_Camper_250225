import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/store';
import { Provider } from 'react-redux';
import { store } from './redux/redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Rental_Camper_250225">
      <Provider store={store}>
        {/* <PersistGate persistor={persistor} loading={null}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
