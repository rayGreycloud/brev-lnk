import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Links from './../ui/Links';
import Login from './../ui/Login';
import NotFound from './../ui/NotFound';
import Signup from './../ui/Signup';

const unauthenicatedPages = ['/', '/login', '/signup'];
const authenicatedPages = ['/links'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/links');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenicatedPages.includes(pathname);
  const isAuthenticatedPage = authenicatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="/links" component={Links} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound} />
  </Router>
);

export default { onAuthChange, routes };
