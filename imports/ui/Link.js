import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Links } from './../api/links';
import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';

class Link extends Component {
  render() {
    return (
      <div>
          <PrivateHeader title="Your Links"/>
          <LinksList />
          <AddLink />


      </div>
    );
  }
}

export default Link;
