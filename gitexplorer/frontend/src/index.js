import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';
import AppReducer from './reducers/index.js';
import {Provider} from  'react-redux';

const Redux = require('redux');
const Appstore = Redux.createStore(AppReducer);



ReactDOM.render(
    <Provider store={Appstore}>
       <App />
    </Provider>,
   document.getElementById('root'));

registerServiceWorker();
