app.service('ApiService',
    ['$http', '$q', '$timeout',
        function ($http, $q, $timeout) {
            /**********************************************************************************************************/
            /** PROPERTIES */
            var service = this;

            this.apiUri = 'http://api.alkub.io/v1/';
            this.apiAuthKey = '1054bb4c-e45a-4318-a144-f309e886fb70';
            this.timeout = 0;
            this.deferred = $q.defer();

            /** METHODS */
            this.query = function (method, options) {
                options = (options || {});

                $http.get(this.buildQueryUri(method), options)
                    .success(function (data, status) {
                        service.result = data;
                        $timeout(function () {
                            service.deferred.resolve(service.result);
                        }, service.timeout);
                    })
                    .error(function (data, status) {
                        service.deferred.reject('Api call failed. Status code : ' + status);
                    });
                return this.deferred.promise;
            };
            /*****************************************************/
            this.buildQueryUri = function (method) {
                return (this.apiUri + method);
            };
            /*****************************************************/
            this.fileQuery = function (file, options) {
                options = (options || {});

                $http.get(file, options)
                    .success(function (data, status) {
                        service.result = data;
                        $timeout(function () {
                            service.deferred.resolve(service.result);
                        }, service.timeout);
                    })
                    .error(function (data, status) {
                        service.deferred.reject('File reading failed. Status code : ' + status);
                    });
                return this.deferred.promise;
            };
            /**********************************************************************************************************/
        }]);