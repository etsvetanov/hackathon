
angular.module('starter.controllers')
.factory('sendFromTeam', function($http) {
  var teamApiUrl = 'http://gotag.azurewebsites.net/api/selectTeam';
  var self = this,
      thingsThatareNotExposed = {},
      service = {};

  service.TeamChosen = teamChosen;

  function teamChosen(teamName){
    return $http({
      method: 'POST',
      url: teamApiUrl,
      params: { teamName: 1 }
    });
  }

  return service;
});
