import Axios from 'axios';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();


/* let x;
x = 1;
y = x + 1;
//x = axios.get('https://xvalue');  */
