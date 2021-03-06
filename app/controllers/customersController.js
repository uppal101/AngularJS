(function () {
  var CustomersController = function($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

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

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !scope.reverse;
    };
  };
  angular.module('app').controller('CustomersController', CustomersController)
}())
