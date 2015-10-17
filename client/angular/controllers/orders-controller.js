// to avoid using 2 controllers on orders partial, inject CustomerFactory
myApp.controller('OrdersController', function($scope, $routeParams, OrderFactory, CustomerFactory, ProductFactory){
  updateOrders();
  updateCustomers();
  updateProducts();
  function updateCustomers(){
    CustomerFactory.getCustomers(function(output){
      $scope.customers = output;
    });
  }
  function updateProducts(){
    ProductFactory.getProducts(function(output) {
      $scope.products = output;
    })
  }
  function updateOrders(){
    OrderFactory.getOrders(function(output){
      $scope.orders = output;
    });
  }
  $scope.addOrder = function(){
    ProductFactory.getPrice($scope.new_order, function(output) {
      $scope.new_order.price = output;
      OrderFactory.addOrder($scope.new_order, 
        function(result){
        $scope.orders = result;
        $scope.new_order = {};
        });
    })
    
  }
  $scope.removeOrder = function(order){
    OrderFactory.removeOrder(order);
  }
})