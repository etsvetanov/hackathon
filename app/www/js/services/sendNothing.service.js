
angular.module('starter.controllers')
.factory('sendNothing', function($state) {
  var self = this,
      thingsThatareNotExposed = {},
      service = {};

  service.getData = getData;
  $state.go('login');
  function getData(nothing) {
    console.log('getData called');
    return;
  }

  return service;
});
