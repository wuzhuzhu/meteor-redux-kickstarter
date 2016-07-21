import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Users = Meteor.users;
export const ChatChannel = new Mongo.Collection('chat_channel');
export const ChatMessage = new Mongo.Collection('chat_message');
export const LatestMessage = new Mongo.Collection('latest_message');
