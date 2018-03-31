'use strict';

describe('view1Module', function() {
  beforeEach(module('myApp.view2'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('value2 should be equal to This is View 2 page', function() {
      var $scope = {};
      var controller = $controller('View2Ctrl2', { $scope: $scope });
      expect($scope.value2).toEqual('This is View 2 page');
    });
  });
});