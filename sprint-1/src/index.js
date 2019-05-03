import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// normalize.css imported below resets some default styles and prevents popular styling bugs
import './styles/normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
