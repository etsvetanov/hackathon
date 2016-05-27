
angular.module('starter.controllers')
.factory('sendFromLogin', function($http) {
  var loginUrl = 'http://gotag.azurewebsites.net/api/createUniqueUser';
  var self = this,
      thingsThatareNotExposed = {},
      service = {};

  service.getData = getData;
  service.Login = login;

  function login(username){
    var result = null;
    $http({
      method: 'POST',
      url: loginUrl,
      params: { requestedUsername: username }
    }).then(function successCallback(response) {
        result = response;
        console.log('successful');
      }, function errorCallback(response) {
        console.log('smthn failed miserably');
    });

    return result;
  }

  function getData(nothing) {
    console.log('sent from login');
    return;
  }

  return service;
});
