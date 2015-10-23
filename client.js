var app = angular.module('app',[])
	.controller('ctrl', ['$scope', function($scope) {
    $scope.user = 'username';
	$scope.pass = '';
	console.log($scope.user);
	var submit = function() {

	}
}]);