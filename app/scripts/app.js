'use strict';

/**
 * @ngdoc overview
 * @name projectUltra
 * @description
 * # projectUltra
 *
 * Main module of the application.
 */
angular
    .module('projectUltra', [
        'ui.router',
        'kinvey'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/',
                    controller: 'LoginCtrl',
                    templateUrl: 'views/login.html'
                })
                .state('main', {
                    url: '/main',
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                });
            $urlRouterProvider.otherwise('/login');
        }])
    .run(['$kinvey', '$rootScope', '$state',
        function ($kinvey, $rootScope, $state) {
            $kinvey.init({
                appKey: 'kid_S1QmQwbL',
                appSecret: '374d76f9e7574bcf801b3827fa54f62b'
            }).then(function () {
                setStateChangeListener();
                setStarterPage();
            }, function (err) {
                console.log('init error ' + JSON.stringify(err));
            });

            function setStateChangeListener() {
                var stateChangeStartListener = $rootScope.$on('$stateChangeStart',
                    function (event) {
                        var activeUser = $kinvey.getActiveUser();
                        if (!activeUser) {
                            event.preventDefault();
                            $state.go('login');
                        }
                    });
                $rootScope.$on('$destroy', stateChangeStartListener());
            }

            function setStarterPage() {
                var activeUser = $kinvey.getActiveUser();
                console.log('active user ' + JSON.stringify(activeUser));
                if (activeUser) {
                    $state.go('main');
                } else {
                    $state.go('login');
                }
            }
        }]);

