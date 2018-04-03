angular.module('myApp.loadMask',[]).controller('myApp.loadMaskCtrl',['$scope', function($scope){}])
.directive('loadMask',function(){
    return {
        templateUrl: 'loadMask/loadMask.html',
        replace: true,
        restrict: 'ACME'
    }
});