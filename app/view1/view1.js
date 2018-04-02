'use strict';

angular.module('myApp.view1', [])
    .controller('View1Ctrl1', ['$scope', '$http', function($scope, $http) {
   $scope.value1 = 'This is view 1 Page'; 
        $http.get('http://www.mocky.io/v2/5ab56500300000550c8279b8').success (function(reponse) {
            $scope.signalLevelsData = reponse.results;
            console.log('SignalLevels:', $scope.signalLevelsData);
          //  console.log('Types --> 3 converted', $scope.signalLevelsData.types[3]);
          //  console.log('Types --> 3', $scope.signalLevelsData['types']);
          //  console.log('Types --> 3', $scope.signalLevelsData["types"]);
    });
}]);