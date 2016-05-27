
angular.module('starter.controllers')
.factory('sendFromLogin', function($http) {
  var loginUrl = 'http://gotag.azurewebsites.net/api/createUniqueUser';
  var self = this,
      thingsThatareNotExposed = {},
      service = {};

  service.getData = getData;
  service.Login = login;

  function login(username){
    return $http({
      method: 'POST',
      url: loginUrl,
      params: { requestedUsername: username }
    });
  }

  function getData(nothing) {
    console.log('sent from login');
    return;
  }

  return service;
});
