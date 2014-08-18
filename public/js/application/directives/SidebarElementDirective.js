app.directive('ngSidebarElement', function ($location) {
    return{
        restrict: 'E',
        templateUrl: 'views/_directives/SidebarElement.html',
        scope: {
            route: '@',
            icon: '@',
            text: '@'
        },
        link: function (scope, element, attrs) {
            scope.isActive = function (route) {
                return route === $location.path();
            }
        }
    }
});