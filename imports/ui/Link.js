import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Link extends Component {
  onLogout() {
    browserHistory.push("/");
  }

  render() {
    return (
      <div>
        <div>Link component here</div>
        <div>
          <button onClick={this.onLogout.bind(this)}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Link;
