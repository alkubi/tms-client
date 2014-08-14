app.directive('ngHeader', function () {
    return{
        restrict: 'E',
        templateUrl: 'views/_directives/Header.html',
        scope: {
            user: '=',
            notifications: '='
        }
    }
});