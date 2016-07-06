'use strict';

angular.module('projectUltra')
    .controller('MainCtrl', ['$scope', '$kinvey','$state', function ($scope, $kinvey, $state) {
        $scope.logout = function () {
            var promise = $kinvey.User.logout();
            promise.then(function () {
                console.log('logout success ');
                $state.go('login');

            }, function (err) {
                console.log('logout err ' + JSON.stringify(err));
            });
        };
    }]);
