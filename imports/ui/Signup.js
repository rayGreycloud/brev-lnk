import React, { Component } from 'react';
import { Link } from 'react-router';

class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up Page</h2>
        <div>Signup form goes here.</div>
        <Link to="/">Have an account? Sign in here</Link>
      </div>
    );
  }
}

export default Signup;
