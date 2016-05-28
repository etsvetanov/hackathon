(function () {
    'use strict';

    angular.module('starter')
        .factory('httpErrorResponseRetry', responseInterceptor);

    responseInterceptor.$inject = ['$q', '$injector'];

    function responseInterceptor($q, $injector) {
        var failed = {};

        return {
            'responseError': retry,
            'response': clearFlag
        };

        function clearFlag(response) {
            if (failed[response.config.url]) {
                failed[response.config.url] = undefined;
            }
            return response;
        }

        function retry(response) {
            if (response.status) {
                // should retry
                if (!failed[response.config.url]) {
                    failed[response.config.url] = 1;
                }
                else {
                    failed[response.config.url]++;
                }

                if (failed[response.config.url] >= 2) return $q.reject(response);

                var $http = $injector.get('$http');
                return $http(response.config);
            }
            // give up
            return $q.reject(response);
        }
    }
})();