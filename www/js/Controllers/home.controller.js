myCtrl
.controller('homeCtrl', function($scope, home) {
	$scope.orders = home.getAll();
	$scope.remove = function(order) {
		home.remove(order);
	};
})
