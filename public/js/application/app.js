var app = angular.module('tmsApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .otherwise({redirectTo: '/'})
        .when('/',{
            templateUrl: 'home/index.html',
            controller: 'IndexController'
        });
});