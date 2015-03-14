angular.module('app',[])

.controller('resultCtrl', function($scope) {
	$scope.ps1 = $scope.ps2 = $scope.ps3 = $scope.ps4 = $scope.ps5 = 0;

	$scope.finalGrade = function() {
		console.log($scope.finalGrade);
		return ($scope.correctGrade($scope.ps1, 100) / 100.0 * 0.05 + 
			$scope.correctGrade($scope.ps2, 200) / 200.0 * 0.1 + 
			$scope.correctGrade($scope.ps3, 220) / 220.0 * 0.3 + 
			$scope.correctGrade($scope.ps4, 100) / 100.0 * 0.3 + 
			$scope.correctGrade($scope.ps5, 200) / 200.0 * 0.25) * 50; 
	}

	$scope.correctGrade = function(grade, max) {
		var intTest = /^\-?\d+$/
		if (intTest.test(grade)) {
			return Math.max(Math.min(grade, max), 0);
		} else {
			return 0;
		}
	}
});