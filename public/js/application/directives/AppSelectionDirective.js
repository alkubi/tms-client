app.directive('ngAppSelection',
    ['AppsService',
        function (AppsService) {
            return{
                restrict: 'E',
                templateUrl: 'views/_directives/AppSelection.html',
                link: function (scope, element, attrs) {
                    AppsService.getApps(scope);
                    console.info(element);
                }
            }
        }]);