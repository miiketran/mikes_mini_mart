myApp.factory('CustomerFactory', function($http){
  var factory = {};
  var customers = [];
  factory.getCustomers = function(callback){
    $http.get('/customers').success(function(output){
      customers = output;
      callback(customers);
    });

  }
  factory.addCustomer = function(info, callback, error){
    $http.post('/addCustomer',info).success(function(output){
      if(typeof(output) == "string"){
        error(output);
      } else {
        customers.push({name: output.name, created_at: output.created_at, _id: output._id})
        Materialize.toast("Successfully Added Customer", 4000);
        callback(customers);
      }
    })
  }
  factory.removeCustomer = function(customer){
    $http.post('/removeCustomer', customer).success(function(){
      for(var i=0; i<customers.length; i++){
        if(customers[i]._id == customer._id){
          customers.splice(i,1);
          Materialize.toast("Successfully Removed Customer", 4000);
          return;
        }
      }
    })
  }
  return factory;
});