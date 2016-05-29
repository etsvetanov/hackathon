angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $q, $timeout, sendFromLogin, $rootScope, $state) {
  $scope.username = "";
  $rootScope.username;
  $rootScope.arrow = true;
  $scope.login = function(name) {
    sendFromLogin.Login(name)
      .then(function successCallback(response) {
          $rootScope.username = response.data.Username;
          sessionStorage.setItem('userguid', response.data.Guid);
          console.log($rootScope.username);
          $state.go('teams');
        }, function errorCallback(response) {
          console.log('smthn failed miserably');
      });;
  }
});
