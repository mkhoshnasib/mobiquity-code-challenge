import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/custom-css-bootstrap.css';
import './assets/styles/custom-variables-bootstrap.scss'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
