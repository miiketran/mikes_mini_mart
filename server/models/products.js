// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our friendSchema
var ProductSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
  quantity:Number,
  price: Number
});
mongoose.model('Product', ProductSchema);
