app.directive('ngTitle', function () {
    return{
        restrict: 'E',
        templateUrl: 'views/_directives/Title.html',
        scope: {
            main: '@',
            small: '@'
        }
    }
});