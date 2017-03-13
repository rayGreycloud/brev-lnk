import React, { Component } from 'react';
import { Link } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      error: 'Ding ding ding'
    });
  }

  render() {
    return (
      <div>
        <h2>BrevLnk Sign Up</h2>

        {this.state.error ? <p>{this.state.error}</p> : undefined }

        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <button>Create Account</button>
          </form>
        </div>
        <Link to="/">Have an account? Sign in here</Link>
      </div>
    );
  }
}

export default Signup;
