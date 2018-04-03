'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3',
    'myApp.view4',
    'myApp.loadMask',
    'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/view1', {
        templateUrl: '/view1/view1.html',
        controller: 'View1Ctrl1'
    }).when('/view2', {
        templateUrl: '/view2/view2.html',
        controller: 'View2Ctrl2'
    }).when('/view3', {
        templateUrl: '/view3/view3.html',
        controller: 'View3Ctrl3'
        })
        .when('/view4', {
            templateUrl: '/view4/view4.html',
            controller: 'View4Ctrl4'
        }).otherwise({ redirectTo: '/' });
}]);