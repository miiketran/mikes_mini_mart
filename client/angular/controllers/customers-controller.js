myApp.controller('CustomersController', function($scope, CustomerFactory){
  updateCustomers();
  function updateCustomers(){
    CustomerFactory.getCustomers(function(output){
      $scope.customers = output;
    });
  }
  $scope.addCustomer = function(){
    CustomerFactory.addCustomer($scope.new_customer, 
      function(output){
        $scope.customers = output;
        $scope.new_customer = {};
      }, function(err){
        $scope.err = err;
      });
  }
  $scope.removeCustomer = function(customer){
    CustomerFactory.removeCustomer(customer)
  }

})