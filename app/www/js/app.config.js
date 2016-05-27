(function () {
   'use strict';

  angular.module('starter.controllers')
    .config(['$routeProvider', config]);

  function config($routeProvider) {
       $routeProvider
         .state('/', {
            templateUrl: 'views/partials/register.html',
            controller:  'SignUpCtrl'
         })
         .state('/shit', {
            templateUrl: 'views/partials/register.html',
            controller:  'ShitCtrl'
         })
         .otherwise({ redirectTo: '/partial1' });
  }

}());