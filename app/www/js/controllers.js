angular.module('starter.controllers', [])

.controller('StartCtrl', function($scope, $state) {
  $state.go('login');
})
