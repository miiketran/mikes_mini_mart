// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our friendSchema
var CustomerSchema = new mongoose.Schema({
  name: String,
  created_at: String
});
mongoose.model('Customer', CustomerSchema);