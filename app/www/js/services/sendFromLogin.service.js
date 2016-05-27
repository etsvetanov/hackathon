
angular.module('starter.controllers')
.factory('sendFromLogin', function() {
  var self = this,
      thingsThatareNotExposed = {},
      service = {};

  service.getData = getData;
  service.Login = login;

  function login(username){
    var result = null;
    $.ajax({
      type: "POST",
      url: url,
      data: { username: username },
      success: function(response) {
        result = response;
      },
      dataType: dataType
    });

    return result;
  }

  function getData(nothing) {
    console.log('sent from login');
    return;
  }

  return service;
});
