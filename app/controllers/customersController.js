(function () {
  var CustomersController = function($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.customers = [{name:'sanjeet', joined:'2000-12-02', orderTotal: 10.096, age: 26}, {name:'gurpreet', orderTotal:201.961, joined:'2005-12-07',age: 24}, {name:'nikki', orderTotal: 14.561, joined:'2001-11-02', age: 25}];

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !scope.reverse;
    };
  };
  angular.module('app').controller('CustomersController', CustomersController)
}())

// app.controller('CustomersController', ['$scope', function($scope) {
//   $scope.sortBy = 'name';
//   $scope.reverse = false;
//
//   $scope.customers = [{name:'sanjeet', joined:'2000-12-02', orderTotal: 10.096, age: 26}, {name:'gurpreet', orderTotal:201.961, joined:'2005-12-07',age: 24}, {name:'nikki', orderTotal: 14.561, joined:'2001-11-02', age: 25}];
//
//   $scope.doSort = function(propName) {
//     $scope.sortBy = propName;
//     $scope.reverse = !scope.reverse;
//   };
// }])
