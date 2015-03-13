angular.module('app',[])
 
.controller('resultCtrl', function($scope) {
  $scope.ps1 = $scope.ps2 = $scope.ps3 = $scope.ps4 = $scope.ps5 = 0;

  $scope.finalGrade = function() {
    console.log($scope.finalGrade);
    return ((parseFloat($scope.ps1) / 103.0 * 0.05 + parseFloat($scope.ps2) / 200.0 * 0.1 + parseFloat($scope.ps3) / 220.0 * 0.3 + parseFloat($scope.ps4) / 100.0 * 0.3 + parseFloat($scope.ps5) / 200.0 * 0.25) * 0.5) * 100; 
  }
});
