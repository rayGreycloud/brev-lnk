import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class PrivateHeader extends Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.onLogout.bind(this)}>
          Logout
        </button>
      </div>
    );
  }
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;
