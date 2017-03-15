import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

class Links extends Component {
  onLogout() {
    Accounts.logout();
  }

  render() {
    return (
      <div>
        <h2>Your Links</h2>
        <div>Links component here</div>
        <div>
          <button onClick={this.onLogout.bind(this)}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Links;
