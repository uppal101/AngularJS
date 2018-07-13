(function () {
  var CustomersController = function($scope, customersFactory, appSettings) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
      $scope.customers = customersFactory.getCustomers()
    }

    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !scope.reverse;
    };
  };
  angular.module('app').controller('CustomersController', CustomersController)
}())
