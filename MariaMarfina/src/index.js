import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import 'promise-polyfill/src/polyfill';
import configureStore from './store/configureStore';
import App from './components/App/App';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>  
        <Provider store={ store }>  
            <App/>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('app')
);