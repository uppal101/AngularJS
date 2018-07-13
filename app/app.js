(function() {
   angular.module('app').config(function($routeProvider) {
     $RouteProvider
     .when('/', {
       controller:'CustomersController',
       templateUrl: 'app/views/customers.html'
     })
     .when('/orders/:customerId', {
       controller: 'OrdersController',
       templateUrl: 'app/views/orders.html'
     })
     .otherwise({ redirectTo: '/'});
   })
})
