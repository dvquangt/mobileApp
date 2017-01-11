myService
.factory('home', function() {
  var orders = [{
		id : 1,
		CustomerName: 'Duong Van Quang',
		ProductName: 'Laptop'
  }, {
		id : 2,
		CustomerName: 'Duong Van Quang',
		ProductName: 'Laptop'
  }, {
		id : 3,
		CustomerName: 'Duong Van Quang',
		ProductName: 'Laptop'
  }, {
		id : 4,
		CustomerName: 'Duong Van Quang',
		ProductName: 'Laptop'
  }, {
		id : 5,
		CustomerName: 'Duong Van Quang',
		ProductName: 'Laptop'
  }];

  return {
    getAll: function() {
      return orders;
    },
    remove: function(order) {
      orders.splice(orders.indexOf(order), 1);
    },
    get: function(orderId) {
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === parseInt(orderId)) {
          return orders[i];
        }
      }
      return null;
    }
  };
});
