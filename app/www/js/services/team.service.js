
angular.module('starter.controllers')
    .factory('teamsService', function($http) {
        var self = this,
            service = {};

        service.joinTeam = joinTeam;
        function joinTeam(id) {
            return $http({
                method: 'POST',
                url: 'http://gotagapi.azurewebsites.net/api/selectTeam',
                params: { teamId: id, guid : sessionStorage.getItem('userguid') }
            });
        }

        return service;
    });
