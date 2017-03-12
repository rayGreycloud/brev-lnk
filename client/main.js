import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Link from './../imports/ui/Link';
import Signup from './../imports/ui/Signup';

Meteor.startup(() => {
  ReactDOM.render(<Link/>, document.getElementById('app'));
});
