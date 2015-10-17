myApp.factory('ProductFactory', function($http){
  var factory = {};
  var products = [];
  factory.getProducts = function(callback){
    $http.get('/products').success(function(output){
      products = output;
      callback(products);
    });
  }
  factory.addProduct = function(info, callback, error){
    $http.post('addProduct',info).success(function(output){
      if(typeof(output) == "string"){
        error(output);
      } else {
        products.push({name: output.name, url: output.url, description: output.description, quantity: output.quantity, price: output.price})
        callback(products);
      }
    })
  }
  factory.getPrice = function(profile, callback) {
    $http.post('/getPrice', profile).success(function(output) {
      callback(output);
    })
  }
  return factory;
});