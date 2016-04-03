import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import NoMatchPage from './components/NoMatchPage'

require('./css/weui-0.4.0.css')

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}></Route>
    <Route path="/login" component={LoginPage}/>
    <Route path="/register" component={RegisterPage}></Route>
    <Route path="*" component={NoMatchPage}/>
  </Router>
), document.body)
