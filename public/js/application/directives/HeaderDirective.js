app.directive('ngHeader', function () {
    return{
        restrict: 'E',
        templateUrl: '_directives/Header.html',
        scope: {
            user: '=',
            notifications: '='
        }
    }
});