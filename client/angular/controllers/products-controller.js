myApp.controller('ProductsController', function($scope, ProductFactory){
  updateProducts();
  function updateProducts(){
    ProductFactory.getProducts(function(output){
      $scope.products = output;
      var pagesShown = 1;
      var pageSize = 9;
    $scope.paginationLimit = function(data) {
        return pageSize * pagesShown;
      };
    $scope.hasMoreItemsToShow = function() {
        return pagesShown < ($scope.products.length / pageSize);
      };
      $scope.showMoreItems = function() {
        pagesShown = pagesShown + 1;
      };
    })
  }

  $scope.addProduct = function(){
    ProductFactory.addProduct($scope.new_product, 
      function(output){
        $scope.products = output;
        $scope.new_product = {};
      }, function(err){
        $scope.err = err;
    })
  }
})