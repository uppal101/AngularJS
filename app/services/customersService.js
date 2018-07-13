(function() {
  var customersService = function() {
    var customers = [
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

      service.getCustomers = function() {
        return customers;
      }
      service.getCustomer = function(customerId){
        for (var i=0, len=customers.length; i<len; i++){
          if(customers[i].id === parseInt(customerId))
            return customers[i]
          }
          return {};
      }

      return service;
  }
  angular.module('app').service('customersService', customerFactory)
}());
