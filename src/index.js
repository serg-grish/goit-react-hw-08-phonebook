import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import App from './App';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import React from 'react';
import './index.css';


ReactDom.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

