(function() {
  var OrdersController = function($scope, $routeParams) {
    var customerId = $routeParams.customerId;
    $scope.orders = null;

    function init() {
      //Search the customers for the customerId
      for (var i=0, len=$scope.customers.length; i<len; i++){
        if($scope.customers[i].id === parseInt(customerId)) {
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }
    $scope.customers = [
      {
        id: 1,
        name:'sanjeet',
        joined:'2000-12-02',
        orderTotal: 10.096,
        orders: [{
          id: 1,
          product:'Shoes',
          total: 10.096
        }],
        age: 26,
      },
      {
        id: 2,
        name:'gurpreet',
        orderTotal:201.96,
        joined:'2005-12-07',
        orders:[{
          id: 2,
          product:'Jersey',
          total: 101.96
        },
        {
          id:3,
          product:'Shoes',
          total:100
        }],
        age: 24
      },
      {
        id: 3,
        name:'nikki',
        orderTotal: 14.561,
        joined:'2001-11-02',
        orders: [{
          id:4,
          product: 'Chocolate',
          total: 14.561
        }],
        age: 25
      }];
      init();
  }
  angular.module('app').controller('OrdersController',OrdersController)
}())
