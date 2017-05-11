var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider,$urlRouterProvider,$locationProvider,$sceProvider) {
    $stateProvider
        .state('home', {
        url: '/',
        templateUrl : 'views/home.html',
        controller  : 'homeController'
    })
        .state('posts', {
        url: '/posts',
        templateUrl : 'views/posts.html',
        controller  : 'postsController'
    })
        .state('radio', {
        url: '/radio',
        templateUrl : 'views/radio.html',
        controller  : 'radioController'
    });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $sceProvider.enabled(false);
});
myApp.controller('GlobalCtrl', function($scope) {
    // Event listener for state change.
    $scope.$on('$stateChangeStart', function(event, toState, toParams) {
        $scope.bodyClass = toState.name + '-page';
    });
});