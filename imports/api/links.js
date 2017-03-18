import{ Meteor }from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function () {
    return Links.find({ userId: this.userId });
  });
}

// Naming convention: resource.action
Meteor.methods({
  // Quotes needed because '.'
  'links.insert'(url) {
    if (!this.userId) {
      return new Meteor.Error('not-authorized');
    }

    Links.insert({
      url,
      userId: this.userId
    });
  }
});
