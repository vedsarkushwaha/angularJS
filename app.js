(function() {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('myFirstController',myFunction);

    function myFunction($scope, $filter) {
      $scope.name = 'Vedsar';

      $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
    }
})();
