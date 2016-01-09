myApp.factory('ProfileFactory', function($http){
  var factory = {};
  var profile;
  var profile_id;
  factory.getProfile = function(id, callback){
    $http.get('/profile/'+ id).success(function(output){
      console.log(output);
      profile_id = output._id;
      profile = output;
      callback(profile);
    });
  }
  factory.removeProduct = function() {
    console.log(profile_id);
    $http.delete('/product/'+ profile_id).success(function(){
      Materialize.toast("Successfully Deleted", 4000);
    });
  }
  factory.updateProduct = function(profile) {
    $http.put('/product/'+profile_id, profile).success(function(){
      Materialize.toast("Successfully Updated", 4000);
    });
  }
  return factory;
});
