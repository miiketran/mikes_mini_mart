myApp.factory('OrderFactory', function($http){
  var factory = {};
  var orders = [];
  factory.getOrders = function(callback){
    $http.get('/orders').success(function(output){
      orders = output;
      callback(orders);
    });

  }
  factory.addOrder = function(info, callback){
    $http.post('/add',info).success(function(added_order){
      orders.push({name: added_order.name, product: added_order.product, quantity: added_order.quantity, total_price: added_order.total_price, date: added_order.date})
      Materialize.toast("Successfully Added Order", 4000);
      callback(orders);
    })
  }
  factory.removeOrder = function(order){
    console.log("factory");
    $http.post('/removeOrder', order).success(function(){
      for(var i=0; i<orders.length; i++){
        if(orders[i]._id == order._id){
          orders.splice(i,1);
          Materialize.toast("Successfully Removed Order", 4000);
          return;
        }
      }
    })
  }
  return factory;
})