var myApp = angular.module("myApp",['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './../partials/orders.html'
    })
    .when('/products/', {
      templateUrl: './../partials/products.html'
    })    
    .when('/productprofile/:id', {
      templateUrl: './../partials/productprofile.html'
    })  
    .when('/productprofile/:id/edit', {
      templateUrl: './../partials/productedit.html'
    }) 
    .when('/productprofile/:id/delete', {
      templateUrl: './../partials/productprofile.html'
    }) 
    .when('/customers', {
      templateUrl: './../partials/customers.html'
    })
    .when('/settings', {
      templateUrl: './../partials/settings.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});