angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $q, $timeout, sendFromLogin, $rootScope) {
  $scope.username = "asd";
  $rootScope.username = null;
  $scope.login = function() {
    var usernameFromResponse = sendFromLogin.Login($scope.username);

    if (usernameFromResponse != null) {
      $rootScope.username = usernameFromResponse;
    }
  }
});
