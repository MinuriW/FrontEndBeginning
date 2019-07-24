var appMinuri = angular.module('appMinuri', ['ui.router']);

appMinuri.controller('MainController', function ($scope) {
    $scope.description = 'This is the description';
    $scope.title = "Topic";
});

appMinuri.controller('SecondController', function ($scope) {
    $scope.response = {
        text: [
            'item1',
            'item2'
        ]
    };
});

appMinuri.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

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
        })
    $urlRouterProvider.otherwise('/error');
}]);