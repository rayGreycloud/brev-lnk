import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Link from './../imports/ui/Link';
import Login from './../imports/ui/Login';
import NotFound from './../imports/ui/NotFound';
import Signup from './../imports/ui/Signup';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/links" component={Link} />
    <Route path="*" component={NotFound} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
