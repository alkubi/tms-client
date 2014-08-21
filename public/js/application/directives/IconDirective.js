app.directive('icon', function () {
    return{
        restrict: 'E',
        templateUrl: 'views/_directives/Icon.html',
        scope: {
            class: '@src'
        }
    }
});