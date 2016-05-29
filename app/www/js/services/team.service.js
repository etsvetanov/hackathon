
angular.module('starter.controllers')
    .factory('teamsService', function($http) {
        var self = this,
            service = {};

        service.joinTeam = joinTeam;
        function joinTeam(id) {
            return $http({
                method: 'POST',
                url: 'http://localhost:49693/api/selectTeam',
                params: { teamId: id, guid : sessionStorage.getItem('userguid') }
            });
        }

        return service;
    });
