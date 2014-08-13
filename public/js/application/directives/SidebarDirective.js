app.directive('ngSidebar', function () {
    return{
        restrict: 'E',
        templateUrl: '_directives/Sidebar.html',
        scope: {
            user: '='
        }
    }
});