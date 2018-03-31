'use strict';

angular.module('myApp').controller('View1Ctrl1', ['$scope', '$http', function($scope, $http) {
   $scope.value1 = 'This is view 1 Page'; 
        $http.get('http://www.mocky.io/v2/5ab56500300000550c8279b8').success (function(reponse) {
            $scope.results = reponse;
            console.log('Results', $scope.results);
          //  console.log('Types --> 3 converted', $scope.results.types[3]);
          //  console.log('Types --> 3', $scope.results['types']);
          //  console.log('Types --> 3', $scope.results["types"]);
    });
}]);

angular.module('myApp').directive('loadMask') {

    restrict: 'A',
        scope :true
        link: function(scope) {
            sk
        }
}