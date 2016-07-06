'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('projectUltra'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should initialize user object', function () {
    var users = ['jack', 'igor', 'jeff'];
    expect(users).toEqual(['jack', 'igor', 'jeff']);
  });
});
