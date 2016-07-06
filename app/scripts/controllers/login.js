'use strict';

angular.module('projectUltra')
    .controller('LoginCtrl', ['$scope', '$kinvey', '$state', function ($scope, $kinvey, $state) {
        $scope.user = {};
        $scope.login = function () {
            var promise = $kinvey.User.login($scope.user.login, $scope.user.password);
            promise.then(function (user) {
                console.log('login success ' + JSON.stringify(user));
                $state.go('main');
            }, function (err) {
                console.log('login err ' + JSON.stringify(err));
            });
        };
    }]);
