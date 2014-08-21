var app = angular.module('tmsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .otherwise({redirectTo: '404'})
        .when('/404', {
            templateUrl: 'views/error/404.html',
            controller: 'ErrorController'
        })
        .when('/', {
            templateUrl: 'views/home/index.html',
            controller: 'IndexController'
        })
        .when('/home', {
            templateUrl: 'views/home/index.html',
            controller: 'IndexController'
        })
        .when('/keys', {
            templateUrl: 'views/keys/index.html',
            controller: 'KeysController'
        })
        .when('/keys/:id_app', {
            templateUrl: 'views/keys/keys-for-app.html',
            controller: 'KeysController'
        })
        .when('/apps', {
            templateUrl: 'views/apps/index.html',
            controller: 'AppsController'
        })
        .when('/accounts', {
            templateUrl: 'views/accounts/index.html',
            controller: 'AccountsController'
        })
        .when('/accounts/user/:id', {
            templateUrl: 'views/accounts/account.html',
            controller: 'AccountsController'
        })
        .when('/settings', {
            templateUrl: 'views/settings/index.html',
            controller: 'SettingsController'
        });
}]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(false);
}]);