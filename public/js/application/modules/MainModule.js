var app = angular.module('tmsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .otherwise({redirectTo: '/'})
        .when('/',{
            templateUrl: 'views/home/index.html',
            controller: 'IndexController'
        })
        .when('/keys',{
            templateUrl: 'views/keys/index.html',
            controller: 'KeysController'
        })
        .when('/apps',{
            templateUrl: 'views/apps/index.html',
            controller: 'AppsController'
        })
        .when('/accounts',{
            templateUrl: 'views/accounts/index.html',
            controller: 'AccountsController'
        })
        .when('/settings',{
            templateUrl: 'views/settings/index.html',
            controller: 'SettingsController'
        });
}]);