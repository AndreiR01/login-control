import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginControl from './Components/Login/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginControl/>, document.getElementById('root'));
registerServiceWorker();
