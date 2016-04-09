import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import LastestPage from './components/MainPage/lastest';
import FollowPage from './components/MainPage/follow';
import MePage from './components/MainPage/me';
import QuestionPage from './components/MainPage/question';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NoMatchPage from './components/NoMatchPage';
import QuestionDetailPage from './components/QuestionDetailPage';

require('./css/weui-0.4.0.css');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={LastestPage} />
      <Route path="lastest" component={LastestPage}/>
      <Route path="follow" component={FollowPage}/>
      <Route path="me" component={MePage}/>
      <Route path="question" component={QuestionPage}/>
      <Route path="question/:id" component={QuestionDetailPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="register" component={RegisterPage}/>
    </Route>
    <Route path="*" component={NoMatchPage}/>
  </Router>
), document.body);
