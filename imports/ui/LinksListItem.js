import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Clipboard from 'clipboard';
import Moment from 'moment';

class LinksListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justCopied: false
    };
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({ justCopied: true });

      setTimeout(() => this.setState({ justCopied: false }), 1000);
    }).on('error', () => {
      alert('Unable to copy - ERROR');
    });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
    let visitedMessage = null;

    if (typeof this.props.lastVisitedAt === 'number') {
      const fromNow = Moment(this.props.lastVisitedAt).fromNow();
      visitedMessage = `(visited ${fromNow})`
    }

    return <p>{this.props.visitedCount} {visitMessage} {visitedMessage}</p>
  }
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        {this.renderStats()}
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? 'Copied' : 'Copy'}</button>
        <button onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
        }}>{this.props.visible ? 'Hide' : 'Unhide'}</button>
      </div>
    );
  }
};

LinksListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired,
  visitedCount: React.PropTypes.number.isRequired,
  lastVisitedAt: React.PropTypes.number
};

export default LinksListItem;
