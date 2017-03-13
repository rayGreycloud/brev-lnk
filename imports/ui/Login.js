import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Please Login to BrevLnk</h2>

        <p>Login Form goes here.</p>

        <Link to="/signup">No account? Sign Up Here</Link>
      </div>
    );
  }
}

export default Login;
