import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from "./compents/registerServiceWorker";
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import {createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';
const store = createStore(rootReducer);

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
  ),document.getElementById('root')
);
registerServiceWorker();
//Functions to be run
// or send to an analytics endpoint: https://bit.ly/CRA-vitals
reportWebVitals();

