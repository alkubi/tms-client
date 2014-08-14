app.directive('ngSidebar', function () {
    return{
        restrict: 'E',
        templateUrl: 'views/_directives/Sidebar.html',
        scope: {
            user: '='
        }
    }
});