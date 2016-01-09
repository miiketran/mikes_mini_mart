var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
  name: String,
  product: String,
  quantity: Number,
  total_price: Number,
  date: String
});

mongoose.model('Order', OrderSchema);
