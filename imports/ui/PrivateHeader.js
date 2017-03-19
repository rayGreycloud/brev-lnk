import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <button onClick={() => Accounts.logout()}>
        Logout
      </button>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;
