
angular.module('starter.controllers')
.factory('sendNothing', function() {
  var self = this,
      thingsThatareNotExposed = {},
      service = {};

  service.getData = getData;

  function getData(nothing) {
    console.log('getData called');
    return;
  }

  return service;
});
