(function() {
  var OrdersController = function($scope, $routeParams, customersFactory) {
    var customerId = $routeParams.customerId;
    $scope.orders = null;
    $scope.customer = null;


    function init() {
      //Search the customers for the customerId
      $scope.customer = customersFactory.getCustomer(customerId);
    }

      init();
  }
  angular.module('app').controller('OrdersController',OrdersController)
}())
