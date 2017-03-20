import React, { Component } from 'react';
import Clipboard from 'clipboard';

class LinksListItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      alert('Copy Successful');
    }).on('error', () => {
      alert('Unable to copy - ERROR');
    });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>0 visits</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>COPY</button>
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
