import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom'
import App from 'pages/App/App';
import Login from 'pages/Login/Index';

const SliderComponent = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route path="/login" component={Login}/>
  </Switch>
)

ReactDOM.render((
  <HashRouter>
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
