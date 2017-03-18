import{ Meteor }from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

// Publication
// Check environment
if (Meteor.isServer) {
  // 'links' does not refer to links collection
  Meteor.publish('links', function () {

    return Links.find({ userId: this.userId });
  });
}
