angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $q, $timeout, sendFromLogin, $rootScope, $state) {
  $scope.username = "";
  $rootScope.username;
  $scope.login = function(name) {
    sendFromLogin.Login(name)
      .then(function successCallback(response) {
          $rootScope.username = response.data.Username;
          console.log($rootScope.username);
          $state.go('teams');
        }, function errorCallback(response) {
          console.log('smthn failed miserably');
      });;
  }
});
