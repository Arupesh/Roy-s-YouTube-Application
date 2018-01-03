import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'; 
import {thunk} from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';  
import rootReducer from './reducers/rootReducer';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
	<BrowserRouter>
	<App />
	</BrowserRouter>
	</Provider>,
 document.getElementById('root'));
registerServiceWorker();
