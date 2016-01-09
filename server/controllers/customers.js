var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');



module.exports = {
  show: function(req,res){
    Customer.find({}, function(err, results){
      if(err){
        console.log(err);
      } else {
        res.json(results);
      }
    })
  },
  add: function(req,res){
    var mydate = new Date(); 
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
    var date_str = month + ' ' + mydate.getDate()+ ", "+ mydate.getFullYear();


    console.log("adding");
    Customer.find({}, function(err, results){
      if(err){
        console.log("error");
      } else {
        if(typeof(req.body.name) == "undefined"){
          res.send("Please enter a name");
            return;
        } else { 
          for(var i =0; i<results.length; i++){
            if(req.body.name.toLowerCase() == results[i].name.toLowerCase()){
              res.send(req.body.name + " already exists");
              return;
            }
          }
          var customer = new Customer({name: req.body.name, created_at: date_str});
          customer.save(function(err, result){
            if(err){
              console.log("Error", err);
            } else {
              res.json(result);
            }
          });
        } 
      }
    })
  },
  remove: function(req,res){
    Customer.remove({_id: req.body._id}, function(err,customers){
      if(err){
        console.log("Error");
      } else {
        res.end();
      }
    })
  }
}