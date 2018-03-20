import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

// Components
import App from './components/App';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
document.body.style = 'background: #EEEEEE;';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
