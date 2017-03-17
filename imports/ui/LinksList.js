import React, { Component } from 'react';

class LinksList extends Component {
  componentDidMount() {
    console.log('componentDidMount LinksList');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount LinksList');
  }

  render() {
    return (
      <div>
        <p>Links List</p>
      </div>
    );
  }
};

export default LinksList;
