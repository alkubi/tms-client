app.controller('IndexController', ['$scope', function ($scope) {
    $scope.currentUser = {
        "fname": 'Alec',
        "lname": 'ROY'
    };

    $scope.alerts = {
        "notifications": [
            "Tout va bien",
            "Tout va mal"
        ]
    }
}]);