myApp.controller('ProfileController', function($scope, $routeParams, ProfileFactory){
  getProfile();

  function getProfile(){
    ProfileFactory.getProfile($routeParams.id, function(output){
      $scope.profile = output;
      $scope.profile_id = output._id;
    });
  }
  $scope.removeProduct = function() {
    ProfileFactory.removeProduct();
  }

  $scope.updateProduct = function(){
    ProfileFactory.updateProduct($scope.profile);
  }
})