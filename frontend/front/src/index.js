import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './shared/App';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
import Root from './client/Root';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <Root/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

registerServiceWorker();
//serviceWorker.unregister();
