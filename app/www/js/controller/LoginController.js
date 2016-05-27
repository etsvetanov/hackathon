angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $q, $timeout, sendFromLogin, $rootScope, $state) {
  $scope.username = "asd";
  $rootScope.username = null;
  $scope.login = function() {
    sendFromLogin.Login($scope.username)
      .then(function successCallback(response) {
          $rootScope.username = response.data.Username;
          console.log($rootScope.username);
          $state.go('map');
        }, function errorCallback(response) {
          console.log('smthn failed miserably');
      });;

  }
});
