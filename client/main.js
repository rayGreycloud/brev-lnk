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
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.push('/links');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.push('/');
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

Tracker.autorun(() => {
  // convert truthy/falsey value to true boolean
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenicatedPages.includes(pathname);
  const isAuthenticatedPage = authenicatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  }

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
