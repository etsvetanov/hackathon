(function () {
   'use strict';

    angular.module('starter')
        .config(function($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'StartCtrl'
                })
                .state('map', {
                    url: '/map',
                    templateUrl: 'templates/map.html',
                    controller: 'MapCtrl'
                });
        });
}());   