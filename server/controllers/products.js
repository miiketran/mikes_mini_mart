var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  show: function(req,res){
    Product.find({}, function(err, results){
      if(err){
        console.log(err);
      } else {
        res.json(results);
      }
    })
  },
  add: function(req,res){
    var products;
    Product.find({}, function(err, results){
      if(err){
        console.log("error");
      } else {
        if(req.body.name == null){
          res.send("Invalid product");
            return;
        } else { 
          for(var i =0; i<results.length; i++){
            if(req.body.name.toLowerCase() == results[i].name.toLowerCase()){
              res.send(req.body.name + " already exists");
              return;
            }
          }
          if(!req.body.url){
            req.body.url = "http://img4.wikia.nocookie.net/__cb20130902173013/max-steel-reboot/images/7/72/No_Image_Available.gif";
          }
          var product = new Product({name: req.body.name, url: req.body.url, description: req.body.description, quantity: req.body.quantity, price: req.body.price});
          product.save(function(err, result){
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
  showOne: function(req,res){
    Product.findOne({_id: req.params.id}, function(err, result){
      if(err){
        console.log(err);
      } else {
        console.log(result);
        res.json(result);
      }
    })
  },
  remove: function(req,res){
    console.log(req.body);
    Product.remove({_id: req.body._id}, function(err,products){
      if(err){
        console.log("Error");
      } else {
        res.end();
      }
    })
  },
  update: function(req,res){
    if(!req.body.url){
            req.body.url = "http://img4.wikia.nocookie.net/__cb20130902173013/max-steel-reboot/images/7/72/No_Image_Available.gif";
    }
    if(!req.body.description){
      req.body.description = "";
    }
    Product.update({_id: req.body._id}, {name: req.body.name, url: req.body.url, description: req.body.description, quantity: req.body.quantity, price: req.body.price}, function(err, result){
      if(err){
        console.log("Error");
      } else {
        res.end();
      }
    });
  },
  getPrice: function(req,res){
    Product.findOne({name: req.body.product}, function(err, result){
      if(err){
        console.log(err);
      } else {
        res.json(result.price);
      }
    })
  }
}
