'use strict';

//describe('myApp.view1 module', function() {
//
//  beforeEach(module('myApp.view1'));
//
//  describe('view1 controller', function(){
//
//    it('should ....', inject(function($controller) {
//      //spec body
//      var view1Ctrl1 = $controller('View1Ctrl1');
//      expect(view1Ctrl1).toBeDefined();
//    }));
//
//  });
//});

describe('view1Module', function() {
  beforeEach(module('myApp.view1'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('value1 should be equal to this is view 1 page', function() {
      var $scope = {};
      var controller = $controller('View1Ctrl1', { $scope: $scope });
//      $scope.password = 'longerthaneightchars';
//      $scope.grade();
      expect($scope.value1).toEqual('This is view 1 Page');
    });
  });
});