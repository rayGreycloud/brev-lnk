import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';

import { Links } from './../api/links';
import LinksListItem from './LinksListItem';

class LinksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount LinksList');
    this.linksTracker = Tracker.autorun(() => {
      // Access session store
      const notHidden = Session.get('showVisible');
      Meteor.subscribe('links');
      const links = Links.find({
        visible: notHidden
      }).fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount LinksList');
    this.linksTracker.stop();
  }
  renderLinksListItems() {
    if (this.state.links.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Links Found</p>
        </div>
      );
    }

    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
    });
  }
  render() {
    return (
      <div>
        <div>
          <FlipMove maintainContainerHeight={true}>
            {this.renderLinksListItems()}
          </FlipMove>
        </div>
      </div>
    );
  }
};

export default LinksList;
