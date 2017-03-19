import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class PrivateHeader extends Component {
  constructor(props) {
    super(props);


  }
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h2>Your Links</h2>
        <button onClick={this.onLogout.bind(this)}>
          Logout
        </button>
      </div>
    );
  }
};

export default PrivateHeader;
