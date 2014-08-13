var app = angular.module('tmsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .otherwise({redirectTo: '/'})
        .when('/',{
            templateUrl: 'home/index.html',
            controller: 'IndexController'
        });
}]);