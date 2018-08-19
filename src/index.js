import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/characters" component={App} />
    </Switch>
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
