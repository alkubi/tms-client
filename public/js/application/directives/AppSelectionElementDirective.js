app.directive('ngAppSelectionElement',
    ['$location',
        function ($location) {
            return{
                transclude: true,
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModel) {
                    console.info(element);
                    scope.goToAppKeys = function () {
                        var id_app = ngModel.selectedApp;
                        if (!angular.isUndefined(id_app)) {
                            $location.url('/keys/' + id_app);
                        }
                    };

                }
            }
        }]);