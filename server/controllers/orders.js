var mongoose = require('mongoose');
var Order = mongoose.model('Order');

var mydate = new Date(); 
var month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"][mydate.getMonth()];
var date_str = month + ' ' + mydate.getDate()+ " "+ mydate.getFullYear();


module.exports = {
  show: function(req,res){
    Order.find({}, function(err, results){
      if(err){
        console.log(err);
      } else {
        res.json(results);
      }
    })
  },
  add: function(req,res){
    var total_price = req.body.quantity * req.body.price;
    var order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity, total_price: total_price, date: date_str});
    order.save(function(err){
      if(err){
        console.log("Error", err);
      } else {
        res.json(order);
      }
    })
  },
  remove: function(req,res) {
    Order.remove({_id: req.body._id}, function(err, orders) {
      if(err){
        console.log("Error");
      } else {
        res.end();
      }
    })
  }
}