import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import {browserHistory} from 'react-router';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, (err) => {
      console.log('Login callback', err);
    });
  }

  render() {
    return (
      <div>
        <h2>BrevLnk Login</h2>

        {this.state.error ? <p>{this.state.error}</p> : undefined }

        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
        <Link to="/signup">No account? Sign Up Here</Link>
      </div>
    );
  }
}

export default Login;
