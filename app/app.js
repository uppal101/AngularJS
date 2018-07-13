// (function() {
//    angular.module('app').config(function($routeProvider) {
//      $routeProvider
//      .when('/', {
//        controller:'CustomersController',
//        templateUrl: 'app/views/customers.html'
//      })
//      .when('/orders/:customerId', {
//        controller: 'OrdersController',
//        templateUrl: 'app/views/orders.html'
//      })
//      .otherwise({ redirectTo: '/'});
//    })
// })

(function() {
   angular.module('app', ['ngRoute']).config([$routeProvider, $locationProvider, function($routeProvider, $locationProvider) {
     $routeProvider
     .when('/', {
       controller:'CustomersController',
       controllerAs: 'customers',
       templateUrl: 'app/views/customers.html'
     })
     .when('/orders/:customerId', {
       controller: 'OrdersController',
       controllerAs:'orders',
       templateUrl: 'app/views/orders.html'
     })
     .otherwise({ redirectTo: '/'});
   }
   $locationProvider.html5Mode(true);
])})
.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function MainCtrl($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])
.controller('CustomersController', ['$routeParams', function CustomersController($routeParams) {
  this.sortBy = 'name';
  this.reverse = false;

  this.customers = [
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

    this.doSort = function(propName) {
    this.sortBy = propName;
    this.reverse = !scope.reverse;
  };
}])
.controller('OrdersController', ['$routeParams', function OrdersController($routeParams) {
  var customerId = $routeParams.customerId;
  this.orders = null;

  this.customers = [
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

  function init() {
    //Search the customers for the customerId
    for (var i=0, len=this.customers.length; i<len; i++){
      if(this.customers[i].id === parseInt(customerId)) {
        this.orders = this.customers[i].orders;
        break;
      }
    }
  }

    init();
}])
