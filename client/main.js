import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Links from './../imports/ui/Links';
import Login from './../imports/ui/Login';
import NotFound from './../imports/ui/NotFound';
import Signup from './../imports/ui/Signup';

const unauthenicatedPages = ['/', '/login', '/signup'];
const authenicatedPages = ['/links'];

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/links" component={Links} />
    <Route path="*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  // convert truthy/falsey value to true boolean
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenicatedPages.includes(pathname);
  const isAuthenticatedPage = authenicatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  }

  if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  }

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
