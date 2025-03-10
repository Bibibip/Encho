import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot 사용

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//serviceWorker.unregister();