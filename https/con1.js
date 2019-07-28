var appMinuri = angular.module('appMinuri', ['ui.router']);

appMinuri.controller('MainController', function ($scope, $state) {
    $scope.description = 'This is the description';
    $scope.title = "Topic";
});

appMinuri.controller('SecondController', function ($scope, $http) {
    $scope.response = {
        text: [
            $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts'

            }).then(function (resolved) {

                    var data = resolved.data;
                    $scope.response = data;
                }
            )
                .catch(function (reject) {
                    alert("error")
                })
        ]

    }
});

appMinuri.run(function ($state) {
    $state.go('root');
});

appMinuri.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $stateProvider
        .state('root', {
            templateUrl: './home.html',
            url: '/',
            controller: 'MainController'
        })
        .state('list', {
            templateUrl: './page2.html',
            url: '/page2',
            controller: 'SecondController'
        })
        .state('error', {
            templateUrl: './error.html',
            url: '/error'
        });
    $urlRouterProvider.otherwise('/error');

}]);