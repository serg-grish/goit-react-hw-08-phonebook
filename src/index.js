import App from './Components/App/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import React from 'react';
import './index.css';

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

