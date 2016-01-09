var orders = require('./../server/controllers/orders.js');
var customers = require('./../server/controllers/customers.js');
var products = require('./../server/controllers/products.js');
module.exports = function(app){
  app.get('/orders', function(req,res){
    orders.show(req,res);
  });
  app.post('/order', function(req,res){
    orders.add(req,res);
  });
  app.delete('/order', function(req,res){
    orders.remove(req,res);
  })
  app.get('/customers', function(req,res){
    customers.show(req,res);
  });
  app.post('/customer', function(req,res){
    customers.add(req,res);
  });
  app.delete('/customer', function(req,res){
    customers.remove(req,res);
  });
  app.get('/products', function(req,res){
    products.show(req,res);
  });
  app.post('/product', function(req,res){
    products.add(req,res);
  });
  app.get('/profile/:id', function(req,res){
    products.showOne(req,res);
  });
  app.delete('/product/:id', function(req,res){
    products.remove(req,res);
  });
  app.put('/product/:id', function(req,res){
    products.update(req,res);
  });

};