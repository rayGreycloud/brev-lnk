import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Links extends Component {
  onLogout() {
    browserHistory.push("/");
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
