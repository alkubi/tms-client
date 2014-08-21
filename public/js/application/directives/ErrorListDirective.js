app.directive('ngErrorList', [function () {
    return{
        restrict: 'E',
        templateUrl: 'views/_directives/ErrorList.html',
        link: function (scope, element, attrs) {
            this.errors = scope.errors;
        }
    }
}]);