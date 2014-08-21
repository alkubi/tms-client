app.controller('IndexController',
    ['$rootScope', '$scope',
        function ($rootScope, $scope) {
            $rootScope.currentUser = {
                "fname": 'Alec',
                "lname": 'ROY'
            };

            $rootScope.alerts = {
                "notifications": [
                    "Tout va bien",
                    "Tout va mal"
                ]
            }
        }]);