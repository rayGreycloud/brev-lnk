import React, { Component } from 'react';

class LinksListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>visits</p>
      </div>
    );
  }
};

LinksListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired
};

export default LinksListItem;
