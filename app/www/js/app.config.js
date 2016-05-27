(function () {
   'use strict';

  angular.module('starter')
    .config(['$stateProvider', config]);
  function config($stateProvider) {
       $stateProvider
         .state('main', {
               url: '/'
           })
           .state('login', {
                 url: '/login',
                 controller: 'LoginCtrl',
                 templateUrl: '../templates/login.html'
             });
  }

}());
