
angular.module('starter.controllers')
.factory('sendFromLogin', function($http) {
  var loginApiUrl = 'http://gotagapi.azurewebsites.net/api/createUniqueUser';
  var self = this,
      service = {};
  service.Login = login;

  function login(username){
    return $http({
      method: 'POST',
      url: loginApiUrl,
      params: { requestedUsername: username }
    });
  }

  return service;
});
