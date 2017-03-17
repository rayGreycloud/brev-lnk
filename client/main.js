import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';

import { onAuthChange, routes } from './../imports/routes/routes';
import { Links } from './../imports/api/links';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const linkList = Links.find().fetch();
  console.log(linkList);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
