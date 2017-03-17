import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from './../api/links';

// Change component name because collection named Links
class LinkList extends Component {
  onLogout() {
    Accounts.logout();
  }

  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      // Save input link
      Links.insert({ url });
      // Clear input field
      this.refs.url.value = '';
    }
  }

  render() {
    return (
      <div>
        <h2>Your Links</h2>

        <div>
          <button onClick={this.onLogout.bind(this)}>Logout</button>
          <p>Add Link</p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" ref="url" placeholder="URL" />
            <button>Add Link</button>

          </form>
        </div>
      </div>
    );
  }
}

export default LinkList;
