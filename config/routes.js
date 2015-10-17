var orders = require('./../server/controllers/orders.js');
var customers = require('./../server/controllers/customers.js');
var products = require('./../server/controllers/products.js');
module.exports = function(app){
  app.get('/orders', function(req,res){
    orders.show(req,res);
  });
  app.post('/add', function(req,res){
    orders.add(req,res);
  });
  app.post('/removeOrder', function(req,res){
    orders.remove(req,res);
  })
  app.get('/customers', function(req,res){
    customers.show(req,res);
  });
  app.post('/addCustomer', function(req,res){
    customers.add(req,res);
  });
  app.post('/removeCustomer', function(req,res){
    customers.remove(req,res);
  });
  app.get('/products', function(req,res){
    products.show(req,res);
  });
  app.post('/addProduct', function(req,res){
    products.add(req,res);
  });
  app.get('/profile/:id', function(req,res){
    products.showOne(req,res);
  });
  app.post('/removeProduct', function(req,res){
    products.remove(req,res);
  });
  app.post('/updateProduct', function(req,res){
    products.update(req,res);
  });
  app.post('/getPrice', function(req,res){
    products.getPrice(req,res);
  });
};