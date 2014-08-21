app.controller('KeysController',
    ['$rootScope', '$scope', '$routeParams', '$location', 'AppsService',
        function ($rootScope, $scope, $routeParams, $location, AppsService) {
            /**
             * getAppKeyAction()
             */
            if (!angular.isUndefined($routeParams.id_app)) {
                var id_app = parseInt($routeParams.id_app);
                if (Number.isInteger(id_app)) {
                    AppsService.getApp($scope, id_app);
                } else {
                    $location.url('/keys');
                }
            }
        }]);