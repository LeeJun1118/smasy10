import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./shared/App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();

