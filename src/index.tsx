import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './store/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>  
      <Router>
        <App/>
      </Router>
    </Provider>,
  document.getElementById('root')
);


