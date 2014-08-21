app.service('AppsService',
    ['$rootScope', 'ApiService',
        function ($rootScope, ApiService) {
            /**********************************************************************************************************/
            /** PROPERTIES */
            /**
             * List of applications
             * @type {string[]}
             */
            var dataSourceApps = 'data/aps.json',
                dataSourceApp = 'data/app.json',
                deferred;
            /*****************************************************/
            this.apps = [];
            this.app = {};
            /**********************************************************************************************************/
            /** METHODS */
            /**
             * Get the apps
             * @param options
             */
            this.getApps = function (scope, options) {
                ApiService.fileQuery(dataSourceApps, options).then(
                    function success(data) {
                        $rootScope.loading = false;
                        scope.apps = data;
                    },
                    function error(message) {
                        $rootScope.loading = false;
                        scope.errors = (scope.errors || []);
                        scope.errors.push(message);
                    },
                    function waiting() {
                        $rootScope.loading = true;
                    }
                );
            };
            /*****************************************************/
            /**
             * Get the paramater app
             * @param scope
             * @param idApp
             */
            this.getApp = function (scope, idApp) {
                ApiService.fileQuery(dataSourceApp, {id: idApp}).then(
                    function success(data) {
                        $rootScope.loading = false;
                        scope.app = data;
                    },
                    function error(message) {
                        $rootScope.loading = false;
                        scope.errors = (scope.errors || []);
                        scope.errors.push(message);
                    },
                    function waiting() {
                        $rootScope.loading = true;
                    }
                );
            };
            /**********************************************************************************************************/
        }]);